/**
 * 사주 정보 추가 전용 페이지 (관계 필드 포함)
 * - 프로필 > 사주 정보 관리 > "사주 정보 추가" 버튼 클릭 시 사용
 * - "함께 보는 사주" 추가 전용
 * - 관계 필드 필수 입력
 * - AI 호출 없음, 단순 저장만
 * Figma import: 사주정보추가-255-3568.tsx
 */

import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import svgPaths from "../imports/svg-br5ag5z658";
import { supabase } from '../lib/supabase';
import { toast } from 'sonner@2.0.3';
import { SessionExpiredDialog } from './SessionExpiredDialog';
import { NavigationHeader } from './NavigationHeader';

interface SajuAddPageProps {
  onBack: () => void;
  onSaved: () => void;
}

// 에러 상태 타입
interface ValidationErrors {
  name?: string;
  birthDate?: string;
  birthTime?: string;
  relationship?: string;
}

export default function SajuAddPage({ onBack, onSaved }: SajuAddPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const editMode = location.state?.editMode || false;
  const sajuData = location.state?.sajuData || null;
  const sajuInfo = location.state?.sajuInfo || null; // ⭐ 케밥 메뉴에서 전달받은 사주 정보
  const returnTo = location.state?.returnTo || null; // ⭐ 돌아갈 경로

  // ⭐ sajuInfo 또는 sajuData가 있으면 편집 모드로 간주
  const isEditMode = !!(sajuInfo || (editMode && sajuData));
  const editingSaju = sajuInfo || sajuData; // 수정할 사주 정보

  const [name, setName] = useState('');
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [unknownTime, setUnknownTime] = useState(false);
  const [relationship, setRelationship] = useState('');
  const [showRelationshipPicker, setShowRelationshipPicker] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSessionExpired, setIsSessionExpired] = useState(false);

  // Refs for auto-focus on Enter key
  const nameInputRef = useRef<HTMLInputElement>(null);
  const birthDateInputRef = useRef<HTMLInputElement>(null);
  const birthTimeInputRef = useRef<HTMLInputElement>(null);

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

  // ⭐ 편집 모드일 때 기존 데이터 로드
  useEffect(() => {
    // editMode가 있을 때: sajuData 사용 (기존 로직)
    // sajuInfo가 있을 때: 케밥 메뉴에서 전달받은 사주 정보 사용
    const dataToLoad = editMode ? sajuData : sajuInfo;
    
    if (dataToLoad) {
      console.log('✏️ [편집모드] 기존 데이터 로드:', dataToLoad);
      
      setName(dataToLoad.full_name || '');
      setGender(dataToLoad.gender || 'female');
      
      // birth_date 파싱: "1991-12-25T00:00:00Z" → "1991-12-25"
      const birthDateOnly = dataToLoad.birth_date?.split('T')[0] || '';
      setBirthDate(birthDateOnly);
      
      // birth_time 처리
      if (dataToLoad.birth_time === '시간 미상') {
        setUnknownTime(true);
        setBirthTime('오후 12:00');
      } else {
        setUnknownTime(false);
        setBirthTime(dataToLoad.birth_time || '');
      }
      
      // ⭐ 관계 정보 로드 (notes 필드)
      setRelationship(dataToLoad.notes || '');
    }
  }, [editMode, sajuData, sajuInfo]);

  const relationshipOptions = [
    '친구',
    '가족',
    '연인',
    '엄마',
    '아빠',
    '형제',
    '자매',
    '직장동료',
    '기타'
  ];

  // 날짜 유효성 검사
  const isValidDate = (dateString: string): boolean => {
    const numbers = dateString.replace(/[^\d]/g, '');
    if (numbers.length !== 8) return false;

    const year = parseInt(numbers.substring(0, 4));
    const month = parseInt(numbers.substring(4, 6));
    const day = parseInt(numbers.substring(6, 8));

    if (year < 1900 || year > new Date().getFullYear()) return false;
    if (month < 1 || month > 12) return false;
    
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) return false;

    return true;
  };

  // 이름 입력 핸들러
  const handleNameChange = (value: string) => {
    // 모든 문자 입력 가능 (최대 20자)
    const filtered = value.slice(0, 20);
    setName(filtered);
    
    if (filtered.length > 0) {
      setErrors(prev => ({ ...prev, name: undefined }));
    }
  };

  // 생년월일 입력 핸들러 (자동 포매팅)
  const handleBirthDateChange = (value: string) => {
    // 숫자만 입력 가능
    const numbers = value.replace(/[^\d]/g, '');
    
    // 8자리 제한
    if (numbers.length > 8) return;
    
    // 자동 포매팅: YYYY-MM-DD
    let formatted = numbers;
    if (numbers.length >= 5) {
      formatted = `${numbers.slice(0, 4)}-${numbers.slice(4, 6)}${numbers.length > 6 ? `-${numbers.slice(6, 8)}` : ''}`;
    }
    
    setBirthDate(formatted);
    
    // 8자리 입력 완료 시 유효성 검사
    if (numbers.length === 8) {
      if (!isValidDate(formatted)) {
        setErrors(prev => ({ ...prev, birthDate: '유효한 생년월일을 입력해주세요.' }));
      } else {
        setErrors(prev => ({ ...prev, birthDate: undefined }));
        // ⭐ 아이폰 숫자 키보드 대응: 8자리 입력 완료 시 자동으로 태어난 시간으로 포커스 이동
        setTimeout(() => {
          birthTimeInputRef.current?.focus();
        }, 100);
      }
    } else {
      // 입력 중일 때는 에러 표시 안함
      setErrors(prev => ({ ...prev, birthDate: undefined }));
    }
  };

  // 태어난 시간 입력 핸들러
  const handleBirthTimeChange = (value: string) => {
    // 숫자만 입력 가능
    const numbers = value.replace(/[^\d]/g, '');
    
    // 4자리 제한 (HHMM)
    if (numbers.length > 4) return;
    
    // 입력 중일 때는 숫자만 표시
    if (numbers.length < 4) {
      setBirthTime(numbers);
      setErrors(prev => ({ ...prev, birthTime: undefined }));
      return;
    }
    
    // 4자리 입력 완료 시 오전/오후 자동 변환
    if (numbers.length === 4) {
      const hourStr = numbers.substring(0, 2);
      const minuteStr = numbers.substring(2, 4);
      const hour = parseInt(hourStr);
      const minute = parseInt(minuteStr);
      
      // 유효성 검사
      if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
        setErrors(prev => ({ ...prev, birthTime: '태어난 시를 정확하게 입력해주세요.' }));
        setBirthTime(numbers);
        return;
      }
      
      // 오전/오후 변환
      const period = hour < 12 ? '오전' : '오후';
      const displayHour = hour === 0 ? 12 : (hour > 12 ? hour - 12 : hour);
      const formattedTime = `${period} ${displayHour}:${minuteStr}`;
      
      setBirthTime(formattedTime);
      setErrors(prev => ({ ...prev, birthTime: undefined }));
      
      // ⭐ 4자리 입력 완료 시 키보드 닫고 관계 바텀시트 자동 노출
      console.log('✅ [태어난 시간] 4자리 입력 완료 → 키보드 닫고 관계 바텀시트 자동 노출');
      birthTimeInputRef.current?.blur(); // 키보드 닫기
      setTimeout(() => {
        setShowRelationshipPicker(true);
      }, 600); // 600ms 딜레이로 키보드가 완전히 닫힌 후 바텀시트 노출
    }
  };

  // "모르겠어요" 토글 핸들러
  const handleUnknownTimeToggle = () => {
    const newValue = !unknownTime;
    setUnknownTime(newValue);
    
    if (newValue) {
      // 체크 시 "12:00"으로 자동 설정
      setBirthTime('12:00');
      setErrors(prev => ({ ...prev, birthTime: undefined }));
    } else {
      // 체크 해제 시 초기화
      setBirthTime('');
    }
  };

  // 필수값 검사
  const isFormValid = () => {
    const nameValid = name.trim().length >= 1;
    const birthDateValid = birthDate.replace(/[^\d]/g, '').length === 8 && isValidDate(birthDate);
    // ⭐️ 관계는 선택 사항으로 변경
    
    return nameValid && birthDateValid;
  };

  // 저장 버튼 클릭 시 유효성 검사
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // 이름 검증
    if (!name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }

    // 생년월일 검증
    const birthDateNumbers = birthDate.replace(/[^\d]/g, '');
    if (birthDateNumbers.length !== 8) {
      newErrors.birthDate = '생년월일을 정확하게 입력해주세요.';
    } else if (!isValidDate(birthDate)) {
      newErrors.birthDate = '유효한 생년월일을 입력해주세요.';
    }

    // ⭐️ 관계는 선택 사항 - 검증 제거
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 저장 핸들러
  const handleSave = async () => {
    if (!validateForm() || isSaving) {
      return;
    }

    setIsSaving(true);

    try {
      console.log('💾 [SajuAddPage] 사주 정보 저장 시작');

      // 로그인 확인
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError || !user) {
        toast.error('로그인이 필요합니다');
        return;
      }

      console.log('✅ [SajuAddPage] 로그인 확인:', user.email);

      // ⭐️ 관계가 비어있으면 '지인'으로 기본값 설정
      const finalRelationship = relationship.trim() || '지인';
      console.log('📌 [SajuAddPage] 관계:', finalRelationship);

      const sajuPayload = {
        full_name: name.trim(),
        gender: gender, // 'female' 또는 'male'로 그대로 저장
        birth_date: new Date(birthDate).toISOString(),
        birth_time: unknownTime ? '시간 미상' : birthTime,
        notes: finalRelationship, // 관계를 notes 필드에 저장 (기본값: '지인')
      };

      if (isEditMode && editingSaju?.id) {
        // ⭐ 편집 모드: UPDATE
        console.log('✏️ [편집모드] 사주 정보 업데이트:', editingSaju.id, sajuPayload);
        
        const { error } = await supabase
          .from('saju_records')
          .update(sajuPayload)
          .eq('id', editingSaju.id);

        if (error) {
          console.error('❌ [SajuAddPage] 업데이트 실패:', error);
          throw error;
        }

        console.log('✅ [SajuAddPage] 사주 정보 업데이트 완료');
        toast.success('수정되었습니다.', {
          duration: 2200
        });
      } else {
        // ⭐ 신규 등록 모드: INSERT
        console.log('➕ [신규등록] 사주 정보 저장:', sajuPayload);
        
        const { data, error } = await supabase
          .from('saju_records')
          .insert({
            user_id: user.id,
            ...sajuPayload,
            is_primary: true // ⭐️ 함께 보는 사주 추가 시 대표 사주로 자동 지정
          })
          .select()
          .single();

        if (error) {
          console.error('❌ [SajuAddPage] 저장 실패:', error);
          throw error;
        }

        console.log('✅ [SajuAddPage] 사주 정보 저장 완료 (대표 사주로 지정):', data);
        
        // ⭐️ 기존 대표 사주 해제 (새로 추가된 사주가 대표 사주가 됨)
        const { error: resetError } = await supabase
          .from('saju_records')
          .update({ is_primary: false })
          .eq('user_id', user.id)
          .neq('id', data.id);

        if (resetError) {
          console.error('❌ [SajuAddPage] 기존 대표 사주 해제 실패:', resetError);
        } else {
          console.log('✅ [SajuAddPage] 기존 대표 사주 해제 완료');
        }

        toast.success('저장되었습니다.', {
          duration: 2200
        });
      }

      // 저장 완료 후 관리 페이지로 이동
      setTimeout(() => {
        if (returnTo) {
          navigate(returnTo);
        } else {
          onSaved();
        }
      }, 300);
    } catch (error) {
      console.error('❌ [SajuAddPage] 저장 중 오류:', error);
      toast.error('저장에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-white relative min-h-screen w-full flex justify-center">
      <div className="w-full max-w-[390px] relative">
        {/* Top Navigation */}
        <NavigationHeader
          title={sajuInfo || editMode ? '사주 정보 수정' : '사주 정보 입력'}
          onBack={() => {
            if (returnTo) {
              navigate(returnTo);
            } else {
              onBack();
            }
          }}
        />

        {/* Main Content */}
        <div className="pt-[68px] px-[20px] pb-[140px]">
          {/* 이름 */}
          <div className="flex flex-col gap-[4px] mb-[32px]">
            <label className="px-[4px] text-[12px] text-[#848484] leading-[16px] tracking-[-0.24px]">
              이름
            </label>
            <div className="bg-white h-[56px] relative rounded-[16px] border border-[#e7e7e7]">
              <div className="flex items-center h-full px-[12px]">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                      e.preventDefault();
                      birthDateInputRef.current?.focus();
                    }
                  }}
                  placeholder="예: 홍길동"
                  className="flex-1 text-[16px] text-black leading-[20px] tracking-[-0.45px] outline-none bg-transparent placeholder:text-[#b7b7b7]"
                  ref={nameInputRef}
                />
              </div>
            </div>
            {errors.name && (
              <p className="text-[12px] text-red-500 px-[4px]">{errors.name}</p>
            )}
          </div>

          {/* 성별 */}
          <div className="flex flex-col gap-[4px] mb-[32px]">
            <label className="px-[4px] text-[12px] text-[#848484] leading-[16px] tracking-[-0.24px]">
              성별
            </label>
            <div className="bg-[#f8f8f8] rounded-[16px] p-[8px]">
              <div className="flex gap-[8px]">
                <button
                  onClick={() => setGender('female')}
                  className={`flex-1 h-[48px] rounded-[12px] flex items-center justify-between px-[20px] py-[12px] transition-all ${
                    gender === 'female'
                      ? 'bg-[#48b2af] text-white shadow-[0px_2px_7px_0px_rgba(0,0,0,0.12)]'
                      : 'bg-[#f9f9f9] text-[#b7b7b7]'
                  }`}
                >
                  <span className="text-[15px] font-medium leading-[20px] tracking-[-0.45px]">여성</span>
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M7 11.625L10.3294 16L17 9"
                      stroke={gender === 'female' ? 'white' : '#E7E7E7'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setGender('male')}
                  className={`flex-1 h-[48px] rounded-[12px] flex items-center justify-between px-[20px] py-[12px] transition-all ${
                    gender === 'male'
                      ? 'bg-[#48b2af] text-white shadow-[0px_2px_7px_0px_rgba(0,0,0,0.12)]'
                      : 'bg-[#f9f9f9] text-[#b7b7b7]'
                  }`}
                >
                  <span className="text-[15px] font-medium leading-[20px] tracking-[-0.45px]">남성</span>
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M7 11.625L10.3294 16L17 9"
                      stroke={gender === 'male' ? 'white' : '#E7E7E7'}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 생년월일 */}
          <div className="flex flex-col gap-[4px] mb-[32px]">
            <label className="px-[4px] text-[12px] text-[#848484] leading-[16px] tracking-[-0.24px]">
              생년월일 (양력 기준으로 입력해 주세요)
            </label>
            <div className="bg-white h-[56px] relative rounded-[16px] border border-[#e7e7e7]">
              <div className="flex items-center h-full px-[12px]">
                <input
                  type="text"
                  inputMode="numeric"
                  value={birthDate}
                  onChange={(e) => handleBirthDateChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                      e.preventDefault();
                      birthTimeInputRef.current?.focus();
                    }
                  }}
                  placeholder="19920715"
                  className="flex-1 text-[16px] text-black leading-[20px] tracking-[-0.45px] outline-none bg-transparent placeholder:text-[#b7b7b7] text-left"
                  ref={birthDateInputRef}
                />
              </div>
            </div>
            {errors.birthDate && (
              <p className="text-[12px] text-red-500 px-[4px]">{errors.birthDate}</p>
            )}
          </div>

          {/* 태어난 시간 */}
          <div className="flex gap-[24px] items-start mb-[32px]">
            <div className="flex-1 flex flex-col gap-[4px]">
              <label className="px-[4px] text-[12px] text-[#848484] leading-[16px] tracking-[-0.24px]">
                태어난 시간
              </label>
              <div className={`h-[48px] relative rounded-[12px] border ${unknownTime ? 'bg-[#f8f8f8] border-[#f8f8f8]' : 'bg-white border-[#e7e7e7]'}`}>
                <div className="flex items-center h-full px-[12px]">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={birthTime}
                    onChange={(e) => handleBirthTimeChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
                        e.preventDefault();
                        if (isFormValid() && !isSaving) {
                          handleSave();
                        }
                      }
                    }}
                    placeholder="예: 2358"
                    disabled={unknownTime}
                    className="flex-1 text-[16px] text-black leading-[20px] tracking-[-0.45px] outline-none bg-transparent placeholder:text-[#b7b7b7] disabled:text-[#d4d4d4]"
                    ref={birthTimeInputRef}
                  />
                </div>
              </div>
              {errors.birthTime && (
                <p className="text-[12px] text-red-500 px-[4px]">{errors.birthTime}</p>
              )}
            </div>

            {/* 모르겠어요 체크박스 */}
            <div className="pt-[24px]">
              <button
                onClick={handleUnknownTimeToggle}
                className="flex items-center gap-[4px] cursor-pointer bg-transparent border-none p-0"
              >
                <span className="text-[15px] font-medium text-[#525252] leading-[20px] tracking-[-0.45px]">
                  모르겠어요
                </span>
                <div className="flex items-center justify-center size-[44px]">
                  <div className={`size-[28px] rounded-[8px] border-2 flex items-center justify-center ${
                    unknownTime ? 'border-[#48b2af] bg-[#48b2af]' : 'border-[#e7e7e7] bg-white'
                  }`}>
                    {unknownTime && (
                      <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                        <path
                          d="M4 10L8 14L16 6"
                          stroke="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* 관계 */}
          <div className="flex flex-col gap-[4px]">
            <label className="px-[4px] text-[12px] text-[#848484] leading-[16px] tracking-[-0.24px]">
              관계
            </label>
            <div className="flex gap-[12px] items-center">
              <div className="flex-1">
                <input
                  type="text"
                  value={relationship}
                  readOnly
                  placeholder="관계를 선택해 주세요"
                  className="w-full h-[38px] px-[8px] text-[15px] text-[#b7b7b7] tracking-[-0.45px] bg-transparent border-none outline-none cursor-pointer"
                  onClick={() => setShowRelationshipPicker(true)}
                />
              </div>
              <button
                onClick={() => setShowRelationshipPicker(true)}
                className="bg-white h-[38px] px-[12px] rounded-[12px] border border-[#e7e7e7] cursor-pointer"
              >
                <span className="font-medium text-[14px] text-[#525252] leading-[20px] tracking-[-0.42px]">선택</span>
              </button>
            </div>
            <div className="h-[1px] bg-[#f3f3f3] w-full" />
            {errors.relationship && (
              <p className="text-[12px] text-red-500 px-[4px]">{errors.relationship}</p>
            )}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white shadow-[0px_-8px_16px_0px_rgba(255,255,255,0.76)] pb-[28px] z-10">
          <div className="px-[20px] pt-[12px]">
            <button
              onClick={handleSave}
              disabled={!isFormValid() || isSaving}
              className={`w-full h-[56px] rounded-[16px] flex items-center justify-center transition-all ${
                isFormValid() && !isSaving
                  ? 'bg-[#48b2af] text-white cursor-pointer hover:bg-[#3a9794]'
                  : 'bg-[#f8f8f8] text-[#b7b7b7] cursor-not-allowed'
              }`}
            >
              <span className="text-[16px] font-medium leading-[25px] tracking-[-0.32px]">
                {isSaving ? (editMode ? '수정 중...' : '저장 중...') : (editMode ? '수정하기' : '저장하기')}
              </span>
            </button>
          </div>
        </div>

        {/* 관계 선택 Bottom Sheet */}
        {showRelationshipPicker && (
          <>
            {/* Backdrop */}
            <div 
              onClick={() => setShowRelationshipPicker(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />
            
            {/* Bottom Sheet */}
            <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white rounded-t-[24px] z-50 pb-[28px]">
              {/* Header with X button */}
              <div className="relative px-[24px] py-[20px] border-b border-[#f3f3f3]">
                <h3 className="text-[20px] font-semibold text-black leading-[28px] tracking-[-0.2px]">관계 선택</h3>
                <button
                  onClick={() => setShowRelationshipPicker(false)}
                  className="absolute right-[20px] top-[20px] size-[24px] flex items-center justify-center text-[#848484] text-[20px]"
                >
                  ✕
                </button>
              </div>

              {/* Options List */}
              <div className="px-[24px] py-[20px] max-h-[60vh] overflow-y-auto">
                <div className="flex flex-col gap-[12px]">
                  {relationshipOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setRelationship(option);
                        setShowRelationshipPicker(false);
                        setErrors(prev => ({ ...prev, relationship: undefined }));
                      }}
                      className="bg-[#f8f8f8] h-[48px] px-[16px] rounded-[12px] flex items-center justify-start transition-all hover:bg-[#f0f0f0]"
                    >
                      <span className="text-[15px] text-[#151515] leading-[20px] tracking-[-0.45px]">{option}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Home Indicator */}
              <div className="h-[28px] relative w-full">
                <div className="absolute bg-black bottom-[8px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
              </div>
            </div>
          </>
        )}
      </div>
      <SessionExpiredDialog isOpen={isSessionExpired} />
    </div>
  );
}