/**
 * 타로 카드 셔플 데모 페이지
 * 
 * @description
 * TarotCardSelection 컴포넌트를 테스트할 수 있는 독립 페이지
 * 
 * @route /tarot-demo
 */

import { TarotFlowPage } from '../components/TarotFlowPage';

export default function TarotDemo() {
  const handleCardSelected = (cardId: number) => {
    console.log('✅ 선택된 카드 ID:', cardId);
    // 여기서 실제로는 타로 풀이 페이지로 이동하거나 데이터 저장
  };

  return (
    <div className="w-full min-h-screen">
      <TarotFlowPage 
        contentId="demo-tarot-content" 
        onCardSelected={handleCardSelected}
      />
    </div>
  );
}
