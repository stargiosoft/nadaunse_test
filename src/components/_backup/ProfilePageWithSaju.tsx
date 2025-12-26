import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-iwpvhe731i";
import { supabase } from '../lib/supabase';
import { signOut } from '../lib/auth';
import { SessionExpiredDialog } from './SessionExpiredDialog';
import Footer from './Footer';
import { getZodiacImageUrl, getRelationshipText } from '../lib/zodiacUtils';
import { ProfileSkeletonEmpty, ProfileSkeletonWithSaju } from './skeletons/ProfileSkeleton';

interface ProfilePageProps {
  onBack: () => void;
  onLogout: () => void;
  onNavigateToMasterContent?: () => void;
  onNavigateToTermsOfService?: () => void;
  onNavigateToPrivacyPolicy?: () => void;
  onNavigateToPurchaseHistory?: () => void;
  onNavigateToSajuInput?: () => void;
  onNavigateToSajuManagement?: () => void;
}

// 사주 정보 타입
interface SajuRecord {
  id: string;
  nickname: string;
  relationship: string;
  birth_date: string;
  birth_time: string;
  calendar_type: string;
  gender: string;
  zodiac_sign: string;
  chinese_zodiac: string;
  is_primary: boolean;
}

// Arrow Right Icon
function ArrowRightIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="arrow-right">
        <path d={svgPaths.p232a3c80} stroke="var(--stroke-0, #B7B7B7)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
      </g>
    </svg>
  );
}

// Arrow Left Icon
function ArrowLeftIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
      <g id="arrow-left">
        <path d={svgPaths.p2a5cd480} stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.7" />
      </g>
    </svg>
  );
}

