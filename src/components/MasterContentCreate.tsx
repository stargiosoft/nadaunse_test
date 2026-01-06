import React, { useState, useEffect } from 'react';
import { Home, ChevronDown } from 'lucide-react';
import svgPaths from "../imports/svg-a0mkm9p61i";
import ArrowLeft from './ArrowLeft';
import { SessionExpiredDialog } from './SessionExpiredDialog';
import { supabase } from '../lib/supabase';

interface MasterContentCreateProps {
  onBack: () => void;
  onHome?: () => void;
  onNext?: (formData: ContentFormData) => void;
  initialFormData?: ContentFormData;
}

export interface ContentFormData {
  content_type: 'paid' | 'free';
  category_main: string;
  category_sub: string;
  title: string;
  questioner_info: string;
  description: string;
  user_concern: string;
}

const MAIN_CATEGORIES = [
  '개인운세', 
  '연애', 
  '이별', 
  '궁합', 
  '재물', 
  '직업', 
  '시험/학업', 
  '건강', 
  '인간관계', 
  '자녀', 
  '이사/매매', 
  '기타'
];

const SUB_CATEGORIES: Record<string, string[]> = {
  '개인운세': [
    '주간/월간 운세',
    '신년 운세',
    '평생 총운',
    '행운 아이템',
    '인생의 황금기',
    '개운법',
    '오행 분석',
    '신살(살풀이)',
    '타고난 성격',
    '장점/단점 분석',
    '숨겨진 잠재력'
  ],
  '연애': [
    '연애운(총론)',
    '새로운 인연',
    '짝사랑',
    '매력 어필',
    '연애 스타일 분석',
    '결혼운/시기',
    '불륜'
  ],
  '이별': [
    '재회',
    '이별극복'
  ],
  '궁합': [
    '연인 궁합',
    '결혼 궁합',
    '속궁합',
    '친구 궁합',
    '동료/동업 궁합',
    '가족 궁합',
    '자녀 궁합',
    '바람기',
    '신뢰도',
    '관계 발전',
    '이별 가능성',
    '재물 궁합'
  ],
  '재물': [
    '재물 황금기',
    '횡재수/복권운',
    '소비/지출 습관',
    '빚/금전문제 해결'
  ],
  '직업': [
    '진로/적성 탐색',
    '직업 재물운',
    '취업/이직운',
    '승진/성공 가능성',
    '사업운'
  ],
  '시험/학업': [
    '타고난 학업운',
    '시험 합격 가능성'
  ],
  '건강': [
    '주의해야 할 질병',
    '사고수',
    '다이어트/미용',
    '성(성) 건강',
    '멘탈 관리'
  ],
  '인간관계': [
    '친구/교우 관계',
    '가족 관계',
    '사회 생활/평판',
    '귀인/악연'
  ],
  '자녀': [
    '자녀운/자식복',
    '교육/양육 조언',
    '자녀의 성향/적성',
    '자녀와의 관계'
  ],
  '이사/매매': [
    '이사운/시기',
    '부동산 투자',
    '이동수'
  ],
  '기타': [
    '궁금증/질문',
    '고민 상담',
    '재미'
  ]
};

// 라디오 버튼 컴포넌트
function RadioButton({ checked, label, onChange }: { checked: boolean; label: string; onChange: () => void }) {
  return (
    <div 
      onClick={onChange}
      className="flex items-center gap-[10px] cursor-pointer"
    >
      <div className={`relative size-[20px] rounded-full ${
        checked ? 'bg-[#48b2af] border-2 border-[#48b2af]' : 'bg-[#c7c7c7] border-2 border-[#c7c7c7]'
      }`}>
        <div className={`absolute inset-0 m-auto rounded-full bg-white ${
          checked ? 'size-[12px]' : 'size-[18px]'
        }`} />
      </div>
      <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[12px] text-black">
        {label}
      </p>
    </div>
  );
}

