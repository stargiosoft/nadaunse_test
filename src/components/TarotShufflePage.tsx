import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import svgPaths from "../imports/svg-ir0ch2bhrx";
import { supabase } from '../lib/supabase';
import img3 from "figma:asset/f494ca2b3b180a2d66b2960718e3e515db3248a2.png"; // 타로 카드 뒷면
import imgAvocado from "figma:asset/e1537c8771a828aa09f2f853176e35c41217f557.png"; // 아보카도 캐릭터

function HomeIndicatorLight() {
  return (
    <div className="bg-white h-[28px] relative shrink-0 w-full">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
    </div>
  );
}

export default function TarotShufflePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get('orderId');
  const contentId = searchParams.get('contentId'); // ⭐ contentId 파라미터 추가
  const questionOrder = parseInt(searchParams.get('questionOrder') || '1');
  const from = searchParams.get('from'); // ⭐ 출처 파라미터 추가

  const [questionText, setQuestionText] = useState('질문을 떠올리며 카드를 뽑아주세요');
  const [phase, setPhase] = useState<'scatter' | 'fan' | 'picked'>('scatter');
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [allResults, setAllResults] = useState<any[]>([]);

  // 질문 텍스트 로드
  useEffect(() => {
    const loadQuestion = async () => {
      if (!orderId) return;

      try {
        // ⚠️ [개발 모드] from=dev 파라미터가 있으면 mock 데이터 사용
        if (from === 'dev') {
          console.log('🔧 [개발 모드] 타로 셔플 페이지 - mock 데이터 사용');
          setQuestionText('[개발용] 그와 나의 인연은 어떻게 발전할까요?');
          setAllResults([
            { question_order: 1, question_text: '첫 번째 질문', question_type: 'tarot' },
            { question_order: 2, question_text: '두 번째 질문', question_type: 'saju' },
            { question_order: 3, question_text: '세 번째 질문', question_type: 'saju' }
          ]);
          setTotalQuestions(3);
          return;
        }

        // 전체 결과 조회 (이전/다음 버튼용)
        const { data: allData, error: allError } = await supabase
          .from('order_results')
          .select('question_order, question_text, question_type')
          .eq('order_id', orderId)
          .order('question_order', { ascending: true });

        if (allError) throw allError;
        if (allData) {
          setAllResults(allData);
          setTotalQuestions(allData.length);
        }

        // 현재 질문 텍스트 조회
        const { data, error } = await supabase
          .from('order_results')
          .select('question_text')
          .eq('order_id', orderId)
          .eq('question_order', questionOrder)
          .single();

        if (error) throw error;
        if (data?.question_text) {
          setQuestionText(data.question_text);
        }
      } catch (error) {
        console.error('❌ 질문 로드 실패:', error);
      }
    };

    loadQuestion();
  }, [orderId, questionOrder, from]);

  // 페이즈 자동 전환 (scatter → fan만)
  useEffect(() => {
    if (phase === 'scatter') {
      const timer = setTimeout(() => {
        setPhase('fan');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleClose = () => {
    navigate('/');
  };

  // 카드 섞기 버튼
  const handleShuffle = () => {
    setPhase('scatter');
    setSelectedCardIndex(null);
  };

  // 카드 클릭 (부채꼴에서 카드 선택)
  const handleCardClick = (index: number) => {
    if (phase === 'fan') {
      setSelectedCardIndex(index);
      setPhase('picked');
    }
  };

  // 카드 선택 완료 버튼
  const handleConfirmCard = () => {
    if (!orderId) return;
    
    console.log('🎴 [타로셔플] 카드 선택 완료 → 타로 결과 페이지로 이동');
    console.log('⚠️ [타로셔플] 주의: 사용자가 선택한 카드는 UX용일 뿐, 실제 카드는 이미 DB에 저장되어 있습니다');
    
    // ⭐ DB 업데이트 없이 바로 타로 결과 페이지로 이동
    // 실제 타로 카드는 generate-tarot-answers API에서 이미 선택되어 저장됨
    const fromParam = from ? `&from=${from}` : '';
    const contentIdParam = contentId ? `&contentId=${contentId}` : '';
    navigate(`/result/tarot?orderId=${orderId}&questionOrder=${questionOrder}${contentIdParam}${fromParam}`);
  };

  // ⭐ 이전 버튼
  const handlePrevious = () => {
    const prevResult = allResults.find(r => r.question_order === questionOrder - 1);
    
    if (!prevResult) {
      console.log('⚠️ 첫 번째 질문입니다');
      return;
    }
    
    // 이전 질문이 타로면 → 타로 결과 페이지
    if (prevResult.question_type === 'tarot') {
      navigate(`/result/tarot?orderId=${orderId}&questionOrder=${prevResult.question_order}`);
      return;
    }
    
    // 이전 질문이 사주면 → 사주 결과 페이지
    navigate(`/result/saju?orderId=${orderId}&startPage=${prevResult.question_order}`);
  };

  // ⭐ 다음 버튼 (타로 결과 페이지로 바로 이동)
  const handleNext = () => {
    console.log('🎴 [타로셔플] 다음 버튼 → 타로 결과 페이지로 이동');
    const fromParam = from ? `&from=${from}` : '';
    const contentIdParam = contentId ? `&contentId=${contentId}` : '';
    navigate(`/result/tarot?orderId=${orderId}&questionOrder=${questionOrder}${contentIdParam}${fromParam}`);
  };

  // ⭐ Figma에서 추출한 정확한 카드 위치 (21개)
  const fanCardPositions = [
    { inset: '0.72% auto 37.72% calc(50% - 114.59px)', rotate: 39.037, skewX: 349.813 },
    { inset: '5.58% 68.88% 34.39% 6.11%', rotate: 32.63, skewX: 345.408 },
    { inset: '9.73% 65.93% 29.61% 9.8%', rotate: 28.824, skewX: 345.886 },
    { inset: '13.61% 63.03% 25.43% 13.57%', rotate: 25.146, skewX: 346.646 },
    { inset: '16.74% auto 21.4% calc(50% - 70.73px)', rotate: 23.375, skewX: 351.599 },
    { inset: '20.49% 57.42% 18.93% 21.3%', rotate: 18.109, skewX: 348.995 },
    { inset: '23.43% 54.71% 16.65% 25.25%', rotate: 14.721, skewX: 350.563 },
    { inset: '26.05% 52.04% 15.04% 29.26%', rotate: 11.398, skewX: 352.367 },
    { inset: '28.3% 49.42% 14.1% 33.32%', rotate: 8.127, skewX: 354.373 },
    { inset: '30.19% 46.85% 13.83% 37.42%', rotate: 4.892, skewX: 356.535 },
    { inset: '31.69% 44.31% 14.25% 41.57%', rotate: 1.679, skewX: 358.797 },
    { inset: '31.76% 41.01% 14.29% 44.95%', rotate: 358.474, skewX: 1.094 },
    { inset: '30.27% 36.86% 13.84% 47.48%', rotate: 355.262, skewX: 3.359 },
    { inset: '28.4% 32.75% 14.07% 50.05%', rotate: 352.028, skewX: 5.527 },
    { inset: '26.17% 28.69% 14.97% 52.67%', rotate: 348.759, skewX: 7.542 },
    { inset: '23.57% 24.68% 16.56% 55.34%', rotate: 345.439, skewX: 9.356 },
    { inset: '20.63% 20.72% 18.81% 58.06%', rotate: 342.054, skewX: 10.936 },
    { inset: '17.37% 16.83% 21.7% 60.83%', rotate: 338.588, skewX: 12.259 },
    { inset: '9.92% 9.23% 29.4% 66.55%', rotate: 331.354, skewX: 14.084 },
    { inset: '5.78% 5.53% 34.16% 69.5%', rotate: 327.555, skewX: 14.575 },
    { inset: '1.4% 1.89% 39.48% 72.52%', rotate: 323.616, skewX: 14.784 },
  ];

  return (
    <div className="bg-white w-full max-w-[390px] mx-auto relative flex flex-col h-screen">
      {/* ⭐ Top Navigation - X 버튼만 */}
      <div className="bg-white h-[52px] relative shrink-0 w-full z-50">
        <div className="flex items-center justify-between px-[12px] h-full">
          <div className="w-[44px] h-[44px] opacity-0" />
          <div className="w-[44px] h-[44px]" />
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-[44px] h-[44px] rounded-[12px] cursor-pointer"
          >
            <X className="w-[24px] h-[24px] text-[#848484]" strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[16px] shrink-0 w-full" />

      {/* ⭐ Question Text - 흰색 배경, 스크롤 시 함께 이동 */}
      <div className="w-full bg-white px-[20px] py-[10px] shrink-0">
        <div className="flex flex-col gap-[8px] items-center text-center">
          <p className="font-['Pretendard_Variable:Bold',sans-serif] font-bold text-[20px] leading-[28px] tracking-[-0.2px] text-[#151515]">
            {questionText}
          </p>
          <p className="font-['Pretendard_Variable:Regular',sans-serif] text-[14px] leading-[22px] tracking-[-0.42px] text-[#848484]">
            질문을 떠올리며 카드를 뽑아주세요
          </p>
        </div>
      </div>

      {/* ⭐ Flex spacer - 남은 공간을 차지 */}
      <div className="flex-1" />

      {/* ⭐ Teal 배경 영역 - Fixed (버튼 바로 위에 고정) */}
      <div className="fixed bottom-[144px] left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-[#48b2af] border-t-2 border-[#151515] z-30">
        <div className="flex flex-col items-center px-[16px] pb-[40px] pt-[16px]">
          
          {/* 캐릭터 - 상단 일부가 위로 올라가도록 margin-top 음수 */}
          <div className="h-[159px] w-[129.887px] mt-[-80px] mb-[4px] relative z-20">
            <img
              src={imgAvocado}
              alt="아보카도 캐릭터"
              loading="eager"
              className="absolute max-w-none pointer-events-none"
              style={{
                height: '115.9%',
                left: '-151.97%',
                top: '-13.68%',
                width: '441.38%',
                objectFit: 'cover',
                objectPosition: '50% 50%'
              }}
            />
          </div>

          {/* 카드 팬 컨테이너 */}
          <div className="h-[120px] w-full max-w-[320px] mb-[24px] relative">
            {phase === 'scatter' && (
              <>
                {[...Array(21)].map((_, index) => (
                  <div
                    key={index}
                    className="absolute h-[75px] w-[45px] shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] transition-all duration-500"
                    style={{
                      left: `${Math.random() * 90}%`,
                      top: `${Math.random() * 50}%`,
                      transform: `rotate(${Math.random() * 360}deg)`,
                      opacity: 1,
                    }}
                  >
                    <img src={img3} alt="" className="w-full h-full object-cover rounded-[4px]" />
                  </div>
                ))}
              </>
            )}

            {phase === 'fan' && (
              <>
                {fanCardPositions.map((pos, index) => (
                  <button
                    key={index}
                    onClick={() => handleCardClick(index)}
                    className="absolute flex items-center justify-center cursor-pointer hover:brightness-110 transition-all duration-200"
                    style={{ inset: pos.inset }}
                  >
                    <div
                      className="h-[75px] w-[45px] shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)]"
                      style={{
                        transform: `rotate(${pos.rotate}deg) skewX(${pos.skewX}deg)`,
                      }}
                    >
                      <img src={img3} alt="" className="w-full h-full object-cover rounded-[4px]" />
                    </div>
                  </button>
                ))}
              </>
            )}

            {phase === 'picked' && (
              <>
                {fanCardPositions.map((pos, index) => (
                  <div
                    key={`bg-${index}`}
                    className="absolute flex items-center justify-center"
                    style={{ inset: pos.inset }}
                  >
                    <div
                      className="h-[75px] w-[45px] shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)]"
                      style={{
                        transform: `rotate(${pos.rotate}deg) skewX(${pos.skewX}deg)`,
                      }}
                    >
                      <img src={img3} alt="" className="w-full h-full object-cover rounded-[4px]" />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* ⭐ 점선 박스 / 선택된 카드 */}
          {phase === 'fan' && (
            <div className="h-[114px] w-[66px] rounded-[12px] border-2 border-dashed border-[#e4f7f7]" />
          )}

          {phase === 'picked' && (
            <div className="h-[114px] w-[68px] shadow-[4.855px_3.641px_12.137px_0px_rgba(0,0,0,0.05)] rounded-[4px] overflow-hidden">
              <img src={img3} alt="" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </div>
      {/* ⭐ Teal 배경 영역 끝 */}

      {/* ⭐ Button Container - Fixed (바텀 네비게이션 바로 위, 흰색 배경) */}
      <div className="fixed bottom-[88px] left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white px-[16px] py-[12px] z-40">
        {phase === 'fan' && (
          <button
            onClick={handleShuffle}
            className="w-full h-[56px] bg-[#f0f8f8] rounded-[16px] flex items-center justify-center cursor-pointer active:scale-95 transition-all"
          >
            <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[16px] leading-[25px] tracking-[-0.32px] text-[#48b2af]">
              카드 섞기
            </p>
          </button>
        )}

        {phase === 'picked' && (
          <button
            onClick={handleConfirmCard}
            className="w-full h-[56px] bg-[#48b2af] rounded-[16px] flex items-center justify-center cursor-pointer active:scale-95 transition-all"
          >
            <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[16px] leading-[25px] tracking-[-0.32px] text-white">
              선택 완료
            </p>
          </button>
        )}
      </div>

      {/* ⭐ Bottom Navigation - Fixed */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-50">
        <div className="bg-white border-t border-[#f3f3f3]">
          <div className="h-[60px] px-[28px] py-[12px]">
            <div className="flex items-center justify-between w-full">
              {/* Left: Page Indicator */}
              <div className="flex gap-[8px] items-center">
                <button className="flex items-center justify-center p-[4px] rounded-[8px] w-[36px] h-[36px]">
                  <svg width="20" height="20" viewBox="0 0 20 13" fill="none">
                    <path d={svgPaths.p14150900} fill="#848484" />
                    <path clipRule="evenodd" d={svgPaths.p5097a80} fill="#848484" fillRule="evenodd" />
                  </svg>
                </button>
                <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[15px] leading-[23.5px] tracking-[-0.3px]">
                  <span className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-[#151515]">
                    {String(questionOrder).padStart(2, '0')}/
                  </span>
                  <span className="text-[#b7b7b7]"> {String(totalQuestions).padStart(2, '0')}</span>
                </p>
              </div>

              {/* Right: Navigation Buttons */}
              <div className="flex gap-[16px] items-center">
                {/* ⭐ 이전 버튼 */}
                <button
                  onClick={() => {
                    // 이전 질문 찾기
                    const prevQ = allResults.find(r => r.question_order === questionOrder - 1);
                    const fromParam = from ? `&from=${from}` : '';
                    const contentIdParam = contentId ? `&contentId=${contentId}` : '';
                    
                    // [DEV] 이전 버튼 클릭 시 "이전 질문의 마지막 단계(step=3)"로 이동하여 역방향 플로우 연결
                    // 플로우: ... -> 이전질문 마지막(step=3) <-> 현재질문 뽑기(step=0) -> ...
                    const stepParam = '&step=3'; 

                    if (prevQ) {
                      if (prevQ.question_type === 'tarot') {
                        navigate(`/result/tarot?orderId=${orderId}&questionOrder=${prevQ.question_order}${contentIdParam}${fromParam}${stepParam}`);
                      } else {
                        navigate(`/result/saju?orderId=${orderId}&startPage=${prevQ.question_order}${contentIdParam}${fromParam}${stepParam}`);
                      }
                    } else {
                      // Fallback
                      navigate(`/result/tarot?orderId=${orderId}&questionOrder=${questionOrder - 1}${contentIdParam}${fromParam}${stepParam}`);
                    }
                  }}
                  disabled={questionOrder === 1}
                  className={`flex gap-[4px] items-center h-[34px] px-[8px] rounded-[12px] cursor-pointer transition-colors hover:bg-gray-100 ${
                    questionOrder === 1 ? 'opacity-30' : ''
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d={svgPaths.p2679d700}
                      stroke={questionOrder === 1 ? '#b7b7b7' : 'black'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.7"
                    />
                  </svg>
                  <p className={`font-['Pretendard_Variable:Medium',sans-serif] font-medium text-[14px] leading-[22px] tracking-[-0.42px] ${
                    questionOrder === 1 ? 'text-[#b7b7b7]' : 'text-black'
                  }`}>
                    이전
                  </p>
                </button>

                <div className="h-[12px] w-0 border-l border-[#e7e7e7]" />

                {/* ⭐ 다음 버튼 */}
                <button
                  onClick={() => {
                    // [DEV] 다음 버튼 클릭 시 "현재 질문의 결과 화면(step=1)"으로 이동
                    // 플로우: 뽑기(step=0) -> 결과(step=1) -> 풀이(step=2) -> 마지막(step=3)
                    const fromParam = from ? `&from=${from}` : '';
                    const contentIdParam = contentId ? `&contentId=${contentId}` : '';
                    const stepParam = '&step=1';
                    navigate(`/result/tarot?orderId=${orderId}&questionOrder=${questionOrder}${contentIdParam}${fromParam}${stepParam}`);
                  }}
                  className="flex gap-[4px] items-center h-[34px] px-[8px] rounded-[12px] cursor-pointer transition-colors hover:bg-gray-100"
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
    </div>
  );
}