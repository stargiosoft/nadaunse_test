import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, X, Download, Check } from 'lucide-react';
import svgPaths from "../imports/svg-42ye804t8c";
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface ResultCompletePageProps {
  onBack?: () => void;
  onClose?: () => void;
}

interface RecommendedContent {
  id: string;
  title: string;
  thumbnail_url: string;
  category_main: string;
  price_original: number;
  price_discount: number;
  discount_rate: number;
  content_type: string;
}

function HomeIndicatorLight() {
  return (
    <div className="bg-white h-[28px] relative shrink-0 w-full">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
    </div>
  );
}

function CharacterIllustration() {
  return (
    <div className="h-[179.999px] relative shrink-0 w-[146px]">
      <div className="absolute inset-[-0.8%_0_0_-0.98%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 182">
          <g id="Group 427318538">
            <path d={svgPaths.p347a84f0} fill="#F4F4F4" id="Vector" />
            <g id="Group">
              <path d={svgPaths.pca83900} fill="#FDD751" id="Vector_2" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.88158" />
              <path d={svgPaths.p10a04f00} fill="#EFC748" id="Vector_3" />
              <path d={svgPaths.p2f464980} fill="#FDD751" id="Vector_4" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.88158" />
              <path d={svgPaths.p2210d400} fill="#EFC748" id="Vector_5" />
            </g>
            <g id="Group 427318537">
              <path d={svgPaths.p12a56ff0} fill="white" id="Vector_6" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.88158" />
              <g id="Vector_7">
                <path d={svgPaths.p1f5d5680} fill="white" />
                <path d={svgPaths.pbf84f80} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.88158" />
              </g>
            </g>
            <g id="Group_2">
              <path d={svgPaths.p11ec2c00} fill="black" id="Vector_8" />
              <path d={svgPaths.p5b85200} fill="black" id="Vector_9" />
            </g>
            <path d={svgPaths.p2ea90b00} fill="#BCD961" id="Vector_10" stroke="black" strokeMiterlimit="10" strokeWidth="2.88158" />
            <path d={svgPaths.p37227580} fill="#BCD961" id="Vector_11" stroke="black" strokeMiterlimit="10" strokeWidth="2.88158" />
            <path d="M82.7921 33.2737V19.9155" id="Vector_12" stroke="black" strokeMiterlimit="10" strokeWidth="2.88158" />
            <path d={svgPaths.p23784a00} fill="#FDD751" id="Vector_13" stroke="black" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2.88158" />
            <path d={svgPaths.p749900} id="Vector_14" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.88158" />
            <path d={svgPaths.p702f100} id="Vector_15" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.88158" />
          </g>
        </svg>
      </div>
    </div>
  );
}

interface CouponCardProps {
  isIssued: boolean;
  isLoading: boolean;
  onClick?: () => void;
}

