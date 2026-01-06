// 마스터 콘텐츠 AI 생성 유틸리티
import { supabase } from './supabase';
import referenceSwanImage from 'figma:asset/4acd10075dfb9037a0f14347e33cd95c0981d052.png';

// 타로 카드 78장 전체 덱
const TAROT_DECK = [
  // 메이저 아르카나 (22장)
  'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 
  'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 
  'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 
  'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World',
  
  // 마이너 아르카나 - Wands (14장)
  'Ace of Wands', 'Two of Wands', 'Three of Wands', 'Four of Wands', 'Five of Wands', 
  'Six of Wands', 'Seven of Wands', 'Eight of Wands', 'Nine of Wands', 'Ten of Wands', 
  'Page of Wands', 'Knight of Wands', 'Queen of Wands', 'King of Wands',
  
  // 마이너 아르카나 - Cups (14장)
  'Ace of Cups', 'Two of Cups', 'Three of Cups', 'Four of Cups', 'Five of Cups', 
  'Six of Cups', 'Seven of Cups', 'Eight of Cups', 'Nine of Cups', 'Ten of Cups', 
  'Page of Cups', 'Knight of Cups', 'Queen of Cups', 'King of Cups',
  
  // 마이너 아르카나 - Swords (14장)
  'Ace of Swords', 'Two of Swords', 'Three of Swords', 'Four of Swords', 'Five of Swords', 
  'Six of Swords', 'Seven of Swords', 'Eight of Swords', 'Nine of Swords', 'Ten of Swords', 
  'Page of Swords', 'Knight of Swords', 'Queen of Swords', 'King of Swords',
  
  // 마이너 아르카나 - Pentacles (14장)
  'Ace of Pentacles', 'Two of Pentacles', 'Three of Pentacles', 'Four of Pentacles', 'Five of Pentacles', 
  'Six of Pentacles', 'Seven of Pentacles', 'Eight of Pentacles', 'Nine of Pentacles', 'Ten of Pentacles', 
  'Page of Pentacles', 'Knight of Pentacles', 'Queen of Pentacles', 'King of Pentacles'
];

