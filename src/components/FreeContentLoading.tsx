/**
 * 무료 콘텐츠 로딩 페이지
 * - DB 폴링 제거 (무료 콘텐츠는 휘발성)
 * - Edge Function 동기 호출
 * - localStorage에 결과 저장
 * - 결과 페이지로 이동
 */

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import svgPaths from "../imports/svg-rj5zh7ifhy";
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';

interface FreeContentLoadingProps {
  userName?: string;
}

function DotLoading() {
  return (
    <div className="flex items-center gap-[10px] h-[10px]" data-name="Dot loading">
      <div className="w-[10px] h-[10px] rounded-full bg-[#E4F7F7] animate-[dotPulse_1.4s_ease-in-out_infinite]" 
           style={{ animationDelay: '0s' }} />
      <div className="w-[10px] h-[10px] rounded-full bg-[#7ED4D2] animate-[dotPulse_1.4s_ease-in-out_infinite]" 
           style={{ animationDelay: '0.2s' }} />
      <div className="w-[10px] h-[10px] rounded-full bg-[#48B2AF] animate-[dotPulse_1.4s_ease-in-out_infinite]" 
           style={{ animationDelay: '0.4s' }} />
    </div>
  );
}

function NavigationTopBar({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Navigation / Top Bar">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[12px] py-[4px] relative size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Icon">
            {/* Left Action - Hidden */}
            <div className="content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[12px] shrink-0 size-[44px]" />
            
            {/* Title */}
            <p className="basis-0 font-['Pretendard_Variable:SemiBold',sans-serif] grow leading-[25.5px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[18px] text-black text-center text-nowrap tracking-[-0.36px]">
              상세 풀이
            </p>
            
            {/* Right Action - Close */}
            <div 
              onClick={onClose}
              className="content-stretch flex items-center justify-center p-[4px] relative rounded-[12px] shrink-0 size-[44px] cursor-pointer"
            >
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Box">
                    <path d="M4 20L20 4" stroke="#848484" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                    <path d="M20 20L4 4" stroke="#848484" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FreeContentLoading({ userName = '홍길동' }: FreeContentLoadingProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const contentId = searchParams.get('contentId');
  const sajuRecordId = searchParams.get('sajuRecordId');
  const guestMode = searchParams.get('guestMode') === 'true';
  const userNameFromUrl = searchParams.get('userName') || userName;

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('⏱️ [FreeContentLoading] 컴포넌트 마운트');
  console.log('📌 [FreeContentLoading] contentId:', contentId);
  console.log('📌 [FreeContentLoading] sajuRecordId:', sajuRecordId);
  console.log('📌 [FreeContentLoading] guestMode:', guestMode);
  console.log('📌 [FreeContentLoading] userName:', userNameFromUrl);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // ⭐️ Edge Function 동기 호출 (DB 폴링 제거)
  useEffect(() => {
    if (!contentId) {
      console.error('❌ [FreeContentLoading] contentId 없음');
      toast.error('잘못된 접근입니다.');
      navigate('/');
      return;
    }

    const generateFreeContent = async () => {
      try {
        console.log('🚀 [FreeContentLoading] Edge Function 호출 시작...');

        // ⭐️ 1단계: contentId로 질문 조회
        console.log('📋 [FreeContentLoading] 질문 조회 시작...');
        const { data: questions, error: questionsError } = await supabase
          .from('master_content_questions')
          .select('*')
          .eq('content_id', contentId)
          .order('question_order');

        if (questionsError) {
          console.error('❌ [FreeContentLoading] 질문 조회 실패:', questionsError);
          toast.error('질문을 불러올 수 없습니다.');
          navigate('/');
          return;
        }

        if (!questions || questions.length === 0) {
          console.error('❌ [FreeContentLoading] 질문이 없습니다.');
          toast.error('콘텐츠 정보가 올바르지 않습니다.');
          navigate('/');
          return;
        }

        console.log('✅ [FreeContentLoading] 질문 조회 완료:', questions);

        // ⭐️ 2단계: 사주 정보 가져오기 및 문자열 변환
        let questionerInfo = '';
        let sajuDataForCache: any = null;

        if (guestMode) {
          // 게스트 모드: localStorage에서 사주 데이터 가져오기
          console.log('🔓 [FreeContentLoading] 게스트 모드 → localStorage 사주 데이터 사용');
          const cachedSaju = localStorage.getItem('cached_saju_info');
          
          if (!cachedSaju) {
            console.error('❌ [FreeContentLoading] 캐시된 사주 정보 없음');
            toast.error('사주 정보를 찾을 수 없습니다.');
            navigate('/');
            return;
          }

          sajuDataForCache = JSON.parse(cachedSaju);
          console.log('📌 [FreeContentLoading] 캐시된 사주 데이터:', sajuDataForCache);

          // 사주 정보를 문자열로 변환
          questionerInfo = `
이름: ${sajuDataForCache.full_name || '미상'}
성별: ${sajuDataForCache.gender === 'male' ? '남성' : '여성'}
생년월일: ${new Date(sajuDataForCache.birth_date).toLocaleDateString('ko-KR')}
출생시간: ${sajuDataForCache.birth_time}
          `.trim();
        } else {
          // 로그인 모드: sajuRecordId로 DB 조회
          console.log('✅ [FreeContentLoading] 로그인 모드 → sajuRecordId로 DB 조회');
          
          if (!sajuRecordId) {
            console.error('❌ [FreeContentLoading] sajuRecordId 없음');
            toast.error('사주 정보를 찾을 수 없습니다.');
            navigate('/');
            return;
          }

          const { data: sajuRecord, error: sajuError } = await supabase
            .from('saju_records')
            .select('*')
            .eq('id', sajuRecordId)
            .single();

          if (sajuError || !sajuRecord) {
            console.error('❌ [FreeContentLoading] 사주 정보 조회 실패:', sajuError);
            toast.error('사주 정보를 찾을 수 없습니다.');
            navigate('/');
            return;
          }

          sajuDataForCache = sajuRecord;
          console.log('📌 [FreeContentLoading] 조회한 사주 데이터:', sajuRecord);
          console.log('  - full_name:', sajuRecord.full_name);
          console.log('  - gender:', sajuRecord.gender);
          console.log('  - birth_date:', sajuRecord.birth_date);
          console.log('  - birth_time:', sajuRecord.birth_time);

          // 사주 정보를 문자열로 변환
          questionerInfo = `
이름: ${sajuRecord.full_name || '미상'}
성별: ${sajuRecord.gender === 'male' ? '남성' : '여성'}
생년월일: ${new Date(sajuRecord.birth_date).toLocaleDateString('ko-KR')}
출생시간: ${sajuRecord.birth_time}
          `.trim();
        }

        console.log('📌 [FreeContentLoading] questionerInfo:', questionerInfo);

        // ⭐️ 3단계: 각 질문마다 Edge Function 호출 (병렬 처리)
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('🚀 [FreeContentLoading] Edge Function 병렬 호출 시작...');
        console.log('📌 [FreeContentLoading] 질문 개수:', questions.length);

        // ⚡ Promise.all로 모든 질문을 동시에 처리
        const promises = questions.map(async (question, index) => {
          console.log(`📤 [FreeContentLoading] 질문 ${index + 1}/${questions.length} 호출 중...`);
          console.log('📌 questionText:', question.question_text);

          const requestBody = {
            questionText: question.question_text,
            questionerInfo: questionerInfo,
            questionId: question.id
          };

          console.log('📤 [FreeContentLoading] 호출 파라미터:', requestBody);

          const result = await supabase.functions.invoke('generate-free-preview', {
            body: requestBody
          });

          console.log(`📥 [FreeContentLoading] 질문 ${index + 1} 응답:`, result);

          if (result.error) {
            console.error(`❌ [FreeContentLoading] 질문 ${index + 1} 생성 실패:`, result.error);
            throw new Error(`질문 ${index + 1} 생성 실패`);
          }

          if (!result.data || !result.data.success) {
            console.error(`❌ [FreeContentLoading] 질문 ${index + 1} 응답 데이터 없음`);
            throw new Error(`질문 ${index + 1} 응답 데이터 없음`);
          }

          console.log(`✅ [FreeContentLoading] 질문 ${index + 1} 생성 완료`);

          return {
            questionId: question.id,
            questionOrder: question.question_order,
            questionText: question.question_text,
            questionType: question.question_type,
            previewText: result.data.previewText
          };
        });

        // 모든 질문이 완료될 때까지 대기
        const results = await Promise.all(promises);

        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('✅ [FreeContentLoading] 모든 질문 생성 완료:', results);

        // ⭐️ 4단계: localStorage에 결과 저장
        const resultData = {
          contentId: contentId,
          sajuData: sajuDataForCache,
          results: results,
          createdAt: new Date().toISOString()
        };

        const resultKey = `free_content_${contentId}_${sajuRecordId || 'guest'}`;
        localStorage.setItem(resultKey, JSON.stringify(resultData));
        console.log('💾 [FreeContentLoading] localStorage 저장 완료');
        console.log('📌 [FreeContentLoading] resultKey:', resultKey);

        // ⭐️ 5단계: 결과 페이지로 이동
        console.log('🔀 [FreeContentLoading] 결과 페이지로 이동');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        
        navigate(`/product/${contentId}/result/free`, {
          state: {
            resultKey: resultKey,
            userName: userNameFromUrl,
            contentId: contentId
          }
        });

      } catch (err) {
        console.error('❌ [FreeContentLoading] 예외 발생:', err);
        toast.error('운세 생성 중 오류가 발생했습니다.');
        navigate('/');
      }
    };

    generateFreeContent();
  }, [contentId, sajuRecordId, guestMode, userNameFromUrl, navigate]);

  return (
    <div className="bg-white relative min-h-screen w-full flex justify-center" data-name="로딩중 _ 390">
      <div className="w-full max-w-[390px] relative">
        {/* Top Navigation Container */}
        <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-full" data-name="Top Navigation Container">
          <NavigationTopBar />
        </div>

        {/* Loading Content */}
        <div className="absolute content-stretch flex flex-col gap-[44px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[350px]">
          <DotLoading />
          <div className="content-stretch flex flex-col font-['Pretendard_Variable:Bold',sans-serif] gap-[4px] items-start leading-[0] relative shrink-0 text-[22px] text-black text-center tracking-[-0.22px] w-full">
            <div className="flex flex-col justify-center relative shrink-0 w-full">
              <p className="leading-[32.5px]">{userNameFromUrl}님의</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 w-full">
              <p className="leading-[32.5px]">운세를 분석중이에요!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}