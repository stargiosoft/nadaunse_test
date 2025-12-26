import { supabase } from './supabase';

/**
 * 카카오 로그인 (Kakao SDK → Supabase Auth)
 */
export const signInWithKakao = async () => {
  return new Promise<any>((resolve, reject) => {
    if (!window.Kakao?.Auth) {
      reject(new Error('카카오 SDK가 로드되지 않았습니다.'));
      return;
    }

    // 이미 로그인되어 있으면 로그아웃 후 재시작
    if (window.Kakao.Auth.getAccessToken()) {
      window.Kakao.Auth.logout(() => {
        signInWithKakao().then(resolve).catch(reject);
      });
      return;
    }

    window.Kakao.Auth.login({
      throughTalk: false, // 카카오톡 앱 대신 웹 팝업 사용
      success: async (authObj: any) => {
        try {
          // 카카오 사용자 정보 가져오기
          window.Kakao.API.request({
            url: '/v2/user/me',
            success: async (kakaoUser: any) => {
              console.log('카카오 사용자 정보:', kakaoUser);

              // Supabase 계정 이메일 생성
              const email = kakaoUser.kakao_account?.email || `kakao_${kakaoUser.id}@temp.fortune.app`;
              // 카카오 ID를 기반으로 고유한 비밀번호 생성 (환경 변수 대신 고정 시크릿 사용)
              const password = `kakao_${kakaoUser.id}_nadaunse_secret_2025`;

              // 1. 먼저 로그인 시도
              let { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
              });

              // 2. 계정이 없으면 생성
              if (error?.message?.includes('Invalid login credentials')) {
                console.log('신규 사용자 - 계정 생성 중...');
                const signUpResult = await supabase.auth.signUp({
                  email,
                  password,
                  options: {
                    data: {
                      provider: 'kakao',
                      provider_id: kakaoUser.id.toString(),
                      name: kakaoUser.properties?.nickname || '사용자',
                      nickname: kakaoUser.properties?.nickname || '사용자',
                      avatar_url: kakaoUser.properties?.profile_image || '',
                      profile_image: kakaoUser.properties?.profile_image || '',
                      terms_agreed: true,
                      privacy_agreed: true
                    }
                  }
                });

                data = signUpResult.data;
                error = signUpResult.error;

                if (!error) {
                  console.log('✅ 신규 계정 생성 완료!');
                }
              } else if (!error) {
                console.log('✅ 기존 계정 로그인 성공!');
              }

              if (error) {
                console.error('Supabase Auth 에러:', error);
                reject(error);
              } else {
                resolve(data);
              }
            },
            fail: (err: any) => {
              console.error('카카오 사용자 정보 요청 실패:', err);
              reject(err);
            }
          });
        } catch (err) {
          console.error('카카오 로그인 처리 중 에러:', err);
          reject(err);
        }
      },
      fail: (err: any) => {
        console.error('카카오 로그인 실패:', err);
        reject(err);
      }
    });
  });
};

/**
 * 구글 로그인 (Supabase OAuth)
 */
export const signInWithGoogle = async () => {
  const redirectUrl = `${window.location.origin}/auth/callback`;
  console.log('🔗 구글 OAuth redirectTo:', redirectUrl);
  
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectUrl,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent'
      }
    }
  });

  console.log('📦 signInWithOAuth 결과:', data);
  console.log('❌ signInWithOAuth 에러:', error);

  if (error) {
    console.error('구글 로그인 에러:', error);
    throw error;
  }

  return data;
};

/**
 * 로그아웃
 */
export const signOut = async () => {
  // Supabase 로그아웃
  await supabase.auth.signOut();

  // 카카오 로그아웃
  if (window.Kakao?.Auth?.getAccessToken()) {
    window.Kakao.Auth.logout(() => {
      console.log('카카오 로그아웃 완료');
    });
  }

  // 기존 localStorage 정리
  localStorage.removeItem('user');
  
  console.log('✅ 로그아웃 완료');
};

/**
 * 현재 로그인한 사용자 가져오기
 */
export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    console.error('사용자 정보 가져오기 실패:', error);
    return null;
  }

  return user;
};

/**
 * 로그인 상태 확인
 */
export const isAuthenticated = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return !!session;
};

/**
 * 세션 갱신
 */
export const refreshSession = async () => {
  const { data, error } = await supabase.auth.refreshSession();
  
  if (error) {
    console.error('세션 갱신 실패:', error);
    return null;
  }

  return data.session;
};