// 드롭다운 컴포넌트
function Dropdown({ 
  value, 
  placeholder, 
  options, 
  onChange,
  disabled = false
}: { 
  value: string; 
  placeholder: string; 
  options: string[]; 
  onChange: (value: string) => void;
  disabled?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`h-[40px] rounded-[8px] border border-[gainsboro] flex items-center justify-between px-[18px] ${
          disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white cursor-pointer'
        }`}
      >
        <p className={`font-['Pretendard_Variable:Regular',sans-serif] text-[14px] ${
          value ? 'text-black' : 'text-[#a7a7a7]'
        }`}>
          {value || placeholder}
        </p>
        <ChevronDown className={`size-[16px] text-[#79808a] transition-transform ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </div>
      
      {isOpen && !disabled && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-[44px] left-0 right-0 bg-white border border-[gainsboro] rounded-[8px] shadow-lg z-20 max-h-[400px] overflow-y-auto">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="px-[18px] py-[12px] hover:bg-[#f0f8f8] cursor-pointer font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black"
              >
                {option}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function MasterContentCreate({ onBack, onHome, onNext, initialFormData }: MasterContentCreateProps) {
  const [formData, setFormData] = useState<ContentFormData>({
    content_type: 'paid',
    category_main: '',
    category_sub: '',
    title: '',
    questioner_info: '',
    description: '',
    user_concern: '',
    ...initialFormData
  });
  const [isSessionExpired, setIsSessionExpired] = useState(false);

  // 세션 체크
  useEffect(() => {
    const checkSession = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setIsSessionExpired(true);
      }
    };
    checkSession();
  }, []);

  const handleMainCategoryChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category_main: value,
      category_sub: '', // 대분류 변경 시 중분류 초기화
    }));
  };

  const handleNext = () => {
    // 필수 필드 검증
    if (!formData.category_main) {
      alert('대분류를 선택해주세요.');
      return;
    }
    if (!formData.category_sub) {
      alert('중분류를 선택해주세요.');
      return;
    }
    if (!formData.title.trim()) {
      alert('콘텐츠 제목을 입력해주세요.');
      return;
    }
    
    onNext?.(formData);
  };

  const isFormValid = formData.category_main && formData.category_sub && formData.title.trim();

  return (
    <div className="bg-[#f9f9f9] relative w-full min-h-screen flex justify-center">
      <div className="relative w-full max-w-[430px] min-h-screen flex flex-col bg-[#f9f9f9]">
        {/* Top Navigation */}
        <div className="bg-white content-stretch flex flex-col items-start shrink-0 w-full">
          <div className="h-[60px] content-stretch flex items-center justify-between relative shrink-0 w-full px-[16px]">
            <ArrowLeft onClick={onBack} />
            <p className="font-['Pretendard_Variable:SemiBold',sans-serif] text-[18px] text-[#1b1b1b] tracking-[-0.2px] absolute left-1/2 transform -translate-x-1/2">
              마스터 콘텐츠 만들기
            </p>
            <div 
              onClick={onHome}
              className="flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer z-10"
            >
              <Home className="size-[22px] text-[#030303]" />
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 bg-white mt-[8px] px-[30px] pt-[35px] pb-[120px] overflow-y-auto">
          {/* 기본 정보 타이틀 */}
          <div className="mb-[15px]">
            <p className="font-['Pretendard_Variable:Medium',sans-serif] text-[16px] text-black">
              기본 정보
            </p>
          </div>

          {/* 유료/무료 선택 */}
          <div className="flex gap-[40px] mb-[15px]">
            <RadioButton 
              checked={formData.content_type === 'paid'} 
              label="유료" 
              onChange={() => setFormData(prev => ({ ...prev, content_type: 'paid' }))}
            />
            <RadioButton 
              checked={formData.content_type === 'free'} 
              label="무료" 
              onChange={() => setFormData(prev => ({ ...prev, content_type: 'free' }))}
            />
          </div>

          {/* 대분류 */}
          <div className="mb-[15px]">
            <Dropdown
              value={formData.category_main}
              placeholder="대분류"
              options={MAIN_CATEGORIES}
              onChange={handleMainCategoryChange}
            />
          </div>

          {/* 중분류 */}
          <div className="mb-[15px]">
            <Dropdown
              value={formData.category_sub}
              placeholder="중분류"
              options={formData.category_main ? SUB_CATEGORIES[formData.category_main] : []}
              onChange={(value) => setFormData(prev => ({ ...prev, category_sub: value }))}
              disabled={!formData.category_main}
            />
          </div>

          {/* 콘텐츠 제목 */}
          <div className="mb-[15px]">
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="콘텐츠 제목"
              className="w-full h-[40px] rounded-[8px] border border-[gainsboro] px-[18px] font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black placeholder:text-[#a7a7a7]"
            />
          </div>

          {/* 질문자 정보 - 유료 콘텐츠만 표시 */}
          {formData.content_type === 'paid' && (
            <div className="mb-[15px]">
              <input
                type="text"
                value={formData.questioner_info}
                onChange={(e) => setFormData(prev => ({ ...prev, questioner_info: e.target.value }))}
                placeholder="질문자 정보"
                className="w-full h-[40px] rounded-[8px] border border-[gainsboro] px-[18px] font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black placeholder:text-[#a7a7a7]"
              />
            </div>
          )}

          {/* 콘텐츠 소개글 */}
          <div className="mb-[15px]">
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="콘텐츠 소개글"
              className="w-full h-[100px] rounded-[8px] border border-[gainsboro] px-[18px] py-[12px] font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black placeholder:text-[#a7a7a7] resize-none"
            />
          </div>

          {/* 사용자 고민글 - 유료 콘텐츠만 표시 */}
          {formData.content_type === 'paid' && (
            <div className="mb-[15px]">
              <textarea
                value={formData.user_concern}
                onChange={(e) => setFormData(prev => ({ ...prev, user_concern: e.target.value }))}
                placeholder="사용자 고민글"
                className="w-full h-[60px] rounded-[8px] border border-[gainsboro] px-[18px] py-[12px] font-['Pretendard_Variable:Regular',sans-serif] text-[14px] text-black placeholder:text-[#a7a7a7] resize-none"
              />
            </div>
          )}
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white px-[35px] py-[20px] max-w-[430px] mx-auto w-full">
          <button
            onClick={handleNext}
            disabled={!isFormValid}
            className={`w-full h-[52px] rounded-[8px] flex items-center justify-center transition-colors ${
              isFormValid 
                ? 'bg-[#48b2af] hover:bg-[#3fa3a0]' 
                : 'bg-[#e0e0e0] cursor-not-allowed'
            }`}
          >
            <p className={`font-['Pretendard_Variable:SemiBold',sans-serif] text-[18px] ${
              isFormValid ? 'text-white' : 'text-[#999999]'
            }`}>
              다음
            </p>
          </button>
        </div>
      </div>
      <SessionExpiredDialog isOpen={isSessionExpired} />
    </div>
  );
}