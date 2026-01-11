import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { projectId } from '../utils/supabase/info';
import { setUser as setSentryUser } from '../lib/sentry';

export default function AuthCallback() {
  const navigate = useNavigate();
  const isProcessing = useRef(false);

  useEffect(() => {
    console.log('🔄 AuthCallback 마운트됨');
    console.log('🔄 URL:', window.location.href);
    console.log('🔄 Hash:', window.location.hash);
    console.log('🔄 Search:', window.location.search);
    console.log('🔄 Pathname:', window.location.pathname);

    // ⭐️ /auth/callback 페이지가 아니면 실행 안 함
    if (!window.location.pathname.includes('/auth/callback')) {
      console.log('⚠️ /auth/callback 페이지가 아니므로 처리 안 함');
      return;
    }

    // Supabase Auth State 변경 리스너
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('🔔 Auth 상태 변경:', event);
      console.log('📦 세션:', session);
      console.log('🌍 현재 경로:', window.location.pathname);

      // INITIAL_SESSION이지만 세션이 null인 경우 수동으로 가져오기
      if (event === 'INITIAL_SESSION' && !session) {
        console.log('⚠️ INITIAL_SESSION인데 세션이 null → 수동 조회');
        const { data: { session: manualSession }, error } = await supabase.auth.getSession();
        console.log('🔍 수동 조회 세션:', manualSession);
        console.log('❌ 수동 조회 에러:', error);
        
        if (manualSession?.user) {
          console.log('✅ 수동 조회로 세션 발견! 처리 시작');
          if (isProcessing.current) {
            console.log('⏭️ 이미 처리 중이므로 스킵');
            return;
          }
          isProcessing.current = true;
          await processSession(manualSession);
        } else {
          console.log('❌ 수동 조회해도 세션 없음 → 로그인 페이지로');
          navigate('/login/new', { replace: true });
        }
        return; // 여기서 종료
      }

      if ((event === 'SIGNED_IN' || event === 'INITIAL_SESSION') && session?.user) {
        if (isProcessing.current) {
          console.log('⏭️ 이미 처리 중이므로 스킵');
          return;
        }

        console.log('✅ 구글 로그인 성공!');
        console.log('📧 이메일:', session.user.email);
        console.log('🆔 User ID:', session.user.id);

        isProcessing.current = true;
        await processSession(session);
      } else if (event === 'SIGNED_OUT') {
        console.log('❌ 로그아웃됨');
        navigate('/login/new', { replace: true });
      } else if (event === 'TOKEN_REFRESHED') {
        console.log('🔄 토큰 갱신됨');
      } else {
        console.log('❓ 알 수 없는 이벤트:', event, '세션:', session);
      }
    });

    // Cleanup
    return () => {
      console.log('🧹 AuthCallback 언마운트 - 리스너 제거');
      subscription.unsubscribe();
    };
  }, [navigate]);

  const processSession = async (session: any) => {
    console.log('⚙️ 세션 처리 시작');
    console.log('📧 세션 이메일:', session.user.email);
    console.log('🆔 세션 user_id:', session.user.id);

    try {
      // ⭐️ Edge Function으로 사용자 조회/생성 (RLS 없이 안전하게 처리)
      console.log('🔍 Edge Function 호출 시작...');
      console.log('🔍 조회할 ID:', session.user.id);

      // ⭐️ Edge Function 호출 (users API)
      console.log('🚀 Fetch 시작...');
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/users`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'get',  // 먼저 조회만 시도
          user_data: {
            email: session.user.email,
            name: session.user.user_metadata?.full_name || session.user.user_metadata?.name,
            avatar_url: session.user.user_metadata?.picture || session.user.user_metadata?.avatar_url,
            provider: session.user.app_metadata?.provider || 'google',
          },
        }),
      });

      console.log('📡 Edge Function 응답 상태:', response.status);
      
      const result = await response.json();
      console.log('📦 Edge Function 응답:', result);
      
      // ⭐️ 기존 사용자 (is_new: false)
      if (response.ok && result.success && !result.user.is_new) {
        console.log('✅ 기존 사용자 → 로그인 처리');
        
        const userData = {
          id: result.user.id,
          email: result.user.email,
          nickname: result.user.nickname || '사용자',
          provider: result.user.provider || 'google',
          provider_id: result.user.provider_id || session.user.id,
          profile_image: result.user.profile_image || '',
        };

        console.log('✅ 사용자 데이터:', userData);

        localStorage.setItem('user', JSON.stringify(userData));
        console.log('💾 localStorage에 저장 완료');

        // Sentry 사용자 컨텍스트 설정
        setSentryUser(userData.id, userData.email);

        // 쿠키에 로그인 정보 저장
        document.cookie = `last_login_provider=${userData.provider}; max-age=${60 * 60 * 24 * 365}; path=/`;
        if (userData.email) {
          document.cookie = `last_login_email=${encodeURIComponent(userData.email)}; max-age=${60 * 60 * 24 * 365}; path=/`;
        }
        console.log('🍪 쿠키 저장 완료');

        // ⭐ 로그인 성공 토스트 표시 플래그 저장
        sessionStorage.setItem('show_login_toast', 'true');

        // ⭐ 사주 정보 프리페칭 및 캐시 저장
        console.log('🔍 [AuthCallback] 사주 정보 프리페칭 시작...');
        try {
          const { data: sajuList, error: sajuError } = await supabase
            .from('saju_records')
            .select('*')
            .eq('user_id', session.user.id)
            .order('created_at', { ascending: true });

          if (sajuError) {
            console.error('❌ [AuthCallback] 사주 정보 조회 실패:', sajuError);
          } else if (sajuList && sajuList.length > 0) {
            console.log(`✅ [AuthCallback] 사주 정보 ${sajuList.length}개 조회 완료`);

            // 캐시에 저장
            localStorage.setItem('saju_records_cache', JSON.stringify(sajuList));

            // 대표 사주 캐시 저장
            const primarySaju = sajuList.find((s: any) => s.is_primary) || sajuList[0];
            localStorage.setItem('primary_saju', JSON.stringify(primarySaju));

            console.log('💾 [AuthCallback] 사주 정보 캐시 저장 완료 - 대표:', primarySaju.full_name);
          } else {
            console.log('ℹ️ [AuthCallback] 등록된 사주 정보 없음');
          }
        } catch (prefetchError) {
          console.error('❌ [AuthCallback] 사주 정보 프리페칭 실패:', prefetchError);
          // 프리페칭 실패해도 로그인 플로우는 계속 진행
        }

        // 리다이렉트 URL 확인
        const redirectUrl = localStorage.getItem('redirectAfterLogin');
        console.log('📍 저장된 리다이렉트 URL:', redirectUrl);

        if (redirectUrl) {
          console.log('✅ 리다이렉트 URL 존재 → 이동:', redirectUrl);
          localStorage.removeItem('redirectAfterLogin');
          navigate(redirectUrl, { replace: true });
        } else {
          console.log('❌ 리다이렉트 URL 없음 → 홈으로 이동');
          navigate('/', { replace: true });
        }

        return;
      }

      // ⭐️ 신규 사용자 (404 또는 is_new: true)
      if (response.status === 404 || (result.user && result.user.is_new)) {
        console.log('⚠️ 신규 사용자 → 약관 페이지로 이동');
        
        // 세션 정보를 localStorage에 임시 저장
        const tempUserData = {
          id: session.user.id,
          email: session.user.email,
          name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || session.user.email?.split('@')[0] || '사용자',
          avatar_url: session.user.user_metadata?.picture || session.user.user_metadata?.avatar_url || '',
          provider: session.user.app_metadata?.provider || 'google',
        };
        
        localStorage.setItem('tempUser', JSON.stringify(tempUserData));
        console.log('💾 임시 사용자 데이터 저장:', tempUserData);
        
        navigate('/signup/terms', { replace: true });
        return;
      }

      // ⭐️ 기타 에러
      console.error('🚨 예상치 못한 Edge Function 응답:', result);
      throw new Error(result.error || 'Edge Function 호출 실패');

    } catch (error) {
      console.error('🚨 processSession 전체 에러:', error);
      alert('로그인 처리 중 오류가 발생했습니다.\n다시 시도해주세요.');
      navigate('/login/new', { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#48b2af] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-black font-['Pretendard_Variable'] text-[16px]">로그인 처리 중...</p>
      </div>
    </div>
  );
}