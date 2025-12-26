import img from "figma:asset/bada0ef4d1435fa0ce6093a3b4ba6705c61d336f.png";
import img1 from "figma:asset/60488b980e0454d1287dc1dccdb92e92d6a121bf.png";
import img2 from "figma:asset/31ed117381a404a1d1dbfe7a61652b15d7f28433.png";
import img3 from "figma:asset/6012c1d69cfa986c13102e487d4744a1f018f550.png";

// Product data types
export type ProductType = 'free' | 'paid';
export type Category = '전체' | '개인운세' | '연애' | '이별' | '재물' | '직업';

export interface Product {
  id: number;
  title: string;
  description?: string;
  type: ProductType;
  category: Category;
  image: string;
  isFeatured?: boolean;
  fullDescription: string;
  price: number;
  discountPrice: number;
  discountPercent: number;
}

// Generate mock product data
const generateProducts = (): Product[] => {
  const products: Product[] = [
    {
      id: 1,
      title: '내 연인은 어디에 있을까?',
      type: 'paid',
      category: '연애',
      image: img,
      isFeatured: true,
      fullDescription: '달콤했던 시작과 달리, 요즘은 마음이 흔들리지 않나요? 사소한 말에도 불안해지고, 혹시 놓쳐버릴까 두려운 지금. 겉으로는 보이지 않는 사랑의 방향을 막연한 해석이 아닌, 그 사람의 본질부터 관계의 결말까지 예측하는 소름돋는 정확성을 경험하세요.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 2,
      title: '내 곁의 사람, 다른 이에게 끌리고 있을까?',
      type: 'paid',
      category: '연애',
      image: img1,
      fullDescription: '불안한 마음, 그 감정은 단순한 기우일까요? 아니면 예감일까요? 타로와 사주로 당신의 연인이 지금 어떤 마음을 품고 있는지, 그리고 앞으로 어떤 변화가 올지 명확하게 알려드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 3,
      title: '혹시 내가 놓치고 있는 사랑의 기회가 있진 않을까, 운명처럼 다가올 인연은 이미 내 곁에 와 있을지도 모릅니다.',
      type: 'free',
      category: '연애',
      image: img2,
      fullDescription: '진정한 사랑을 찾고 있다면, 이미 당신 곁에 있는 인연을 놓치고 있을지도 모릅니다. 운명적인 만남의 신호를 포착하고, 놓치지 마세요.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 4,
      title: '바람의 징조, 이미 시작 됐을까?',
      type: 'free',
      category: '연애',
      image: img3,
      fullDescription: '작은 변화들이 느껴지시나요? 혹시 바람피울 징조는 아닐까요? 타로가 당신의 의심을 명확하게 해소해드립니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 5,
      title: '2025년 나의 재물운은?',
      type: 'paid',
      category: '재물',
      image: img1,
      fullDescription: '새해를 맞아 당신의 재물운이 어떻게 흘러갈지 궁금하신가요? 2025년 한 해 동안의 재물 흐름과 주의해야 할 시기를 상세히 알려드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 6,
      title: '올해 내가 받을 횡재는?',
      type: 'free',
      category: '재물',
      image: img2,
      fullDescription: '예상치 못한 재물운이 찾아올 시기를 알려드립니다. 준비된 자에게만 찾아오는 기회를 놓치지 마세요.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 7,
      title: '지금 이직해도 괜찮을까?',
      type: 'paid',
      category: '직업',
      image: img3,
      fullDescription: '이직을 고민 중이신가요? 지금이 적기인지, 더 기다려야 하는지 사주와 타로로 명확하게 답해드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 8,
      title: '나에게 맞는 직업은 무엇일까?',
      type: 'free',
      category: '직업',
      image: img1,
      fullDescription: '당신의 타고난 재능과 기질에 맞는 직업을 알려드립니다. 적성에 맞는 일을 찾아 행복한 삶을 살아가세요.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 9,
      title: '올해 나의 전반적인 운세',
      type: 'paid',
      category: '개인운세',
      image: img2,
      fullDescription: '한 해 동안의 전반적인 운세를 연애, 재물, 건강, 직업 등 다양한 분야에서 상세하게 분석해드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 10,
      title: '오늘의 운세 확인하기',
      type: 'free',
      category: '개인운세',
      image: img3,
      fullDescription: '오늘 하루를 어떻게 보내면 좋을지, 주의해야 할 점은 무엇인지 타로로 알려드립니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 11,
      title: '이별 후 재회 가능성은?',
      type: 'paid',
      category: '이별',
      image: img1,
      fullDescription: '헤어진 연인과의 재회, 가능할까요? 두 사람의 인연이 다시 이어질 수 있는지 타로와 사주로 정확하게 예측해드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 12,
      title: '헤어진 연인, 아직 나를 생각할까?',
      type: 'free',
      category: '이별',
      image: img2,
      fullDescription: '이별 후에도 마음이 쓰이는 그 사람, 혹시 아직도 당신을 생각하고 있을까요? 타로가 상대의 진심을 전해드립니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 13,
      title: '내 사주에 숨겨진 비밀',
      type: 'paid',
      category: '개인운세',
      image: img3,
      fullDescription: '당신의 사주에는 어떤 비밀이 숨겨져 있을까요? 타고난 운명과 앞으로의 길을 상세히 풀이해드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 14,
      title: '나의 타로 운세 보기',
      type: 'free',
      category: '개인운세',
      image: img1,
      fullDescription: '타로 카드가 전하는 당신의 운세를 확인해보세요. 지금 당장 필요한 조언을 받아보실 수 있습니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 15,
      title: '소울메이트는 언제 만날까?',
      type: 'paid',
      category: '연애',
      image: img2,
      fullDescription: '운명의 상대, 소울메이트를 언제 만날 수 있을까요? 만남의 시기와 장소, 그리고 인연을 놓치지 않는 방법을 알려드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 16,
      title: '내 이상형은 어떤 사람?',
      type: 'free',
      category: '연애',
      image: img3,
      fullDescription: '당신에게 잘 맞는 이상형은 어떤 사람일까요? 타고난 기질을 분석하여 최적의 파트너 유형을 알려드립니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 17,
      title: '승진 운세 확인하기',
      type: 'paid',
      category: '직업',
      image: img1,
      fullDescription: '승진의 기회가 언제 찾아올까요? 직장에서의 성공 시기와 준비해야 할 것들을 알려드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 18,
      title: '직장 내 인간관계 운세',
      type: 'free',
      category: '직업',
      image: img2,
      fullDescription: '직장 내 인간관계로 고민이신가요? 어려운 관계를 개선하고 좋은 인연을 만드는 방법을 알려드립니다.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
    {
      id: 19,
      title: '로또 당첨 가능성은?',
      type: 'paid',
      category: '재물',
      image: img3,
      fullDescription: '로또 당첨의 꿈을 꾸고 계신가요? 당신의 재물운과 행운의 시기를 분석해드립니다.',
      price: 25800,
      discountPrice: 12900,
      discountPercent: 50,
    },
    {
      id: 20,
      title: '재물운 상승 시기는?',
      type: 'free',
      category: '재물',
      image: img1,
      fullDescription: '재물운이 상승하는 시기를 알고 계신가요? 준비된 자에게 찾아오는 기회를 놓치지 마세요.',
      price: 0,
      discountPrice: 0,
      discountPercent: 0,
    },
  ];
  
  // Generate more products for infinite scroll
  const additionalProducts: Product[] = [];
  for (let i = 21; i <= 100; i++) {
    const categories: Category[] = ['개인운세', '연애', '이별', '재물', '직업'];
    const types: ProductType[] = ['free', 'paid'];
    const images = [img1, img2, img3];
    const isPaid = types[i % 2] === 'paid';
    
    additionalProducts.push({
      id: i,
      title: `운세 상품 ${i}번`,
      type: types[i % 2],
      category: categories[i % categories.length],
      image: images[i % images.length],
      fullDescription: `운세 상품 ${i}번에 대한 상세한 설명입니다. 타로와 사주를 통해 당신의 운명을 정확하게 예측해드립니다.`,
      price: isPaid ? 25800 : 0,
      discountPrice: isPaid ? 12900 : 0,
      discountPercent: isPaid ? 50 : 0,
    });
  }
  
  return [...products, ...additionalProducts];
};

export const allProducts = generateProducts();