// Profile Icon (기본)
function ProfileIcon() {
  return (
    <div className="relative shrink-0 size-[62px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
        <g id="Group">
          <path d={svgPaths.p961370} fill="var(--fill-0, #E4F7F7)" id="Vector" />
        </g>
      </svg>
      <div className="absolute inset-[20.11%_23.69%_18.25%_23.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 39">
          <g id="Profile Icon">
            <path d={svgPaths.pa9095f0} fill="var(--fill-0, #557170)" id="Vector" />
            <path d={svgPaths.p1139d800} fill="var(--fill-0, #3FB5B3)" id="Vector_2" />
            <path d={svgPaths.p4bd4980} fill="var(--fill-0, #8BE1DF)" id="Vector_3" />
            <path d={svgPaths.p36a0700} fill="var(--fill-0, #3FB5B3)" id="Vector_4" />
            <path d={svgPaths.p786fd00} fill="var(--fill-0, #3FB5B3)" id="Vector_5" />
            <path d={svgPaths.p1a321300} fill="var(--fill-0, #C8FFFD)" id="Vector_6" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// 생년월일시 포맷팅 (예: "양력 1994.07.23 午(오)시")
function formatBirthDateTime(birthDate: string, birthTime: string, calendarType: string): string {
  const [year, month, day] = birthDate.split('-');
  const calendarPrefix = calendarType === 'solar' ? '양력' : '음력';
  
  // birth_time이 "午(오시)" 형태라고 가정
  return `${calendarPrefix} ${year}.${month}.${day} ${birthTime}`;
}

export default function ProfilePageWithSaju({ 
  onBack, 
  onLogout, 
  onNavigateToMasterContent, 
  onNavigateToTermsOfService, 
  onNavigateToPrivacyPolicy, 
  onNavigateToPurchaseHistory, 
  onNavigateToSajuInput, 
  onNavigateToSajuManagement 
}: ProfilePageProps) {
  const [user, setUser] = useState<any>(null);
  const [isMaster, setIsMaster] = useState(false);
  const [isCheckingSaju, setIsCheckingSaju] = useState(false);
  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const [primarySaju, setPrimarySaju] = useState<SajuRecord | null>(null);
  const [isLoadingSaju, setIsLoadingSaju] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      
      if (authUser) {
        const { data: userData, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', authUser.id)
          .single();

        if (userData && !error) {
          setUser(userData);
          setIsMaster(userData.role === 'master');
          localStorage.setItem('user', JSON.stringify(userData));
        }
        
        await loadPrimarySaju(authUser.id);
      } else {
        setIsSessionExpired(true);
      }
    };

    loadUser();
  }, []);
  
  /**
   * 대표 사주 정보 로드
   * 1. is_primary = true인 사주 우선
   * 2. 없으면 첫 번째 사주
   */
  const loadPrimarySaju = async (userId: string) => {
    try {
      setIsLoadingSaju(true);
      
      const { data: sajuList, error } = await supabase
        .from('saju_records')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: true });
      
      if (error) {
        console.error('❌ 사주 정보 로드 실패:', error);
        setPrimarySaju(null);
        return;
      }
      
      if (sajuList && sajuList.length > 0) {
        const primary = sajuList.find((s: any) => s.is_primary) || sajuList[0];
        setPrimarySaju(primary);
        console.log('✅ 대표 사주 로드 완료:', primary);
      } else {
        setPrimarySaju(null);
        console.log('📭 등록된 사주 없음');
      }
    } catch (error) {
      console.error('❌ 사주 정보 로드 중 오류:', error);
      setPrimarySaju(null);
    } finally {
      setIsLoadingSaju(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      console.log('✅ 로그아웃 완료');
      if (onLogout) {
        onLogout();
      }
    } catch (error) {
      console.error('❌ 로그아웃 실패:', error);
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  const handleSajuMenuClick = async () => {
    if (isCheckingSaju) return;
    
    setIsCheckingSaju(true);
    
    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      
      if (!authUser) {
        alert('로그인이 필요합니다');
        return;
      }

      const { data: sajuList, error } = await supabase
        .from('saju_records')
        .select('*')
        .eq('user_id', authUser.id);

      if (error) {
        alert('사주 정보를 불러오는데 실패했습니다');
        return;
      }

      if (!sajuList || sajuList.length === 0) {
        if (onNavigateToSajuInput) {
          onNavigateToSajuInput();
        }
      } else {
        if (onNavigateToSajuManagement) {
          onNavigateToSajuManagement();
        }
      }
    } catch (error) {
      alert('네트워크 연결을 확인해주세요');
    } finally {
      setIsCheckingSaju(false);
    }
  };

  // 텍스트 구분선
  function TextDivider() {
    return (
      <div className="h-[6px] relative shrink-0 w-0">
        <div className="absolute inset-[-8.33%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
            <path d="M0.5 0.5V6.5" stroke="rgba(212, 212, 212, 1)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white relative w-full min-h-screen flex justify-center">
      <div className="relative w-full max-w-[390px] min-h-screen flex flex-col bg-white">
        
        {/* Top Navigation */}
        <div className="bg-white h-[52px] relative shrink-0 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col h-[52px] items-start justify-center px-[12px] py-[4px] relative w-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div onClick={onBack} className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] cursor-pointer">
                  <div className="relative shrink-0 size-[24px]">
                    <ArrowLeftIcon />
                  </div>
                </div>
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25.5px] text-[18px] text-black tracking-[-0.36px]">마이페이지</p>
                <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-[16px] shrink-0 w-full" />

        {/* Main Content */}
        <div className="flex-1 flex flex-col px-[20px] pb-[40px]">
          
          {/* Profile Section - 조건부 렌더링 */}
          {isLoadingSaju ? (
            // 로딩 중 - 전체 스켈레톤 (사주 등록 상태로 가정)
            <ProfileSkeletonWithSaju />
          ) : primarySaju ? (
            // 사주 정보 있음
            <div className="content-stretch flex flex-col gap-[16px] py-[32px] w-full">
              {/* 프로필 이미지 + 닉네임/관계 */}
              <div className="content-stretch flex gap-[12px] items-center w-full">
                <div className="pointer-events-none relative rounded-[12px] shrink-0 size-[72px]">
                  <img 
                    alt={primarySaju.chinese_zodiac}
                    className="absolute inset-0 max-w-none object-cover rounded-[12px] size-full"
                    src={getZodiacImageUrl(primarySaju.chinese_zodiac)}
                    loading="lazy"
                  />
                  <div aria-hidden="true" className="absolute border border-[#f8f8f8] border-solid inset-0 rounded-[12px]" />
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px text-nowrap">
                  <p className="font-['Pretendard_Variable:Regular',sans-serif] h-[16px] leading-[16px] overflow-ellipsis overflow-hidden text-[#848484] text-[12px] tracking-[-0.24px] w-full">
                    {primarySaju.chinese_zodiac}
                  </p>
                  <p className="font-['Pretendard_Variable:SemiBold',sans-serif] leading-[25px] min-w-full overflow-ellipsis overflow-hidden text-[16px] text-black tracking-[-0.32px] w-[min-content]">
                    {primarySaju.nickname} ({getRelationshipText(primarySaju.relationship)})
                  </p>
                </div>
              </div>

              {/* 생년월일시 / 띠 / 별자리 / 성별 */}
              <div className="bg-[#f9f9f9] relative rounded-[8px] w-full">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center p-[12px] w-full">
                    <div className="content-stretch flex items-center justify-between rounded-[12px] w-full">
                      <p className="font-['Pretendard_Variable:Regular','Noto_Sans_JP:Regular',sans-serif] leading-[19px] overflow-ellipsis overflow-hidden text-[#525252] text-[13px] text-nowrap tracking-[-0.26px]">
                        {formatBirthDateTime(primarySaju.birth_date, primarySaju.birth_time, primarySaju.calendar_type)}
                      </p>
                      <TextDivider />
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[19px] overflow-ellipsis overflow-hidden text-[#525252] text-[13px] text-nowrap tracking-[-0.26px]">
                        {primarySaju.chinese_zodiac}
                      </p>
                      <TextDivider />
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[19px] overflow-ellipsis overflow-hidden text-[#525252] text-[13px] text-nowrap tracking-[-0.26px]">
                        {primarySaju.zodiac_sign}
                      </p>
                      <TextDivider />
                      <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[19px] overflow-ellipsis overflow-hidden text-[#525252] text-[13px] text-nowrap tracking-[-0.26px]">
                        {primarySaju.gender === 'male' ? '남성' : '여성'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // 사주 정보 없음
            <div className="content-stretch flex flex-col gap-[32px] py-[32px] w-full">
              {/* Profile Icon - 중앙 정렬 */}
              <div className="flex items-center justify-center relative shrink-0 w-full">
                <ProfileIcon />
              </div>

              {/* Text Lines */}
              <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
                <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] text-[17px] text-black text-center tracking-[-0.34px]">
                  아직 등록된 사주 정보가 없어요
                </p>
                <p className="font-['Pretendard_Variable:Regular',sans-serif] leading-[25.5px] text-[15px] text-[#6d6d6d] text-center tracking-[-0.3px]">
                  사주 정보를 등록하고<br />나만의 운세를 확인해보세요
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => onNavigateToSajuInput && onNavigateToSajuInput()}
                className="bg-[#f0f8f8] h-[48px] rounded-[12px] shrink-0 w-full cursor-pointer border-none hover:bg-[#e4f7f7] transition-colors"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[25px] text-[16px] text-[#48b2af] text-nowrap tracking-[-0.32px]">
                      사주 정보 등록하기
                    </p>
                  </div>
                </div>
              </button>
            </div>
          )}

          {/* Divider */}
          <div className="h-[1px] w-full bg-[#F3F3F3] my-[20px]" />

          {/* Menu List */}
          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
            {isMaster && (
              <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] rounded-[16px] w-full cursor-pointer hover:bg-gray-50" onClick={onNavigateToMasterContent}>
                <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] text-[16px] text-black tracking-[-0.32px]">콘텐츠 만들기</p>
                <div className="relative shrink-0 size-[16px]">
                  <ArrowRightIcon />
                </div>
              </div>
            )}
            <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] rounded-[16px] w-full cursor-pointer hover:bg-gray-50" onClick={handleSajuMenuClick}>
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] text-[16px] text-black tracking-[-0.32px]">사주 정보 관리</p>
              <div className="relative shrink-0 size-[16px]">
                <ArrowRightIcon />
              </div>
            </div>
            <div onClick={onNavigateToPurchaseHistory} className="content-stretch flex items-center justify-between px-[16px] py-[12px] rounded-[16px] w-full cursor-pointer hover:bg-gray-50">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] text-[16px] text-black tracking-[-0.32px]">구매 내역</p>
              <div className="relative shrink-0 size-[16px]">
                <ArrowRightIcon />
              </div>
            </div>
            <div onClick={handleLogout} className="content-stretch flex items-center justify-between px-[16px] py-[12px] rounded-[16px] w-full cursor-pointer hover:bg-gray-50">
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] text-[16px] text-black tracking-[-0.32px]">로그아웃</p>
              <div className="relative shrink-0 size-[16px]">
                <ArrowRightIcon />
              </div>
            </div>
            <div 
              onClick={() => window.open('https://docs.google.com/forms/d/1yHM5cioHLaZWCaevJ0ib7Y8i6zmCQTnTfG-KK4nMceU/edit', '_blank')}
              className="content-stretch flex items-center justify-between px-[16px] py-[12px] rounded-[16px] w-full cursor-pointer hover:bg-gray-50"
            >
              <p className="font-['Pretendard_Variable:Medium',sans-serif] leading-[28.5px] text-[16px] text-black tracking-[-0.32px]">의견 전달하기</p>
              <div className="relative shrink-0 size-[16px]">
                <ArrowRightIcon />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="-mx-[20px] mt-auto">
            <Footer 
              onNavigateToTerms={onNavigateToTermsOfService}
              onNavigateToPrivacy={onNavigateToPrivacyPolicy}
            />
          </div>
        </div>
      </div>
      <SessionExpiredDialog isOpen={isSessionExpired} />
    </div>
  );
}
