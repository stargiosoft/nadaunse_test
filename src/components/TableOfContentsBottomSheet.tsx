/**
 * 목차 바텀시트 컴포넌트
 * 
 * @description
 * 상세 풀이 페이지에서 목차 아이콘 클릭 시 노출되는 바텀시트입니다.
 * 사용자가 원하는 질문으로 빠르게 이동할 수 있도록 전체 질문 리스트를 제공합니다.
 * 
 * @features
 * - 드래그 핸들로 확장/축소/닫기
 * - 딤 배경 클릭 시 닫기
 * - '목차 닫기' 버튼으로 닫기
 * - 질문 리스트 표시 (스크롤 가능)
 * - 현재 보고 있는 질문에 '보는 중' 태그
 * - 질문 클릭 시 해당 페이지로 이동
 */

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, PanInfo } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Question {
  id: string;
  question_id: string;
  question_order: number;
  question_text: string;
  question_type: 'saju' | 'tarot';
}

interface ContentInfo {
  title: string;
  thumbnail_url: string | null;
}

interface TableOfContentsBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  contentId: string;
  currentQuestionOrder: number; // 현재 보고 있는 질문 번호
}

/**
 * 홈 인디케이터 컴포넌트
 */
function HomeIndicatorLight() {
  return (
    <div className="bg-white h-[28px] relative shrink-0 w-full">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
    </div>
  );
}

/**
 * 목차 바텀시트 메인 컴포넌트
 */
