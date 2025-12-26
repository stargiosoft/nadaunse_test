import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { issueWelcomeCoupon } from '../lib/coupon';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-4laayaclj0';
import svgPathsNew from '../imports/svg-90sehl95g8';

// --- SVG Components ---

function TermsIcon({ className }: { className?: string }) {
  return (
    <div className={`relative size-[16px] shrink-0 ${className}`} data-name="Icons">
      <div className="absolute contents inset-0" data-name="Box">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="arrow-down">
            <path d={svgPathsNew.p3993d9c0} id="Vector" stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CheckboxIcon({ checked }: { checked: boolean }) {
  return (
    <div className={`relative rounded-[8px] shrink-0 size-[28px] ${checked ? 'bg-[#48b2af] border-none' : 'bg-white border-2 border-[#e7e7e7] border-solid'}`}>
      {checked && (
        <svg className="absolute inset-0 m-auto w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  );
}

function ArrowLeftIcon() {
    return (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="arrow-left">
                <path d={svgPaths.p2a5cd480} id="Vector" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
            </g>
        </svg>
    );
}

// --- Main Components ---

interface TermsPageProps {
  onBack: () => void;
  onComplete: () => void;
}

export default function TermsPage({ onBack, onComplete }: TermsPageProps) {
  const [agreements, setAgreements] = useState({
    age14: false,
    terms: false,
    privacy: false,
    marketing: false,
    ads: false,
  });

  const [expanded, setExpanded] = useState({
    terms: false,
    privacy: false,
    marketing: false,
    ads: false,
  });

  const toggleAgreement = (key: keyof typeof agreements) => {
    setAgreements(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExpanded = (key: keyof typeof expanded) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allAgreed = Object.values(agreements).every(Boolean);
  
  const handleAllAgree = () => {
    const newValue = !allAgreed;
    setAgreements({
      age14: newValue,
      terms: newValue,
      privacy: newValue,
      marketing: newValue,
      ads: newValue,
    });
  };

  const requiredAgreed = agreements.age14 && agreements.terms && agreements.privacy;

  const handleSubmit = async () => {
    if (!requiredAgreed) return;

    try {
      // ⭐️ localStorage의 tempUser 사용 (AuthCallback에서 저장한 데이터)
      const tempUserJson = localStorage.getItem('tempUser');
      if (!tempUserJson) {
        alert('잘못된 접근입니다. 다시 로그인해주세요.');
        onBack();
        return;
      }

      const tempUser = JSON.parse(tempUserJson);
      console.log('📦 tempUser:', tempUser);

      // ⭐️ 먼저 이미 회원인지 확인
      const { data: existingUser } = await supabase
        .from('users')
        .select('*')
        .eq('id', tempUser.id)
        .maybeSingle();

      if (existingUser) {
        console.log('ℹ️ 이미 가입된 사용자 → 로그인 처리');
        
        // localStorage에 사용자 정보 저장
        localStorage.setItem('user', JSON.stringify(existingUser));
        localStorage.removeItem('tempUser');
        
        // 쿠키에 로그인 정보 저장
        document.cookie = `last_login_provider=${existingUser.provider}; max-age=${60 * 60 * 24 * 365}; path=/`;
        if (existingUser.email) {
          document.cookie = `last_login_email=${encodeURIComponent(existingUser.email)}; max-age=${60 * 60 * 24 * 365}; path=/`;
        }
        
        // 홈으로 이동 (회원가입 완료 페이지 건너뛰기)
        window.location.href = '/';
        return;
      }

      // ⭐️ public.users 테이블에 사용자 정보 저장
      const { data: newUser, error } = await supabase
        .from('users')
        .insert({
          id: tempUser.id,  // ⭐️ auth.users의 id와 동일하게 설정
          provider: tempUser.provider,
          provider_id: tempUser.provider_id || tempUser.id,  // provider_id는 auth.users의 id
          email: tempUser.email,
          nickname: tempUser.name,  // ⭐️ name이 아니라 nickname 컬럼
          profile_image: tempUser.avatar_url || '',  // ⭐️ avatar_url이 아니라 profile_image 컬럼
          role: 'user', // 신규 사용자는 기본적으로 'user' 역할
          terms_agreed: true,
          privacy_agreed: true,
          marketing_agreed: agreements.marketing,
          terms_agreed_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) {
        console.error('❌ 회원가입 실패:', error);
        
        // 중복 키 에러 체크
        if (error.code === '23505') {
          console.log('ℹ️ 중복 키 에러 → 이미 가입된 사용자로 간주');
          
          // 다시 조회해서 로그인 처리
          const { data: user } = await supabase
            .from('users')
            .select('*')
            .eq('id', tempUser.id)
            .single();
          
          if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.removeItem('tempUser');
            
            document.cookie = `last_login_provider=${user.provider}; max-age=${60 * 60 * 24 * 365}; path=/`;
            if (user.email) {
              document.cookie = `last_login_email=${encodeURIComponent(user.email)}; max-age=${60 * 60 * 24 * 365}; path=/`;
            }
            
            window.location.href = '/';
            return;
          }
        }
        
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
        return;
      }

      console.log('✅ 회원가입 성공:', newUser);

      // ⭐️ localStorage에 사용자 정보 저장
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.removeItem('tempUser');  // 임시 데이터 제거
      
      // 쿠키에 로그인 정보 저장
      document.cookie = `last_login_provider=${newUser.provider}; max-age=${60 * 60 * 24 * 365}; path=/`;
      if (newUser.email) {
        document.cookie = `last_login_email=${encodeURIComponent(newUser.email)}; max-age=${60 * 60 * 24 * 365}; path=/`;
      }

      // ⭐ 가입 축하 쿠폰 발급 (백그라운드에서 실행)
      console.log('🎟️ [회원가입] 가입 축하 쿠폰 발급 시작...');
      issueWelcomeCoupon(newUser.id)
        .then((result) => {
          if (result.success) {
            console.log('✅ [회원가입] 가입 축하 쿠폰 발급 성공!');
            // 쿠폰 발급 성공 플래그 저장 (WelcomeCouponPage에서 사용)
            localStorage.setItem('welcomeCouponIssued', 'true');
          } else {
            console.error('❌ [회원가입] 가입 축하 쿠폰 발급 실패:', result.error);
          }
        })
        .catch((error) => {
          console.error('❌ [회원가입] 가입 축하 쿠폰 발급 예외:', error);
        });
      
      onComplete();
    } catch (err) {
      console.error('❌ 회원가입 오류:', err);
      alert('오류가 발생했습니다.');
    }
  };

  return (
    <div className="bg-white relative w-full min-h-screen flex justify-center" data-name="약관 동의 _ 390" style={{ scrollbarGutter: 'stable' } as React.CSSProperties}>
      <div className="relative w-full max-w-[440px] min-h-screen flex flex-col bg-white">
        {/* 1. 상단 네비게이션 */}
        <div className="shrink-0 w-full bg-white z-10">
          <div className="h-[52px] w-full shrink-0" aria-hidden="true" />
          <div className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-[440px] h-[52px] w-full flex items-center px-[12px] bg-white">
            <div 
              onClick={onBack} 
              className="flex items-center justify-center p-[4px] rounded-[12px] size-[44px] cursor-pointer text-[#848484] active:bg-gray-100 active:scale-95 transition-all duration-200"
            >
              <div className="size-[24px]">
                <ArrowLeftIcon />
              </div>
            </div>
          </div>
        </div>

        {/* 2. 헤더 텍스트 */}
        <div className="shrink-0 px-[20px] pt-[20px] pb-[40px] text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="font-['Pretendard_Variable'] font-medium leading-[35.5px] text-[24px] tracking-[-0.48px] text-black"
          >
            바로 만나기 전
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-['Pretendard_Variable'] text-[27px] leading-[39.5px] font-bold tracking-[-0.27px] text-black mt-[4px]"
          >
            잠깐, 약관에 동의해 주세요!
          </motion.p>
        </div>

        {/* 3. 중앙 약관 리스트 (Scrollable, Scrollbar Hidden) */}
        <div className="flex-1 pl-[20px] pr-[36px] flex flex-col gap-[4px] pt-[0px] pb-[220px]">
          
          {/* Age 14 (Mandatory) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full flex flex-row items-center justify-between min-h-[44px]"
          >
              <div className="flex gap-[12px] items-center text-[16px] tracking-[-0.32px] whitespace-pre">
                  <p className="font-['Pretendard_Variable'] font-semibold text-[#48b2af]">필수</p>
                  <p className="font-['Pretendard_Variable'] text-black">만 14세 이상입니다</p>
              </div>
              <div onClick={() => toggleAgreement('age14')} className="cursor-pointer">
                  <CheckboxIcon checked={agreements.age14} />
              </div>
          </motion.div>

          {/* Terms (Mandatory) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full flex flex-col"
          >
              <div className="flex flex-row items-center justify-between min-h-[44px]">
                  <div onClick={() => toggleExpanded('terms')} className="flex gap-[8px] grow items-center cursor-pointer">
                      <div className="flex gap-[12px] items-center text-[16px] tracking-[-0.32px] whitespace-pre">
                          <p className="font-['Pretendard_Variable'] font-semibold text-[#48b2af]">필수</p>
                          <p className="font-['Pretendard_Variable'] text-black">이용약관 동의</p>
                      </div>
                      <TermsIcon className={`transition-transform duration-300 ${expanded.terms ? 'rotate-180' : ''}`} />
                  </div>
                  <div onClick={() => toggleAgreement('terms')} className="cursor-pointer">
                      <CheckboxIcon checked={agreements.terms} />
                  </div>
              </div>
              <AnimatePresence initial={false}>
              {expanded.terms && (
                  <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-full overflow-hidden"
                  >
                      <div className="bg-[#f7f8f9] px-[20px] py-[16px] mt-1 mb-3 rounded-[12px] max-h-[150px] overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-[#d1d5db] [&::-webkit-scrollbar-thumb]:rounded-[4px] [&::-webkit-scrollbar-track]:bg-transparent">
                      <div className="font-['Pretendard_Variable'] text-[14px] leading-[22px] text-[#525252] tracking-[-0.42px] space-y-4">
                          <p>본 약관은 주식회사 스타지오소프트(이하 "회사")가 제공하는 운세 서비스 '나다운'의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항 등을 규정합니다.</p>
                          <div>
                              <p className="font-bold mb-1">제1조 [목적]</p>
                              <p>이 약관은 회사가 제공하는 서비스의 이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.</p>
                          </div>
                          {/* ... (생략된 약관 내용 일부만 예시로 포함, 실제로는 전체 내용이 들어감) */}
                          <p>상세 약관 내용은 생략합니다. (실제 서비스에서는 전체 내용 포함 필요)</p>
                      </div>
                  </div>
                  </motion.div>
              )}
              </AnimatePresence>
          </motion.div>

          {/* Privacy (Mandatory) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full flex flex-col"
          >
              <div className="flex flex-row items-center justify-between min-h-[44px]">
                  <div onClick={() => toggleExpanded('privacy')} className="flex gap-[8px] grow items-center cursor-pointer">
                      <div className="flex gap-[12px] items-center text-[16px] tracking-[-0.32px] whitespace-pre">
                          <p className="font-['Pretendard_Variable'] font-semibold text-[#48b2af]">필수</p>
                          <p className="font-['Pretendard_Variable'] text-black">개인정보 처리방침 동의</p>
                      </div>
                      <TermsIcon className={`transition-transform duration-300 ${expanded.privacy ? 'rotate-180' : ''}`} />
                  </div>
                  <div onClick={() => toggleAgreement('privacy')} className="cursor-pointer">
                      <CheckboxIcon checked={agreements.privacy} />
                  </div>
              </div>
              <AnimatePresence initial={false}>
              {expanded.privacy && (
                  <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-full overflow-hidden"
                  >
                      <div className="bg-[#f7f8f9] px-[20px] py-[16px] mt-1 mb-3 rounded-[12px] max-h-[240px] overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-[#d1d5db] [&::-webkit-scrollbar-thumb]:rounded-[4px] [&::-webkit-scrollbar-track]:bg-transparent">
                      <div className="font-['Pretendard_Variable'] text-[14px] leading-[22px] text-[#525252] tracking-[-0.42px] space-y-4">
                          <p>스타지오소프트는 개인정보보호법 등 관련 법령을 준수하며, 이용자의 개인정보를 중요하게 생각합니다.</p>
                          <div>
                              <p className="font-bold mb-1">제1조 (수집하는 개인정보 항목)</p>
                              <p>회사는 최소한의 개인정보만을 수집합니다. (이름, 이메일, 생년월일 등)</p>
                          </div>
                          {/* ... */}
                      </div>
                  </div>
                  </motion.div>
              )}
              </AnimatePresence>
          </motion.div>

          {/* Marketing (Optional) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full flex flex-col"
          >
              <div className="flex flex-row items-center justify-between min-h-[44px]">
                  <div onClick={() => toggleExpanded('marketing')} className="flex gap-[8px] grow items-center cursor-pointer">
                      <div className="flex gap-[12px] items-center text-[16px] tracking-[-0.32px] whitespace-pre">
                          <p className="font-['Pretendard_Variable'] font-semibold text-[#999999]">선택</p>
                          <p className="font-['Pretendard_Variable'] text-black">마케팅 정보 수신 동의</p>
                      </div>
                      <TermsIcon className={`transition-transform duration-300 ${expanded.marketing ? 'rotate-180' : ''}`} />
                  </div>
                  <div onClick={() => toggleAgreement('marketing')} className="cursor-pointer">
                      <CheckboxIcon checked={agreements.marketing} />
                  </div>
              </div>
              <AnimatePresence initial={false}>
              {expanded.marketing && (
                  <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-full overflow-hidden"
                  >
                      <div className="bg-[#f7f8f9] px-[20px] py-[16px] mt-1 mb-3 rounded-[12px] max-h-[150px] overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-[#d1d5db] [&::-webkit-scrollbar-thumb]:rounded-[4px] [&::-webkit-scrollbar-track]:bg-transparent">
                      <div className="font-['Pretendard_Variable'] text-[14px] leading-[22px] text-[#525252] tracking-[-0.42px] space-y-4">
                          <p>이벤트 및 혜택 정보를 수신합니다.</p>
                      </div>
                  </div>
                  </motion.div>
              )}
              </AnimatePresence>
          </motion.div>

          {/* Ads (Optional) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="w-full flex flex-col"
          >
              <div className="flex flex-row items-center justify-between min-h-[44px]">
                  <div onClick={() => toggleExpanded('ads')} className="flex gap-[8px] grow items-center cursor-pointer">
                      <div className="flex gap-[12px] items-center text-[16px] tracking-[-0.32px] whitespace-pre">
                          <p className="font-['Pretendard_Variable'] font-semibold text-[#999999]">선택</p>
                          <p className="font-['Pretendard_Variable'] text-black">광고성 정보 수신 동의</p>
                      </div>
                      <TermsIcon className={`transition-transform duration-300 ${expanded.ads ? 'rotate-180' : ''}`} />
                  </div>
                  <div onClick={() => toggleAgreement('ads')} className="cursor-pointer">
                      <CheckboxIcon checked={agreements.ads} />
                  </div>
              </div>
              <AnimatePresence initial={false}>
              {expanded.ads && (
                  <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="w-full overflow-hidden"
                  >
                      <div className="bg-[#f7f8f9] px-[20px] py-[16px] mt-1 mb-3 rounded-[12px] max-h-[150px] overflow-y-auto [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-thumb]:bg-[#d1d5db] [&::-webkit-scrollbar-thumb]:rounded-[4px] [&::-webkit-scrollbar-track]:bg-transparent">
                      <div className="font-['Pretendard_Variable'] text-[14px] leading-[22px] text-[#525252] tracking-[-0.42px] space-y-4">
                          <p>귀하는 위와 같은 광고성 정보 수신에 동의하지 않으실 수 있습니다.</p>
                      </div>
                  </div>
                  </motion.div>
              )}
              </AnimatePresence>
          </motion.div>
        </div>

        {/* 4. 하단 고정 영역 */}
        <div className="fixed bottom-[env(safe-area-inset-bottom)] left-0 right-0 mx-auto w-full max-w-[440px] px-[20px] pb-[34px] pt-[16px] bg-white shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] flex flex-col gap-[12px] z-20">
          
          {/* 약관 전체 동의 박스 */}
          <div onClick={handleAllAgree} className="w-full bg-[#f7f8f9] rounded-[12px] p-[16px] flex items-center justify-between cursor-pointer">
            <span className="font-['Pretendard_Variable'] font-semibold text-[16px] tracking-[-0.32px] text-black">
              약관 전체 동의
            </span>
            <CheckboxIcon checked={allAgreed} />
          </div>

          {/* 다음 단계 버튼 */}
          <motion.button
            onClick={handleSubmit}
            disabled={!requiredAgreed}
            className={`w-full h-auto py-[16px] rounded-[16px] flex items-center justify-center overflow-hidden transition-all ${
              requiredAgreed ? 'bg-[#48b2af] text-white cursor-pointer' : 'bg-[#f8f8f8] text-[#b7b7b7] cursor-not-allowed'
            }`}
            whileTap={requiredAgreed ? { scale: 0.96, backgroundColor: "#36908f" } : undefined}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="font-['Pretendard_Variable'] font-medium text-[16px] tracking-[-0.32px]">
              다음 단계로 이동하기
            </span>
          </motion.button>

          {/* 개발용: 완료 페이지 확인 버튼 */}
          <button onClick={onComplete} className="w-full py-2 text-xs text-gray-400 underline">
            [개발용] 약관동의 완료 페이지 보기
          </button>
        </div>

      </div>
    </div>
  );
}