// 더미 사주 데이터
const DUMMY_SAJU_DATA = {
  "성별": "여자",
  "나이": 23,
  "만나이": 22,
  "양력": [2003, 2, 18, 15, 38],
  "음력": [2003, 1, 18, 15, 38, "평달"],
  "사주": ["戊申", "壬戌", "甲寅", "癸未"],
  "오행": ["土금", "수토", "목목", "수토"],
  "십성": [
    ["편관", "편인"],
    ["비견", "편관"],
    ["식신", "식신"],
    ["겁재", "정관"]
  ],
  "발달오행": {
    "목": 41,
    "화": 0,
    "토": 40,
    "금": 15,
    "수": 4
  },
  "발달십성": {
    "식상": 41,
    "재성": 0,
    "관성": 40,
    "비겁": 4,
    "인성": 15
  },
  "12신살": [["겁살"], ["천살"], ["망신살"], ["화개살"]],
  "기타신살": [
    ["태극귀인", "관귀학관", "문곡귀인", "학당귀인", "효신살", "칠살", "현침살"],
    ["재고귀인", "괴강살", "백호대살", "낙정관살", "양착살"],
    ["천주귀인", "천복귀인", "문창귀인", "암록", "현침살", "귀문관살"],
    ["현침살", "귀문관살"]
  ],
  "격구분": "제살태과격",
  "격용신": [["인성"], ["비겁"], ["관성", "식상", "재성"]],
  "용신": {
    "용신": ["인성"],
    "희신": ["비겁"],
    "기신": ["관성", "식상", "재성"]
  },
  "용신오행": {
    "용신": ["금"],
    "희신": ["수"],
    "기신": ["토", "목", "화"]
  },
  "물상론": {
    "닉네임": "초봄의 숲을 흐르는 강",
    "성격": "고요하지만 안에서 끊임없이 생명을 키우는 이른 봄의 대지. 부드럽고 곰살맞으나 자기 원칙을 놓치지 않는 푸른 새싹. 겉으론 순하지만 내면의 힘과 생명력을 간직한 온화한 심성. 성장하려는 의지와 자기 길을 묵묵히 지키는 꾸준함. 조용히 주변을 감싸 안으며 기다릴 줄 아는 포근한 기질",
    "인간관계": "따뜻한 관심으로 조용히 곁을 지키는 봄바람 같은 존재. 함께하는 이에게 묵묵한 힘이 되어주는 든든한 지원자. 많은 말 없이도 깊은 이해와 신뢰를 쌓는 관계지향형. 낯가림이 있지만 시간이 지남에 따라 마음을 여는 편. 주변에 긍정적 영향력을 주고자 노력하는 따뜻한 동반자"
  },
  "사주귀천": {
    "용어": "천진지양(天津之洋)",
    "해설": "잔잔히 흐르는 강물에 이슬비가 내리며 세상에 생기를 주는 모습이다. 업무의 흐름을 순조롭게 조율하고 경쟁력이 강하다. 온화하고 자비로운 성품으로 주변 사람들을 보살피며, 자신의 지혜와 경험을 나누어 공동체를 이롭게 할 귀한 운명이다."
  },
  "사주강약": "신약",
  "격용신오행": [["금"], ["수"], ["토", "목", "화"]],
  "일주론": {
    "총평": "임술 일주는 책임감이 강하고 강인한 성정으로 남에게 굴복당하지 않고 끈질기고 인내심이 강하다. 자기절제와 자기통제가 강하며 침착하고 과묵하며 타인들에게 무게 있는 인상을 준다. 자기절제와 자기통제가 강하며 침착하고 과묵하며 타인들에게 무게 있는 인상을 준다. 생각, 사고의 폭과 범위가 일반인들 보다 월등하며 척보면 벌써 결론이 나있다. 예의범절 있는데 자존심 세면서 속으로 수없이 계산기를 때린다. 속내를 잘 보이지 않으며 오랜 삶을 살아온 노인처럼 생각이 많고 지혜가 있다. 정확한 예측과 판단으로 타인을 리드하는데 탁월한 수완을 발휘한다. 매사에 자신감이 차있고 다재다능하며 정리하고 마무리하는 일 잘한다. 머리가 총명하고 학문, 예술방면에 남다른 재주, 재능을 가지고 있다. 한번 목적한 바에는 수단방법 가리지 않고 달성하며 치밀한 예측을 기반으로 한다. 남녀모두 자수성가하는 사업가나 오피니언 리더의 모습이 연상된다. 절약하고 아끼고 비축하며 항상 최악을 대비하려는 구두쇠 성향이 짖다. 임술 일주 여자는 결혼과 동시에 사회활동, 커리어가 끊기는 현상이 있으며 가정에서 답답함을 느낀다. 배우자는 잔소리가 많고 부담스러우며 어렵고 힘들게 하니 배우자 눈치를 본다. 배우자와의 적당한 거리가 있으면 긍정적이며 각자 사회 활동해야 한다. 아버지와의 관계가 소원해지거나 친정과 멀리 떨어져야 하는 상황이 생긴다. ",
    "연애성향": "'식상'이 발달해 재능이 많고, 유연하며 언변이 좋다. 또 희생 정신과 봉사 정신이 강한 편으로, 이런 모습을 선호하는 사람에게 쉽게 호감을 산다. 아는 것이 많아 이야기를 나누는 것이 즐겁고, 다양한 취미가 있어 활발한 모습이 돋보인다. '관성'이 발달해 공정성과 명예, 정해진 규칙도 중시하는 사람으로, 반듯하고 정직한 인상을 준다. 즉, 규칙 안에서도 남들이 보지 못하는 변화를 가져오는 사람이라, 눈에 띄는 색다른 매력을 어필할 수 있다.",
    "추천직업": "군인, 판검사, 경찰, 심리상담, 연구 개발, 금융, 무역, 의료 행정, 의술"
  },
  "대운순서": ["乙卯", "丙辰", "丁巳", "戊午", "己未", "庚申", "辛酉", "壬戌", "癸亥", "甲子", "乙丑", "丙寅"],
  "용신설명": "운의 굴곡이 많이 나타나는 구조의 사주이다. 파란만장한 삶을 살게 되니 금전적으로 결단을 내리고 경영하는 유형의 사업은 위험하다. 따라서 돈보다는 가치 지향적 사고로 전문성이나 특수한 지식산업분야에서 연구하고 사색하고 성찰하는 일로 성과를 내는 것이 유리하다. 통제나 간섭을 받지 않는 혼자 일하는 환경이 행복하다. 조상덕이 약하고 사회활동에서도 도움을 주는 사람이 없는 운명이다. 작은 기술을 활용하여 급여가 보장되는 안전한 직장이 장수의 비결이다. 운이 상승하는 용신운이 오면 의지력이 상승하여 고된 노력으로 성공할 수 있지만, 하락하는 기신운에는 은둔형으로 변화하고 사교적인 성향이 사라지니 고독이 따르게 된다. 결혼을 해도 사회적 활동과 대인관계를 중시하므로 배우자와의 사랑을 유지하는데 변화가 많으며 배우자 덕이 약해서 결혼은 늦게 하는 게 좋다. 항상 긍정적인 사고를 유지하고 건강에 투자해야 한다. ",
  "본사주": {
    "천간합": "",
    "타간합": "",
    "진술축미": "",
    "삼합": "",
    "방합": "",
    "인사신축술미": "",
    "육합": "",
    "반합": "",
    "형": "",
    "충": "",
    "원진": "",
    "백호살": "辰, 未, 丑년에 건강이상과 재물의 손실이 있고 형제 자매 또는 가까운 동료와의 이별이 생길 수 있다. 정신과 질환을 점검해야 한다.",
    "괴강살": "사주 내에 임술괴강이 있거나 특히 일주가 임술이면 괴강의 특성이 아주 강하다. 남녀 공히 미남 미녀가 많고 총명하고 문장력이 좋으며 과단성 있는 강한 성격이며 지배욕이나 자립정신이 강하다. 쉽게 좌절하는 법이 없고 좌절한 일은 쳐다보지 않는 결단력이 있고 운이 강하거나 상승운에는 속성속발 권력이나 사업이 크게 발전하며 운이 약하고 하강운에는 속성속패 내리막길을 걷는 신상이 급격하게 변동하니 좋을 때는 큰 부자 대기총명하나 흉할때는 극빈할 수 있고 재난을 당하는 살로 변하니 권력이나 부를 가질 수 없을 때는 신앙으로 자신을 구제해야 하며 베푸는 보시공덕의 자세로 살아야 한다.",
    "양인살": "",
    "귀문관살": "인미귀문관살(寅未鬼문關煞)이 있으니 머리회전이 빠르고 직관력과 추리력이 강하여 설득하거나 언쟁상황을 유리하게 이끄는 힘있다. 사주의 구성이 좋으면 예술, 문학, 특수산업계에서 두각을 나타내기도 한다. 직관과 통찰력이 좋으니 남들이 보지 못하는 면을 보는 안목이 있어 독특한 상상력과 창의력으로 능력을 발휘한다. 그러나 운이 하락하거나 양력 2월과 7월에 이르면 스트레스에 약한 면이 강하게 작용하기도 하여 까다롭거나 예민해지기도 한다. 또한 자의식이 강해지면서 질투심이나 독선적성향이 발현되는 경우도 있다. 이런 기질을 예술적 능력으로 승화시켜 뛰어난 작품을 만드는 경우도 있다. 중년기에 이를 때 두통이 자주 나타나니 건강관리에 특히 신경 써야 한다.",
    "현침살": "",
    "천을귀인": "",
    "정록": ""
  }
};

