/**
 * 타로 콘텐츠 플로우 통합 페이지
 * 
 * @description
 * 타로 카드 선택 → 타로 풀이 순서로 진행
 * MasterContentDetailPage에서 타로 콘텐츠일 때 이 컴포넌트를 먼저 렌더링
 */

import { useState } from 'react';
import { TarotCardSelection } from './TarotCardSelection';

interface TarotFlowPageProps {
  contentId: string;
  title?: string;
  question?: string;
  onCardSelected: (cardId: number) => void;
}

export function TarotFlowPage({ contentId, title, question, onCardSelected }: TarotFlowPageProps) {
  const [isCardSelectionComplete, setIsCardSelectionComplete] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleCardComplete = (cardId: number) => {
    console.log('🎴 [타로] 카드 선택 완료:', cardId);
    setSelectedCardId(cardId);
    setIsCardSelectionComplete(true);
    
    // 부모 컴포넌트로 선택된 카드 ID 전달
    onCardSelected(cardId);
  };

  // 카드 선택 단계
  if (!isCardSelectionComplete) {
    return (
      <TarotCardSelection 
        title={title}
        question={question}
        onComplete={handleCardComplete} 
      />
    );
  }

  // 카드 선택 완료 후 타로 풀이로 전환
  return (
    <div className="bg-white w-full min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-[20px] font-bold text-[#151515] mb-[16px]">
          카드 선택 완료!
        </p>
        <p className="text-[14px] text-[#848484]">
          선택한 카드: {selectedCardId}
        </p>
        <p className="text-[14px] text-[#848484] mt-[8px]">
          (타로 풀이 화면으로 전환 예정)
        </p>
      </div>
    </div>
  );
}