export default function TableOfContentsBottomSheet({
  isOpen,
  onClose,
  orderId,
  contentId,
  currentQuestionOrder,
}: TableOfContentsBottomSheetProps) {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [contentInfo, setContentInfo] = useState<ContentInfo | null>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  // ⭐ 바텀시트가 열렸을 때 body 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        // 바텀시트가 닫힐 때 원래 스크롤 위치로 복구
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // 질문 리스트 조회
  useEffect(() => {
    if (!isOpen || !orderId) return;

    const fetchQuestions = async () => {
      try {
        console.log('🔍 [목차] 질문 리스트 조회 시작:', orderId);

        // ⚠️ [개발 모드] orderId가 dev_order로 시작하면 mock 데이터 사용
        if (orderId.startsWith('dev_order')) {
          console.log('🔧 [개발 모드] 목차 - mock 질문 리스트 사용');
          const mockQuestions: Question[] = [
            {
              id: 'mock_1',
              question_id: 'q1',
              question_order: 1,
              question_text: '그와 나의 인연은 어떻게 발전할까요?',
              question_type: 'tarot'
            },
            {
              id: 'mock_2',
              question_id: 'q2',
              question_order: 2,
              question_text: '상대방은 나를 어떻게 생각하고 있을까요?',
              question_type: 'saju'
            },
            {
              id: 'mock_3',
              question_id: 'q3',
              question_order: 3,
              question_text: '관계 발전을 위해 내가 주의해야 할 점은?',
              question_type: 'saju'
            },
            {
              id: 'mock_4',
              question_id: 'q4',
              question_order: 4,
              question_text: '앞으로 3개월 간 우리 관계의 흐름은?',
              question_type: 'saju'
            },
            {
              id: 'mock_5',
              question_id: 'q5',
              question_order: 5,
              question_text: '이 사람과의 최종 결말은 어떻게 될까요?',
              question_type: 'tarot'
            }
          ];
          setQuestions(mockQuestions);
          return;
        }

        const { data, error } = await supabase
          .from('order_results')
          .select('id, question_id, question_order, question_text, question_type')
          .eq('order_id', orderId)
          .order('question_order', { ascending: true });

        if (error) throw error;

        console.log('✅ [목차] 질문 리스트 조회 완료:', data?.length, '개');
        setQuestions(data || []);
      } catch (error) {
        console.error('❌ [목차] 질문 리스트 조회 실패:', error);
      }
    };

    fetchQuestions();
  }, [isOpen, orderId]);

  // 콘텐츠 정보 조회
  useEffect(() => {
    if (!isOpen || !contentId) return;

    const fetchContentInfo = async () => {
      try {
        console.log('🔍 [목차] 콘텐츠 정보 조회 시작:', contentId);

        // ⚠️ [개발 모드] contentId가 mock으로 시작하면 mock 데이터 사용
        if (contentId.startsWith('mock')) {
          console.log('🔧 [개발 모드] 목차 - mock 콘텐츠 정보 사용');
          setContentInfo({
            title: '[개발용] 연애운 - 그와 나의 인연은 어떻게 될까?',
            thumbnail_url: 'https://via.placeholder.com/80x54/48b2af/ffffff?text=Mock'
          });
          return;
        }

        const { data, error } = await supabase
          .from('master_contents')
          .select('title, thumbnail_url')
          .eq('id', contentId)
          .single();

        if (error) throw error;

        console.log('✅ [목차] 콘텐츠 정보 조회 완료:', data?.title);
        setContentInfo(data);
      } catch (error) {
        console.error('❌ [목차] 콘텐츠 정보 조회 실패:', error);
      }
    };

    fetchContentInfo();
  }, [isOpen, contentId]);

  // 질문 클릭 핸들러
  const handleQuestionClick = (question: Question) => {
    console.log('📍 [목차] 질문 클릭:', question.question_text, question.question_type);

    // 바텀시트 닫기
    onClose();

    // 질문 타입에 따라 분기
    if (question.question_type === 'tarot') {
      // 타로 질문 → 타로 결과 페이지로 이동 (셔플 스킵, 카드 이미 뽑힘)
      console.log('🎴 [목차] 타로 결과 페이지로 이동');
      navigate(`/result/tarot?orderId=${orderId}&questionOrder=${question.question_order}`);
    } else {
      // 사주 질문 → 사주 결과 페이지로 이동
      console.log('🔮 [목차] 사주 결과 페이지로 이동');
      navigate(`/result/saju?orderId=${orderId}&startPage=${question.question_order}`);
    }
  };

  // 드래그 종료 핸들러
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const dragDistance = info.offset.y;
    const dragVelocity = info.velocity.y;

    console.log('🖐️ [목차] 드래그 종료:', { dragDistance, dragVelocity });

    // 아래로 많이 드래그하거나 빠르게 스와이프 → 닫기
    if (dragDistance > 100 || dragVelocity > 500) {
      console.log('👇 [목차] 아래로 드래그 → 닫기');
      onClose();
      return;
    }

    // 위로 많이 드래그하거나 빠르게 스와이프 → 확장
    if (dragDistance < -100 || dragVelocity < -500) {
      console.log('👆 [목차] 위로 드래그 → 확장');
      return;
    }

    // 확장 상태에서 약간 아래로 드래그 → 기본 상태로
    if (dragDistance > 50) {
      console.log('📏 [목차] 확장 상태 → 기본 상태');
      return;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* 딤 배경 */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* 바텀시트 */}
      <motion.div
        ref={sheetRef}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] z-50"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      >
        <motion.div
          className="bg-white rounded-t-[20px] shadow-[0px_-8px_16px_0px_rgba(0,0,0,0.1)] flex flex-col"
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={{ top: 0.1, bottom: 0.2 }}
          onDragEnd={handleDragEnd}
          animate={{
            height: '90vh',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        >
          {/* 드래그 핸들 */}
          <div className="bg-white relative shrink-0 w-full rounded-t-[20px] cursor-grab active:cursor-grabbing">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center px-[10px] py-[12px] relative w-full">
                <div className="bg-[#d4d4d4] h-[4px] rounded-[999px] shrink-0 w-[48px]" />
              </div>
            </div>
          </div>

          {/* 헤더 */}
          <div className="bg-white relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[24px] py-[16px] relative w-full">
                <p className="font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[20px] text-black text-nowrap tracking-[-0.2px]">
                  목차
                </p>
              </div>
            </div>
          </div>

          {/* 콘텐츠 정보 카드 */}
          {contentInfo && (
            <div className="bg-[#f7f8f9] relative shrink-0 w-full">
              <div className="size-full">
                <div className="content-stretch flex flex-col items-start px-[20px] py-[12px] relative w-full">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    {/* 썸네일 */}
                    {contentInfo.thumbnail_url && (
                      <div className="h-[54px] relative rounded-[12px] shrink-0 w-[80px] overflow-hidden">
                        <img
                          src={contentInfo.thumbnail_url}
                          alt={contentInfo.title}
                          className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
                        />
                        <div className="absolute border border-[#f9f9f9] border-solid inset-[-1px] rounded-[13px] pointer-events-none" />
                      </div>
                    )}

                    {/* 텍스트 */}
                    <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px relative shrink-0">
                      {/* 태그 */}
                      <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center relative shrink-0 px-[6px] py-[2px] rounded-[4px]">
                        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px]">
                          심화 해석판
                        </p>
                      </div>

                      {/* 제목 */}
                      <div className="relative shrink-0 w-full">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center px-[2px] py-0 relative w-full">
                            <p className="basis-0 font-['Pretendard_Variable:Medium',sans-serif] font-medium grow leading-[25.5px] min-h-px min-w-px relative shrink-0 text-[15px] text-black tracking-[-0.3px] line-clamp-2">
                              {contentInfo.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 질문 리스트 (스크롤 가능) */}
          <div className="bg-white flex-1 overflow-y-auto relative shrink-0 w-full min-h-0">
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start px-[20px] py-[12px] relative w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  {questions.map((question, index) => (
                    <div key={question.id}>
                      <button
                        onClick={() => handleQuestionClick(question)}
                        className="h-[56px] relative rounded-[12px] shrink-0 w-full hover:bg-[#f9f9f9] transition-colors"
                      >
                        <div className="flex flex-col justify-center size-full">
                          <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                              {/* 질문 번호 */}
                              <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium relative shrink-0 text-[#b7b7b7] w-[24px] leading-[25.5px] text-[15px] tracking-[-0.3px]">
                                {String(question.question_order).padStart(2, '0')}
                              </p>

                              {/* 질문 텍스트 */}
                              <p
                                className={`basis-0 grow min-h-px min-w-px relative shrink-0 leading-[25.5px] text-[15px] tracking-[-0.3px] text-left ${
                                  question.question_order === currentQuestionOrder
                                    ? "font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold text-black"
                                    : "font-['Pretendard_Variable:Regular',sans-serif] font-normal text-black"
                                }`}
                              >
                                {question.question_text}
                              </p>

                              {/* '보는 중' 태그 */}
                              {question.question_order === currentQuestionOrder && (
                                <div className="bg-[#f0f8f8] content-stretch flex items-center justify-center relative shrink-0 px-[8px] py-[4px] rounded-[8px]">
                                  <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#41a09e] text-[12px] text-nowrap tracking-[-0.24px]">
                                    보는 중
                                  </p>
                                </div>
                              )}

                              {/* 화살표 아이콘 */}
                              <ChevronRight className="w-[16px] h-[16px] text-[#b7b7b7]" strokeWidth={1.7} />
                            </div>
                          </div>
                        </div>
                      </button>

                      {/* 구분선 (마지막 항목 제외) */}
                      {index < questions.length - 1 && (
                        <div className="h-0 relative shrink-0 w-full">
                          <div className="absolute inset-[-0.5px_-0.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 351 1">
                              <path d="M0.5 0.5H350.5" stroke="#F3F3F3" strokeLinecap="round" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 하단 버튼 - 고정 */}
          <div className="content-stretch flex flex-col items-start relative shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] shrink-0 w-full bg-white">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="bg-white relative shrink-0 w-full">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center px-[20px] py-[12px] relative w-full">
                    <button
                      onClick={onClose}
                      className="bg-[#f0f8f8] content-stretch flex h-[56px] items-center justify-center px-[12px] py-0 relative rounded-[16px] shrink-0 w-full active:scale-[0.98] transition-transform"
                    >
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                        <p className="font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[25px] relative shrink-0 text-[#48b2af] text-[16px] text-nowrap tracking-[-0.32px]">
                          목차 닫기
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <HomeIndicatorLight />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}