// 랜덤 타로 카드 선택
function getRandomTarotCard(): string {
  const randomIndex = Math.floor(Math.random() * TAROT_DECK.length);
  return TAROT_DECK[randomIndex];
}

// Step 1: GPT-5-nano로 이미지 프롬프트 생성 (Supabase Edge Function 사용)
export async function generateImagePrompt(title: string, description: string | null): Promise<string> {
  try {
    console.log('🔑 Supabase Edge Function 호출: generate-image-prompt');
    
    const { data, error } = await supabase.functions.invoke('generate-image-prompt', {
      body: { title, description }
    });

    if (error) {
      console.error('Edge Function 오류:', error);
      throw new Error(`이미지 프롬프트 생성 실패: ${error.message}`);
    }

    if (!data?.success || !data.prompt) {
      throw new Error(data?.error || '이미지 프롬프트 생성 실패');
    }

    console.log('✅ 이미지 프롬프트 생성 완료');
    return data.prompt;
  } catch (error) {
    console.error('이미지 프롬프트 생성 실패:', error);
    throw error;
  }
}

// Step 2: Gemini로 이미지 생성 (Supabase Edge Function 사용)
export async function generateThumbnail(imagePrompt: string): Promise<string> {
  try {
    console.log('🖼️ Supabase Edge Function 호출: generate-thumbnail');
    
    // 레퍼런스 이미지를 base64로 변환
    let referenceImageBase64 = '';
    try {
      const imageResponse = await fetch(referenceSwanImage);
      const imageBlob = await imageResponse.blob();
      const arrayBuffer = await imageBlob.arrayBuffer();
      const base64String = btoa(
        new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      referenceImageBase64 = base64String;
      console.log('✅ 레퍼런스 이미지 로드 완료');
    } catch (error) {
      console.warn('⚠️ 레퍼런스 이미지 로드 실패, 텍스트 프롬프트만 사용:', error);
    }

    const { data, error } = await supabase.functions.invoke('generate-thumbnail', {
      body: { 
        imagePrompt,
        referenceImageBase64 
      }
    });

    if (error) {
      console.error('Edge Function 오류:', error);
      throw new Error(`썸네일 생성 실패: ${error.message}`);
    }

    if (!data?.success || !data.imageUrl) {
      throw new Error(data?.error || '썸네일 생성 실패');
    }

    console.log('✅ 썸네일 생성 완료');
    return data.imageUrl;
  } catch (error) {
    console.error('썸네일 생성 실패:', error);
    throw error;
  }
}

// 사주 미리보기 답변 생성 (GPT-5.1)
export async function generateSajuPreview(
  title: string, 
  description: string | null,
  questionerInfo?: string,
  questionText?: string
): Promise<string> {
  try {
    console.log('🔑 Supabase Edge Function 호출: generate-saju-preview');
    
    const { data, error } = await supabase.functions.invoke('generate-saju-preview', {
      body: { 
        title, 
        description,
        questionerInfo,
        questionText 
      }
    });

    if (error) {
      console.error('Edge Function 오류:', error);
      throw new Error(`사주 미리보기 생성 실패: ${error.message}`);
    }

    if (!data?.success || !data.previewText) {
      throw new Error(data?.error || '사주 미리보기 생성 실패');
    }

    console.log('✅ 사주 미리보기 생성 완료');
    return data.previewText;
  } catch (error) {
    console.error('사주 미리보기 생성 실패:', error);
    throw error;
  }
}

// 타로 미리보기 답변 생성 (GPT-4.1)
async function generateTarotPreview(questionerInfo: string | null, question: string): Promise<string> {
  try {
    console.log('🔑 Supabase Edge Function 호출: generate-tarot-preview');
    
    const { data, error } = await supabase.functions.invoke('generate-tarot-preview', {
      body: { 
        questionerInfo,
        questionText: question 
      }
    });

    if (error) {
      console.error('Edge Function 오류:', error);
      throw new Error(`타로 미리보기 생성 실패: ${error.message}`);
    }

    if (!data?.success || !data.previewText) {
      throw new Error(data?.error || '타로 미리보기 생성 실패');
    }

    console.log('✅ 타로 미리보기 생성 완료');
    return data.previewText;
  } catch (error) {
    console.error('타로 미리보기 생성 실패:', error);
    throw error;
  }
}

// 메인 함수: 콘텐츠 저장 후 백그라운드 AI 생성
export async function generateMasterContentAI(
  contentId: string,
  title: string,
  description: string | null,
  questionerInfo: string | null,
  questions: Array<{ id: string; question_order: number; question_text: string; question_type: string }>
) {
  console.log('🤖 AI 생성 시작:', contentId);
  
  try {
    // 1. 썸네일 생성
    console.log('📸 Step 1: 이미지 프롬프트 생성 중...');
    const imagePrompt = await generateImagePrompt(title, description);
    console.log('✅ 이미지 프롬프트:', imagePrompt);
    
    console.log('📸 Step 2: Gemini로 썸네일 이미지 생성 중...');
    const thumbnailUrl = await generateThumbnail(imagePrompt);
    console.log('✅ 썸네일 생성 완료');
    
    // 썸네일 URL 저장
    await supabase
      .from('master_contents')
      .update({ thumbnail_url: thumbnailUrl })
      .eq('id', contentId);
    
    // 2. 미리보기 예시 답변 생성 (모든 질문지)
    console.log('📝 미리보기 예시 답변 생성 중...');
    const previewPromises = questions.map(async (q) => {
      try {
        let previewText: string;
        
        if (q.question_type === 'saju') {
          console.log(`📝 사주 미리보기 생성: ${q.question_text}`);
          previewText = await generateSajuPreview(title, description, questionerInfo, q.question_text);
        } else {
          console.log(`🔮 타로 미리보기 생성: ${q.question_text}`);
          previewText = await generateTarotPreview(questionerInfo, q.question_text);
        }
        
        // 미리보기 텍스트 저장
        await supabase
          .from('master_content_questions')
          .update({ preview_text: previewText })
          .eq('content_id', contentId)
          .eq('question_order', q.question_order);
        
        console.log(`✅ 질문 ${q.question_order} 미리보기 저장 완료`);
        
        return { success: true, question_order: q.question_order };
      } catch (error) {
        console.error(`❌ 질문 ${q.question_order} 미리보기 생성 실패:`, error);
        return { success: false, question_order: q.question_order, error };
      }
    });
    
    const results = await Promise.all(previewPromises);
    
    // 3. 모든 작업 성공 여부 확인
    const allSuccess = results.every(r => r.success);
    
    if (allSuccess) {
      // 모두 성공 → status = 'ready'
      await supabase
        .from('master_contents')
        .update({ status: 'ready' })
        .eq('id', contentId);
      
      console.log('🎉 모든 AI 생성 완료! status = ready');
    } else {
      // 일부 실패 → status = 'failed'
      await supabase
        .from('master_contents')
        .update({ status: 'failed' })
        .eq('id', contentId);
      
      console.log('⚠️ 일부 AI 생성 실패. status = failed');
    }
    
    return { success: allSuccess, results };
    
  } catch (error) {
    console.error('❌ AI 생성 전체 실패:', error);
    
    // 전체 실패 → status = 'failed'
    await supabase
      .from('master_contents')
      .update({ status: 'failed' })
      .eq('id', contentId);
    
    return { success: false, error };
  }
}