import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import svgPaths from "../imports/svg-ir0ch2bhrx";
import { supabase, supabaseUrl } from '../lib/supabase';
import { getTarotCardImageUrl } from '../lib/tarotCards';
import { getCachedTarotImage, cacheTarotImage } from '../lib/tarotImageCache';
import TableOfContentsBottomSheet from './TableOfContentsBottomSheet';

interface TarotResult {
  question_order: number;
  question_text: string;
  gpt_response: string;
  tarot_card_id: string | null;
  tarot_card_name: string | null;
  tarot_card_image_url: string | null;
}

function HomeIndicatorLight() {
  return (
    <div className="bg-white h-[28px] relative shrink-0 w-full">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
    </div>
  );
}

export default function TarotResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');
  const questionOrder = parseInt(searchParams.get('questionOrder') || '1');
  const contentId = searchParams.get('contentId'); // ⭐ contentId 파라미터 추가
  const from = searchParams.get('from'); // ⭐ 출처 파라미터 추가 (purchase, 등)

  const [result, setResult] = useState<TarotResult | null>(null);
  const [allResults, setAllResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [imageError, setImageError] = useState(false);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const [contentIdState, setContentIdState] = useState<string | null>(contentId); // ⭐ contentId state (URL 파라미터 우선)
  const [cardImageUrl, setCardImageUrl] = useState<string>(''); // ⭐ 이미지 URL state 추가
  const [imageLoading, setImageLoading] = useState(true); // ⭐ 이미지 로딩 state

  // 🔝 페이지 진입 시 스크롤을 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [orderId, questionOrder]); // orderId나 questionOrder가 바뀔 때마다 최상단으로

  // 타로 결과 로드
  useEffect(() => {
    const loadResult = async () => {
      if (!orderId) return;

      try {
        console.log('📥 [타로결과] 데이터 로드 시작:', { orderId, questionOrder });

        // ⚠️ [개발 모드] from=dev 파라미터가 있으면 mock 데이터 사용
        if (from === 'dev') {
          console.log('🔧 [개발 모드] 타로 결과 페이지 - mock 데이터 사용');
          
          // Mock 타로 데이터
          const mockResult: TarotResult = {
            question_order: questionOrder,
            question_text: "그와 나의 인연은 어떻게 발전할까요?",
            gpt_response: `[개발용 Mock 데이터]

뽑으신 카드는 "연인" 카드입니다.

연인 카드는 사랑과 선택, 그리고 운명적인 만남을 상징하는 카드입니다. 이 카드가 나왔다는 것은 당신과 그 사람의 인연이 단순한 우연이 아닌, 깊은 의미를 가진 만남임을 시사합니다.

**현재 상황**
두 사람은 서로에게 강하게 끌리고 있으며, 이는 단순한 호감을 넘어선 영혼의 교감입니다. 하지만 동시에 중요한 선택의 기로에 서 있습니다. 관계를 더욱 깊게 발전시킬 것인지, 아니면 현재의 상태를 유지할 것인지에 대한 결정이 필요한 시점입니다.

**미래 전망**
연인 카드는 긍정적인 발전을 예고합니다. 다만 이 관계가 진정으로 의미 있는 것이 되기 위해서는 서로에 대한 솔직함과 진실된 마음이 필요합니다. 겉치레나 가식 없이, 진심으로 상대방을 이해하려는 노력이 중요합니다.

**조언**
지금은 마음을 열고 용기를 내어 진심을 표현할 때입니다. 두려워하지 말고, 당신의 진정한 감정을 상대방과 나누세요. 그 과정에서 두 사람의 인연은 더욱 깊어질 것입니다.`,
            tarot_card_id: "6",
            tarot_card_name: "연인 (The Lovers)",
            tarot_card_image_url: "https://via.placeholder.com/150x260?text=The+Lovers"
          };
          
          // Mock 전체 결과 (다음 질문 확인용)
          const mockAllResults = [
            mockResult,
            {
              question_order: 2,
              question_text: "상대방은 나를 어떻게 생각하고 있을까요?",
              question_type: 'saju',
              gpt_response: "..."
            },
            {
              question_order: 3,
              question_text: "관계 발전을 위해 내가 주의해야 할 점은?",
              question_type: 'saju',
              gpt_response: "..."
            }
          ];
          
          setResult(mockResult);
          setAllResults(mockAllResults);
          setTotalQuestions(mockAllResults.length);
          setContentIdState('mock_content_id');
          setCardImageUrl(mockResult.tarot_card_image_url || '');
          setImageLoading(false);
          setLoading(false);
          return;
        }

        // 전체 결과 조회 (다음 질문 확인용)
        const { data: allData, error: allError } = await supabase
          .from('order_results')
          .select('question_order, question_text, gpt_response, question_type, tarot_card_id, tarot_card_name, tarot_card_image_url')
          .eq('order_id', orderId)
          .order('question_order', { ascending: true });

        if (allError) throw allError;
        if (allData) {
          setAllResults(allData);
          setTotalQuestions(allData.length);
          
          // ⭐ 현재 질문 + 다음 타로 질문의 이미지를 백그라운드에서 프리로드
          preloadNextTarotImages(allData, questionOrder);
        }

        // 현재 질문 결과 조회
        const { data, error } = await supabase
          .from('order_results')
          .select('question_order, question_text, gpt_response, tarot_card_id, tarot_card_name, tarot_card_image_url')
          .eq('order_id', orderId)
          .eq('question_order', questionOrder)
          .single();

        if (error) throw error;
        if (data) {
          console.log('✅ [타로결과] 데이터 로드 성공:', data);
          setResult(data as TarotResult);
        }

        // ⭐ contentId 조회 (order 테이블에서)
        const { data: orderData, error: orderError } = await supabase
          .from('orders')
          .select('content_id')
          .eq('id', orderId)
          .single();

        if (orderError) throw orderError;
        if (orderData) {
          console.log('✅ [타로결과] contentId 조회 성공:', orderData.content_id);
          setContentIdState(orderData.content_id);
        }
      } catch (error) {
        console.error('❌ [타로결과] 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    loadResult();
  }, [orderId, questionOrder]);

  // ⭐ 현재 + 다음 타로 질문들의 이미지를 미리 로드 (백그라운드)
  const preloadNextTarotImages = (allData: any[], currentOrder: number) => {
    // ⭐ 현재 질문 포함하여 다음 3개 타로 질문 찾기 (총 최대 4개)
    const tarotQuestions = allData
      .filter(q => q.question_order >= currentOrder && q.question_type === 'tarot')
      .slice(0, 4); // 현재 + 다음 3개
    
    if (tarotQuestions.length === 0) {
      console.log('ℹ️ [타로프리로드] 타로 질문 없음');
      return;
    }

    console.log(`🎴 [타로프리로드] ${tarotQuestions.length}장 프리로드 시작 (현재 포함)`);
    
    // 백그라운드에서 비동기로 프리로드 (블로킹하지 않음)
    tarotQuestions.forEach((q: any) => {
      if (q.tarot_card_name && q.tarot_card_image_url) {
        cacheTarotImage(q.tarot_card_name, q.tarot_card_image_url).catch(err => {
          console.warn(`⚠️ [타로프리로드] 실패 (무시): ${q.tarot_card_name}`, err);
        });
      }
    });
  };

  // ⭐ 타로 카드 이미지 URL 로드 (Cache API 비동기)
  useEffect(() => {
    const loadCardImage = async () => {
      if (!result || !result.tarot_card_name) {
        setCardImageUrl('https://via.placeholder.com/150x260/48b2af/ffffff?text=No+Card');
        setImageLoading(false);
        return;
      }

      // 1. Cache API에서 캐시 확인 (먼저 체크)
      const cachedImage = await getCachedTarotImage(result.tarot_card_name);
      
      if (cachedImage) {
        console.log('⚡ [타로결과] 캐시 히트 - 즉시 표시:', result.tarot_card_name);
        setCardImageUrl(cachedImage); // Blob URL
        setImageLoading(false); // ⭐ 캐시 히트 시 로딩 상태를 false로 (스켈레톤 스킵)
      } else {
        // 2. 캐시 없으면 Supabase Storage URL + 로딩 표시
        console.log('🌐 [타로결과] 네트워크 로드:', result.tarot_card_name);
        setImageLoading(true); // ⭐ 네트워크 로드는 로딩 표시
        const storageUrl = getTarotCardImageUrl(result.tarot_card_name, supabaseUrl);
        setCardImageUrl(storageUrl);
        // ⭐ 네트워크 로드는 onLoad 이벤트로 로딩 종료
        
        // 3. 백그라운드에서 캐싱 (다음 번에는 빠르게)
        if (result.tarot_card_image_url) {
          cacheTarotImage(result.tarot_card_name, result.tarot_card_image_url).catch(err => {
            console.warn('⚠️ [타로결과] 백그라운드 캐싱 실패:', err);
          });
        }
      }
    };

    loadCardImage();
  }, [result]);

  const handlePrevious = () => {
    console.log('🔵 [타로결과] 이전 버튼 클릭');
    
    // 🔝 즉시 최상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // ⭐ 이전 질문 찾기
    const prevResult = allResults.find(r => r.question_order === questionOrder - 1);
    
    if (!prevResult) {
      console.log('⚠️ [타로결과] 첫 번째 질문입니다');
      return;
    }
    
    console.log('📌 [타로결과] 이전 질문:', prevResult);
    
    // ⭐ 이전 질문이 타로면 → 타로 결과 페이지
    if (prevResult.question_type === 'tarot') {
      console.log('🎴 [타로결과] 이전 질문이 타로 → 타로 결과 페이지로 이동');
      navigate(`/result/tarot?orderId=${orderId}&questionOrder=${prevResult.question_order}`);
      return;
    }
    
    // ⭐ 이전 질문이 사주면 → 사주 결과 페이지
    console.log('🔮 [타로결과] 이전 질문이 사주 → 사주 결과 페이지로 이동');
    navigate(`/result/saju?orderId=${orderId}&startPage=${prevResult.question_order}`);
  };

  const handleNext = () => {
    console.log('🔵 [타로결과] 다음 버튼 클릭');
    
    // 🔝 즉시 최상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // ⭐ 다음 질문 찾기
    const nextResult = allResults.find(r => r.question_order === questionOrder + 1);
    
    console.log('📌 [타로결과] 현재 질문:', questionOrder);
    console.log('📌 [타로결과] 다음 질문:', nextResult);
    
    // ⭐ 다음 질문이 없으면 → 마지막 질문 완료
    if (!nextResult) {
      console.log('✅ [타로결과] 마지막 질문 도달');
      
      // ⚠️ [개발 모드] from=dev이면 로딩 페이지로 이동
      if (from === 'dev') {
        console.log('🔧 [개발 모드] 로딩 페이지로 이동');
        const contentIdParam = contentIdState || contentId || 'mock_content_id';
        navigate(`/loading?orderId=${orderId}&contentId=${contentIdParam}&from=dev`);
        return;
      }
      
      // 일반 사용자는 풀이 완료 페이지로
      console.log('✅ [타로결과] /result/complete로 이동');
      navigate('/result/complete', { 
        state: { 
          orderId
        } 
      });
      return;
    }
    
    // ⭐ 다음 질문이 타로면 → 타로 셔플 페이지
    if (nextResult.question_type === 'tarot') {
      console.log('🎴 [타로결과] 다음 질문이 타로 → 타로 셔플 페이지로 이동');
      const fromParam = from ? `&from=${from}` : '';
      const contentIdParam = contentIdState || contentId ? `&contentId=${contentIdState || contentId}` : '';
      navigate(`/tarot/shuffle?orderId=${orderId}&questionOrder=${nextResult.question_order}${contentIdParam}${fromParam}`);
      return;
    }
    
    // ⭐ 다음 질문이 사주면 → 사주 결과 페이지
    console.log('🔮 [타로결과] 다음 질문이 사주 → 사주 결과 페이지로 이동');
    const fromParam = from ? `&from=${from}` : '';
    navigate(`/result/saju?orderId=${orderId}&startPage=${nextResult.question_order}${fromParam}`);
  };

  const handleClose = () => {
    // ⭐ 출처에 따라 분기 처리
    if (from === 'purchase') {
      // 구매내역에서 접근한 경우 → 구매내역으로 이동 (히스토리 대체)
      console.log('✅ [타로결과] 구매내역에서 접근 → 구매내역으로 이동 (replace)');
      navigate('/purchase-history', { replace: true }); // ⭐ replace로 히스토리 스택 정리
    } else {
      // 결제 후 바로 접근한 경우 → 홈으로 이동
      console.log('✅ [타로결과] 결제 후 접근 → 홈으로 이동');
      navigate('/');
    }
  };

  const handleToggleList = () => {
    // TODO: 목록 토글 구현
    console.log('목록 토글');
    setShowTableOfContents(!showTableOfContents);
  };

  if (loading) {
    return (
      <div className="bg-white flex items-center justify-center min-h-screen w-full max-w-[390px] mx-auto">
        <div className="animate-spin rounded-full h-[48px] w-[48px] border-b-2 border-[#48b2af]"></div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-white flex items-center justify-center min-h-screen w-full max-w-[390px] mx-auto">
        <p className="text-[#999999]">풀이 결과를 불러올 수 없습니다.</p>
      </div>
    );
  }

  // ⭐ 타로 카드 이미지 URL (캐시 우선, 없으면 Supabase Storage)
  const cardName = result.tarot_card_name || '카드 정보 없음';

  return (
    <div className="bg-white relative min-h-screen w-full max-w-[390px] mx-auto">
      {/* Top Navigation */}
      <div className="bg-white h-[52px] relative shrink-0 w-full sticky top-0 z-20">
        <div className="flex items-center justify-between px-[12px] h-full">
          <div className="w-[44px] h-[44px] opacity-0" />
          <h1 className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[18px] leading-[25.5px] tracking-[-0.36px] text-black text-center flex-1">
            상세 풀이
          </h1>
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-[44px] h-[44px] rounded-[12px] cursor-pointer"
          >
            <X className="w-[24px] h-[24px] text-[#848484]" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      <div className="h-[16px] shrink-0 w-full" />

      {/* Content Card */}
      <div className="px-[20px] pb-[120px]">
        <div className="bg-[#f9f9f9] rounded-[16px] p-[20px]">
          {/* Header with Number and Divider */}
          <div className="flex gap-[12px] items-center mb-[40px]">
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[20px] leading-[28px] tracking-[-0.2px] text-[#48b2af]">
              {String(result.question_order).padStart(2, '0')}
            </p>
            <div className="flex-1 h-0 border-t border-[#e7e7e7]" />
          </div>

          {/* Content Container */}
          <div className="flex flex-col gap-[24px] items-center">
            {/* Tarot Card Image */}
            <div className="relative h-[260px] w-[150px] rounded-[16px] shadow-[6px_7px_12px_0px_rgba(0,0,0,0.04),-3px_-3px_12px_0px_rgba(0,0,0,0.04)] overflow-hidden bg-[#f0f0f0]">
              <img
                src={cardImageUrl}
                alt={cardName}
                fetchPriority="high"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('❌ [타로결과] 이미지 로드 실패:', cardImageUrl);
                  setImageError(true);
                }}
                onLoad={() => setImageLoading(false)}
              />
              {imageError && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500 text-center px-2">이미지<br/>로드 실패</p>
                </div>
              )}
              {imageLoading && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-[48px] w-[48px] border-b-2 border-[#48b2af]"></div>
                </div>
              )}
            </div>

            {/* Card Name and Response */}
            <div className="flex flex-col gap-[24px] w-full">
              {/* Card Name */}
              <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[18px] leading-[24px] tracking-[-0.36px] text-[#151515]">
                {cardName}
              </p>

              {/* Response Text */}
              <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[16px] leading-[28.5px] tracking-[-0.32px] text-[#151515] whitespace-pre-wrap">
                {result.gpt_response}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation - Fixed */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-10">
        <div className="bg-white border-t border-[#f3f3f3] shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)]">
          <div className="h-[60px] px-[28px] py-[12px]">
            {/* Navigation Bar */}
            <div className="flex items-center justify-between w-full">
              {/* Left: Page Indicator */}
              <div className="flex gap-[8px] items-center">
                <button
                  onClick={handleToggleList}
                  className="flex items-center justify-center p-[4px] rounded-[8px] w-[36px] h-[36px]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 13" fill="none">
                    <path d={svgPaths.p14150900} fill="#848484" />
                    <path clipRule="evenodd" d={svgPaths.p5097a80} fill="#848484" fillRule="evenodd" />
                  </svg>
                </button>
                <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[15px] leading-[23.5px] tracking-[-0.3px]">
                  <span className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[#151515]">
                    {String(result.question_order).padStart(2, '0')}/
                  </span>
                  <span className="text-[#b7b7b7]"> {String(totalQuestions).padStart(2, '0')}</span>
                </p>
              </div>

              {/* Right: Navigation Buttons */}
              <div className="flex gap-[16px] items-center">
                {/* Previous Button */}
                <button
                  onClick={handlePrevious}
                  disabled={questionOrder === 1}
                  className="flex gap-[4px] items-center h-[34px] px-[8px] rounded-[12px] disabled:opacity-30 hover:bg-gray-100 transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d={svgPaths.p2679d700}
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.7"
                    />
                  </svg>
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[14px] leading-[22px] tracking-[-0.42px] text-black">
                    이전
                  </p>
                </button>

                {/* Divider */}
                <div className="h-[12px] w-0 border-l border-[#e7e7e7]" />

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="flex gap-[4px] items-center h-[34px] px-[8px] rounded-[12px] hover:bg-gray-100 transition-colors"
                >
                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[14px] leading-[22px] tracking-[-0.42px] text-black">
                    다음
                  </p>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d={svgPaths.p3117bd00}
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <HomeIndicatorLight />
        </div>
      </div>

      {/* Table of Contents Bottom Sheet */}
      {showTableOfContents && orderId && (contentIdState || contentId) && (
        <TableOfContentsBottomSheet
          isOpen={showTableOfContents}
          onClose={() => setShowTableOfContents(false)}
          orderId={orderId}
          contentId={contentIdState || contentId || ''}
          currentQuestionOrder={questionOrder}
        />
      )}
    </div>
  );
}