function CouponCard({ isIssued, isLoading, onClick }: CouponCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={isIssued || isLoading}
      className={`content-stretch flex items-start overflow-clip relative rounded-[16px] shrink-0 w-full border-none bg-transparent p-0 ${
        isIssued || isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      <div className="basis-0 bg-[#f9f9f9] grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[20px] relative w-full">
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[40px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
                  <g id="twemoji:wrapped-gift" opacity={isIssued ? "0.8" : "1"}>
                    <path d={svgPaths.p3c46be00} fill="#FFD16F" id="Vector" />
                    <path d={svgPaths.p35ee7080} fill="#FFD16F" id="Vector_2" />
                    <path d={svgPaths.p3323b300} fill="#FCAB40" id="Vector_3" />
                    <path d={svgPaths.p21bad880} fill="#FF5569" id="Vector_4" />
                    <path d={svgPaths.p3856f080} fill="#FF5569" id="Vector_5" />
                  </g>
                </svg>
              </div>
              <div className={`content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 text-nowrap ${
                isIssued ? 'text-[#848484]' : 'text-[#151515]'
              }`}>
                <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[19px] relative shrink-0 text-[13px] tracking-[-0.26px]">
                  운세 구매 고객 전용 쿠폰
                </p>
                <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[18px] tracking-[-0.36px]">
                  3,000원
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`content-stretch flex flex-col items-center justify-center px-[12px] py-[16px] relative self-stretch shrink-0 w-[88px] ${
        isIssued ? 'bg-[#f3f3f3]' : 'bg-[#f9f9f9]'
      }`}>
        <div aria-hidden="true" className="absolute border-[#e7e7e7] border-[0px_0px_0px_1px] border-dashed inset-0 pointer-events-none" />
        {isLoading ? (
          <div className="animate-spin rounded-full h-[20px] w-[20px] border-b-2 border-[#48b2af]"></div>
        ) : isIssued ? (
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22px] relative shrink-0 text-[#999] text-[13px] text-center w-full">
            발급<br />완료
          </p>
        ) : (
          <Download className="w-5 h-5 text-[#848484]" />
        )}
      </div>
    </button>
  );
}

interface ContentCardProps {
  content: RecommendedContent;
  onClick: () => void;
}

function ContentCard({ content, onClick }: ContentCardProps) {
  const COUPON_DISCOUNT = 3000;
  const finalPrice = Math.max(0, content.price_discount - COUPON_DISCOUNT);

  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 w-[200px] flex flex-col gap-[8px] items-start bg-transparent border-none cursor-pointer p-0"
    >
      {/* Thumbnail */}
      <div className="h-[120px] pointer-events-none relative rounded-[12px] shrink-0 w-[200px] overflow-hidden">
        {content.thumbnail_url ? (
          <img
            alt={content.title}
            className="absolute inset-0 max-w-none object-cover rounded-[12px] size-full"
            src={content.thumbnail_url}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-[#f3f3f3] flex items-center justify-center rounded-[12px]">
            <p className="text-[#999] text-[12px]">이미지</p>
          </div>
        )}
        <div aria-hidden="true" className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px]" />
      </div>

      {/* Content Info */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        {/* Label */}
        <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px]">
            심화 해석판
          </p>
        </div>

        {/* Title */}
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25.5px] relative shrink-0 text-[15px] text-black tracking-[-0.3px] w-full text-left line-clamp-2">
            {content.title}
          </p>
        </div>

        {/* Price Info */}
        <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
          {/* Original Price */}
          <div className="content-stretch flex items-center relative shrink-0">
            <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] line-through relative shrink-0 text-[#999] text-[13px] text-nowrap">
              {content.price_original.toLocaleString()}원
            </p>
          </div>

          {/* Discount Price */}
          <div className="content-stretch flex font-['Pretendard_Variable:Bold',sans-serif] font-bold gap-[2px] items-center leading-[20px] relative shrink-0 text-[15px] text-nowrap tracking-[-0.45px]">
            <p className="relative shrink-0 text-[#ff6678]">{content.discount_rate}%</p>
            <p className="relative shrink-0 text-black">{content.price_discount.toLocaleString()}원</p>
          </div>

          {/* Coupon Applied Price */}
          <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[#48b2af] text-nowrap w-full">
            <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[16px] tracking-[-0.32px]">
              {finalPrice.toLocaleString()}원
            </p>
            <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[11px]">
              쿠폰 적용가
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

interface ToastProps {
  message: string;
  show: boolean;
}

function Toast({ message, show }: ToastProps) {
  if (!show) return null;

  return (
    <div className="fixed bottom-[36px] left-1/2 -translate-x-1/2 z-50 backdrop-blur-[15px] backdrop-filter bg-[rgba(0,0,0,0.5)] content-stretch flex flex-col items-start pl-[12px] pr-[16px] py-[8px] rounded-[999px]">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <Check className="w-6 h-6 text-[#46BB6F]" />
        <p className="font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[13px] text-nowrap text-white">
          {message}
        </p>
      </div>
    </div>
  );
}

export default function ResultCompletePage({ onBack, onClose }: ResultCompletePageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCouponIssued, setIsCouponIssued] = useState(false);
  const [isIssuingCoupon, setIsIssuingCoupon] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [recommendedContents, setRecommendedContents] = useState<RecommendedContent[]>([]);
  const [isLoadingContents, setIsLoadingContents] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);
  const [isCheckingCoupon, setIsCheckingCoupon] = useState(true); // ⭐ 쿠폰 체크 중 상태

  // ⭐ 페이지 로드 시 쿠폰 발급 여부 체크 + 추천 콘텐츠 조회
  useEffect(() => {
    const initializePage = async () => {
      await Promise.all([
        checkCouponIssued(),
        fetchRecommendedContents()
      ]);
    };

    initializePage();
  }, []);

  /**
   * ⭐ 해당 주문으로 이미 쿠폰이 발급되었는지 체크
   */
  const checkCouponIssued = async () => {
    setIsCheckingCoupon(true);
    try {
      const userJson = localStorage.getItem('user');
      const user = userJson ? JSON.parse(userJson) : null;

      // 로그아웃 사용자는 체크 불필요
      if (!user?.id) {
        console.log('🔍 로그아웃 사용자 - 쿠폰 체크 스킵');
        setIsCheckingCoupon(false);
        return;
      }

      const orderId = location.state?.orderId;
      if (!orderId) {
        console.log('🔍 orderId 없음 - 쿠폰 체크 스킵');
        setIsCheckingCoupon(false);
        return;
      }

      console.log('🔍 쿠폰 발급 여부 체크 시작:', { userId: user.id, orderId });

      // 1. 재방문 쿠폰 ID 조회
      const { data: couponData, error: couponError } = await supabase
        .from('coupons')
        .select('id')
        .eq('coupon_type', 'revisit')
        .single();

      if (couponError || !couponData) {
        console.error('❌ 쿠폰 조회 실패:', couponError);
        setIsCheckingCoupon(false);
        return;
      }

      // 2. 이미 발급받았는지 확인
      const { data: existingCoupon, error: checkError } = await supabase
        .from('user_coupons')
        .select('id, issued_at')
        .eq('user_id', user.id)
        .eq('coupon_id', couponData.id)
        .eq('source_order_id', orderId)
        .maybeSingle();

      if (checkError) {
        console.error('❌ 쿠폰 발급 여부 체크 실패:', checkError);
        setIsCheckingCoupon(false);
        return;
      }

      if (existingCoupon) {
        console.log('✅ 이미 발급된 쿠폰:', existingCoupon);
        setIsCouponIssued(true);
      } else {
        console.log('📋 발급 가능한 쿠폰');
        setIsCouponIssued(false);
      }
    } catch (error) {
      console.error('❌ 쿠폰 체크 중 오류:', error);
    } finally {
      setIsCheckingCoupon(false);
    }
  };

  const fetchRecommendedContents = async () => {
    setIsLoadingContents(true);
    try {
      const { data, error } = await supabase
        .from('master_contents')
        .select('*')
        .eq('content_type', 'paid')
        .eq('status', 'deployed')
        .order('weekly_clicks', { ascending: false })
        .limit(20); // 최대 20개 로드

      if (error) {
        console.error('❌ 추천 콘텐츠 조회 실패:', error);
      } else if (data) {
        console.log('✅ 추천 콘텐츠 조회 성공:', data.length, '개');
        setRecommendedContents(data);
      }
    } catch (error) {
      console.error('❌ 추천 콘텐츠 조회 중 오류:', error);
    } finally {
      setIsLoadingContents(false);
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/');
    }
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const handleViewOtherContents = () => {
    // 홈으로 이동하면서 localStorage에 필터 정보 저장
    localStorage.setItem('homeFilter', JSON.stringify({
      category: '전체',
      contentType: 'paid'
    }));
    navigate('/');
  };

  const handleIssueCoupon = async () => {
    if (isCouponIssued || isIssuingCoupon) return;

    setIsIssuingCoupon(true);
    try {
      const userJson = localStorage.getItem('user');
      const user = userJson ? JSON.parse(userJson) : null;

      if (!user?.id) {
        alert('로그인이 필요한 서비스입니다.');
        setIsIssuingCoupon(false);
        return;
      }

      // ⭐ orderId를 location.state에서 가져오기
      const orderId = location.state?.orderId;
      if (!orderId) {
        console.error('❌ orderId가 없습니다.');
        alert('주문 정보를 찾을 수 없습니다.');
        setIsIssuingCoupon(false);
        return;
      }

      console.log('🎟️ 재구매 쿠폰 발급 시작:', { userId: user.id, orderId });

      const { data, error } = await supabase.functions.invoke('issue-revisit-coupon', {
        body: { 
          user_id: user.id,
          source_order_id: orderId  // ⭐ source_order_id 추가
        }
      });

      if (error) {
        console.error('❌ 쿠폰 발급 실패:', error);
        alert('쿠폰 발급에 실패했습니다. 다시 시도해주세요.');
      } else {
        console.log('✅ 쿠폰 발급 성공:', data);
        setIsCouponIssued(true);
        setShowToast(true);

        // 2.2초 후 토스트 숨기기
        setTimeout(() => {
          setShowToast(false);
        }, 2200);
      }
    } catch (error) {
      console.error('❌ 쿠폰 발급 중 오류:', error);
      alert('쿠폰 발급에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsIssuingCoupon(false);
    }
  };

  const handleMoreView = () => {
    setDisplayCount(prev => Math.min(prev + 6, recommendedContents.length));
  };

  const handleContentClick = (content: RecommendedContent) => {
    if (content.content_type === 'free') {
      navigate(`/product/${content.id}/free`);
    } else {
      navigate(`/master/content/detail/${content.id}`);
    }
  };

  const displayedContents = recommendedContents.slice(0, displayCount);
  const hasMore = displayCount < recommendedContents.length;

  return (
    <div className="bg-white relative min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[390px] relative">
        {/* Top Navigation */}
        <div className="bg-white h-[52px] sticky top-0 z-20 w-full">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[4px] relative size-full">
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <button
                  onClick={handleBack}
                  className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] bg-transparent border-none cursor-pointer"
                >
                  <ArrowLeft className="w-6 h-6 text-[#848484]" />
                </button>
                <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">
                  풀이는 여기까지예요
                </p>
                <button
                  onClick={handleClose}
                  className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] bg-transparent border-none cursor-pointer"
                >
                  <X className="w-6 h-6 text-[#848484]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div className="h-[16px] shrink-0 w-full" />

        {/* Main Content */}
        <div className="content-stretch flex flex-col gap-[32px] items-center w-full px-[20px] pb-[140px]">
          {/* Character & Buttons Section */}
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full max-w-[350px]">
            {/* Character Illustration */}
            <div className="content-stretch flex items-center pl-0 pr-[12px] py-[40px] relative shrink-0">
              <CharacterIllustration />
            </div>

            {/* Coupon Card */}
            <CouponCard 
              isIssued={isCouponIssued}
              isLoading={isIssuingCoupon}
              onClick={handleIssueCoupon}
            />

            {/* Action Buttons */}
            <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
              {/* 홈으로 가기 */}
              <button
                onClick={handleGoHome}
                className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0 bg-[#f0f8f8] border-none cursor-pointer"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#48b2af] text-[15px] text-nowrap tracking-[-0.45px]">
                      홈으로 가기
                    </p>
                  </div>
                </div>
              </button>

              {/* 다른 운세 보기 */}
              <button
                onClick={handleViewOtherContents}
                className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0 bg-[#48b2af] border-none cursor-pointer"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative size-full">
                    <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.45px]">
                      다른 운세 보기
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-[#f9f9f9] h-[12px] shrink-0 w-full" />

          {/* Recommended Contents Section */}
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full max-w-[350px]">
            {/* Section Title */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[17px] text-black tracking-[-0.34px]">
                이런 운세는 어때요?
              </p>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="relative w-full overflow-x-auto overflow-y-hidden scrollbar-hide" style={{ touchAction: 'pan-x' }}>
              <div className="flex gap-[12px] items-start pb-[8px]">
                {isLoadingContents ? (
                  <div className="flex-shrink-0 w-[200px] h-[200px] flex items-center justify-center">
                    <div className="animate-spin rounded-full h-[32px] w-[32px] border-b-2 border-[#48b2af]"></div>
                  </div>
                ) : (
                  <>
                    {displayedContents.map((content) => (
                      <ContentCard
                        key={content.id}
                        content={content}
                        onClick={() => handleContentClick(content)}
                      />
                    ))}

                    {/* More View Button */}
                    {hasMore && (
                      <button
                        onClick={handleMoreView}
                        className="flex-shrink-0 content-stretch flex items-center justify-center relative rounded-[12px] border border-[#d4d4d4] border-dashed bg-white cursor-pointer h-[200px] w-[200px]"
                      >
                        <div className="content-stretch flex flex-col items-center justify-center gap-[8px]">
                          <div className="relative size-[44px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                              <g id="Icons">
                                <rect fill="white" height="44" width="44" />
                                <path d={svgPaths.p3bb19300} fill="#D4D4D4" id="Vector" />
                              </g>
                            </svg>
                          </div>
                          <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25.5px] relative text-[#6d6d6d] text-[15px] text-nowrap tracking-[-0.3px]">
                            더 볼래요!
                          </p>
                        </div>
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Home Indicator */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px]">
          <HomeIndicatorLight />
        </div>
      </div>

      {/* Toast */}
      <Toast message="쿠폰이 발급되었습니다" show={showToast} />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}