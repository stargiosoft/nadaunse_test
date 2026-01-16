import { storageBaseUrl } from '../utils/supabase/info';

/**
 * 78장 타로 덱 (영문 카드명)
 */
export const TAROT_DECK = [
  // 메이저 아르카나 (22장)
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
  "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
  "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World",
  // 마이너 아르카나 - Wands (14장)
  "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands",
  "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands",
  "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands",
  // 마이너 아르카나 - Cups (14장)
  "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups",
  "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups",
  "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",
  // 마이너 아르카나 - Swords (14장)
  "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords",
  "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords",
  "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords",
  // 마이너 아르카나 - Pentacles (14장)
  "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles",
  "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles",
  "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles"
];

/**
 * 78장 덱에서 랜덤으로 카드를 선택합니다 (중복 없음).
 * @param count 선택할 카드 개수
 * @returns 선택된 카드명 배열
 */
export function getRandomTarotCards(count: number): string[] {
  const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, TAROT_DECK.length));
}

/**
 * 78장 덱에서 랜덤으로 1장의 카드를 선택합니다.
 * @returns 선택된 카드명
 */
export function getRandomTarotCard(): string {
  const randomIndex = Math.floor(Math.random() * TAROT_DECK.length);
  return TAROT_DECK[randomIndex];
}

/**
 * 타로 질문 개수만큼 랜덤 카드를 선택합니다.
 * @param questionCount 타로 질문 개수
 * @returns { [질문순서]: 타로카드명 } 형태의 객체
 */
export function getTarotCardsForQuestions(questionCount: number): Record<number, string> {
  const cards = getRandomTarotCards(questionCount);
  const result: Record<number, string> = {};

  cards.forEach((card, index) => {
    result[index + 1] = card; // 질문 순서는 1부터 시작
  });

  return result;
}

/**
 * 타로 카드명을 Storage 파일명으로 변환합니다.
 * @param cardName 타로 카드명 (예: "King of Wands (완드 왕)")
 * @returns Storage 파일명 (예: "King of Wands.webp")
 * 
 * @example
 * getCardFileName("King of Wands (완드 왕)") // "King of Wands.webp"
 * getCardFileName("0. The Fool (바보)") // "The Fool.webp"
 */
export function getCardFileName(cardName: string): string {
  // 1. 괄호와 한글 제거 (예: "King of Wands (완드 왕)" → "King of Wands")
  let fileName = cardName.replace(/\s*\(.*?\)/g, '').trim();
  
  // 2. 메이저 아르카나의 숫자 제거 (예: "0. The Fool" → "The Fool")
  fileName = fileName.replace(/^\d+\.\s*/, '');
  
  // 3. 확장자 추가
  return `${fileName}.webp`;
}

/**
 * 타로 카드 이미지 URL을 가져옵니다.
 * @param cardName 타로 카드명
 * @param _supabaseUrl (deprecated) 무시됨 - 스테이징 Storage 공용 사용
 * @returns 타로 카드 이미지 Public URL
 *
 * @example
 * getTarotCardImageUrl("King of Wands (완드 왕)")
 * // "https://hyltbeewxaqashyivilu.supabase.co/storage/v1/object/public/assets/tarot%20cards/King%20of%20Wands.webp"
 */
export function getTarotCardImageUrl(cardName: string, _supabaseUrl?: string): string {
  const fileName = getCardFileName(cardName);

  // URL 인코딩 (공백 → %20)
  const encodedFileName = encodeURIComponent(fileName);
  const encodedFolder = encodeURIComponent('tarot cards');

  // 스테이징 Storage 공용 사용 (assets 버킷)
  return `${storageBaseUrl}/assets/${encodedFolder}/${encodedFileName}`;
}