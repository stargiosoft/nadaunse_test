/**
 * 무료 콘텐츠 서비스 클래스
 * 무료 콘텐츠 관련 비즈니스 로직과 데이터 처리를 담당합니다.
 * 
 * @class FreeContentService
 * @description
 * - 콘텐츠 데이터 조회 및 캐싱
 * - AI 생성 요청 처리
 * - 추천 콘텐츠 관리
 */

import { supabase } from './supabase';

export interface MasterContent {
  id: string;
  content_type: string;
  category_main: string;
  category_sub: string;
  title: string;
  description: string | null;
  thumbnail_url: string | null;
  price_original: number;
  price_discount: number;
  discount_rate: number;
  status: string;
}

export interface Question {
  id: string;
  question_text: string;
  question_order: number;
  preview_text?: string;
}

export interface SajuData {
  full_name: string;
  gender: string;
  birth_date: string;
  birth_time: string;
}

export interface CachedData {
  content: MasterContent;
  questions: Question[];
  recommended: MasterContent[];
}

/**
 * 무료 콘텐츠 서비스
 * Singleton 패턴으로 구현하여 전역에서 하나의 인스턴스만 사용
 */
export class FreeContentService {
  private static instance: FreeContentService;
  private readonly CACHE_EXPIRY = 5 * 60 * 1000; // 5분

  private constructor() {}

  /**
   * 서비스 인스턴스 반환 (Singleton)
   */
  public static getInstance(): FreeContentService {
    if (!FreeContentService.instance) {
      FreeContentService.instance = new FreeContentService();
    }
    return FreeContentService.instance;
  }

  /**
   * 캐시 키 생성
   * @param contentId 콘텐츠 ID
   * @returns 캐시 키 문자열
   */
  private getCacheKey(contentId: string): string {
    return `free_content_detail_${contentId}_cache`;
  }

  /**
   * 캐시에서 데이터 로드
   * @param contentId 콘텐츠 ID
   * @returns 캐시된 데이터 또는 null
   */
  public loadFromCache(contentId: string): CachedData | null {
    try {
      const cacheKey = this.getCacheKey(contentId);
      const cached = localStorage.getItem(cacheKey);
      
      if (!cached) {
        return null;
      }

      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();

      if (now - timestamp < this.CACHE_EXPIRY) {
        console.log('✅ 캐시에서 데이터 로드 (무료 콘텐츠 상세)');
        return data;
      } else {
        console.log('⏰ 캐시 만료됨 (무료 콘텐츠 상세)');
        localStorage.removeItem(cacheKey);
        return null;
      }
    } catch (error) {
      console.error('캐시 로드 실패:', error);
      return null;
    }
  }

  /**
   * 캐시에 데이터 저장
   * @param contentId 콘텐츠 ID
   * @param data 저장할 데이터
   */
  public saveToCache(contentId: string, data: CachedData): void {
    try {
      const cacheKey = this.getCacheKey(contentId);
      localStorage.setItem(cacheKey, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
      console.log('💾 캐시에 데이터 저장 (무료 콘텐츠 상세)');
    } catch (error) {
      console.error('캐시 저장 실패:', error);
    }
  }

  /**
   * 콘텐츠 정보 조회
   * @param contentId 콘텐츠 ID
   * @returns 콘텐츠 데이터
   */
  public async fetchContent(contentId: string): Promise<MasterContent> {
    try {
      const { data, error } = await supabase
        .from('master_contents')
        .select('*')
        .eq('id', contentId)
        .single();

      if (error) {
        throw new Error(`콘텐츠 조회 실패: ${error.message}`);
      }

      return data;
    } catch (error) {
      console.error('❌ 콘텐츠 조회 중 예외 발생:', error);
      throw error;
    }
  }

  /**
   * 질문지 조회
   * @param contentId 콘텐츠 ID
   * @returns 질문 목록
   */
  public async fetchQuestions(contentId: string): Promise<Question[]> {
    try {
      const { data, error } = await supabase
        .from('master_content_questions')
        .select('*')
        .eq('content_id', contentId)
        .order('question_order', { ascending: true });

      if (error) {
        throw new Error(`질문지 조회 실패: ${error.message}`);
      }

      console.log('📋 질문지 조회 결과:', data);
      console.log('📋 질문지 개수:', data?.length || 0);

      return data || [];
    } catch (error) {
      console.error('❌ 질문지 조회 중 예외 발생:', error);
      throw error;
    }
  }

  /**
   * 추천 콘텐츠 조회
   * @param contentId 현재 콘텐츠 ID (제외용)
   * @returns 추천 콘텐츠 목록
   */
  public async fetchRecommendedContents(contentId: string): Promise<MasterContent[]> {
    try {
      // 1. 현재 콘텐츠의 카테고리 조회
      const { data: currentContent, error: contentError } = await supabase
        .from('master_contents')
        .select('category_main')
        .eq('id', contentId)
        .single();

      if (contentError) {
        console.error('❌ 현재 콘텐츠 조회 실패:', contentError);
        return [];
      }

      if (!currentContent || !currentContent.category_main) {
        console.error('❌ 현재 콘텐츠에 카테고리가 없습니다');
        return [];
      }

      const currentCategory = currentContent.category_main;
      console.log('📌 현재 콘텐츠 카테고리:', currentCategory);

      // 2. 동일한 카테고리의 콘텐츠 조회 (무료/유료 전체, 인기도 순)
      const { data, error } = await supabase
        .from('master_contents')
        .select('*')
        .eq('category_main', currentCategory)
        .eq('status', 'deployed') // ⭐ deployed 상태만
        .neq('id', contentId)
        .order('weekly_clicks', { ascending: false });

      if (error) {
        console.error('❌ 추천 콘텐츠 조회 실패:', error);
        return [];
      }

      console.log('✅ 추천 콘텐츠 조회 성공:', data?.length, '개');
      return data || [];
    } catch (error) {
      console.error('❌ 추천 콘텐츠 조회 중 예외 발생:', error);
      // 네트워크 에러 등 발생 시 빈 배열 반환 (앱이 멈추지 않도록)
      return [];
    }
  }

  /**
   * 사주 정보 조회
   * @param sajuRecordId 사주 레코드 ID
   * @returns 사주 데이터
   */
  public async fetchSajuData(sajuRecordId: string): Promise<SajuData> {
    const { data, error } = await supabase
      .from('saju_records')
      .select('full_name, gender, birth_date, birth_time')
      .eq('id', sajuRecordId)
      .single();

    if (error || !data) {
      throw new Error('사주 정보를 찾을 수 없습니다.');
    }

    return data;
  }

  /**
   * AI 미리보기 생성 (무료 콘텐츠)
   * @param content 콘텐츠 정보
   * @param sajuData 사주 정보
   * @param question 질문 정보
   * @returns AI 생성 답변
   */
  public async generatePreview(
    content: MasterContent,
    sajuData: SajuData,
    question: Question
  ): Promise<string> {
    const { data, error } = await supabase.functions.invoke('generate-free-preview', {
      body: {
        title: content.title,
        description: content.description,
        questionerInfo: `이름: ${sajuData.full_name}, 성별: ${sajuData.gender}, 생년월일: ${sajuData.birth_date}, 출생시간: ${sajuData.birth_time}`,
        questionText: question.question_text,
        questionId: question.id
      }
    });

    if (error) {
      console.error('❌ Edge Function 호출 실패:', error);
      throw error;
    }

    if (!data?.success || !data?.previewText) {
      console.error('❌ AI 생성 실패:', data);
      throw new Error(data?.error || 'AI 생성에 실패했습니다.');
    }

    return data.previewText;
  }

  /**
   * 전체 콘텐츠 데이터 로드 (캐시 우선)
   * @param contentId 콘텐츠 ID
   * @returns 콘텐츠, 질문지, 추천 콘텐츠
   */
  public async loadContentData(contentId: string): Promise<CachedData> {
    // 1. 캐시 확인
    const cachedData = this.loadFromCache(contentId);
    if (cachedData) {
      // 백그라운드에서 업데이트 (비동기, await 없이)
      this.updateDataInBackground(contentId);
      return cachedData;
    }

    // 2. DB에서 조회
    return await this.fetchDataFromDB(contentId);
  }

  /**
   * DB에서 데이터 조회 (캐시 저장 포함)
   * @param contentId 콘텐츠 ID
   * @returns 콘텐츠, 질문지, 추천 콘텐츠
   */
  private async fetchDataFromDB(contentId: string): Promise<CachedData> {
    const [content, questions, recommended] = await Promise.all([
      this.fetchContent(contentId),
      this.fetchQuestions(contentId),
      this.fetchRecommendedContents(contentId)
    ]);

    const cachedData: CachedData = {
      content,
      questions,
      recommended
    };

    // 캐시 저장
    this.saveToCache(contentId, cachedData);

    return cachedData;
  }

  /**
   * 백그라운드에서 데이터 업데이트
   * @param contentId 콘텐츠 ID
   */
  private async updateDataInBackground(contentId: string): Promise<void> {
    try {
      const freshData = await this.fetchDataFromDB(contentId);
      console.log('🔄 백그라운드 업데이트 완료');
    } catch (error) {
      console.error('백그라운드 업데이트 실패:', error);
    }
  }

  /**
   * AI 생성 플래그 확인 및 제거
   * @param contentId 현재 콘텐츠 ID
   * @returns 플래그 정보 또는 null
   */
  public checkGenerationFlag(contentId: string): { contentId: string; sajuRecordId: string } | null {
    try {
      const generateFlag = localStorage.getItem('free_content_generate');
      if (!generateFlag) {
        return null;
      }

      const flagData = JSON.parse(generateFlag);
      
      if (flagData.contentId === contentId && flagData.sajuRecordId) {
        console.log('🆓 무료 콘텐츠 AI 생성 플래그 감지');
        localStorage.removeItem('free_content_generate');
        return flagData;
      }

      return null;
    } catch (error) {
      console.error('무료 콘텐츠 생성 플래그 파싱 실패:', error);
      localStorage.removeItem('free_content_generate');
      return null;
    }
  }

  /**
   * 모든 질문에 대해 AI 답변 생성
   * @param content 콘텐츠 정보
   * @param sajuRecordId 사주 레코드 ID
   * @param questions 질문 목록
   * @returns AI 생성된 질문 목록
   */
  public async generateAllAnswers(
    content: MasterContent,
    sajuRecordId: string,
    questions: Question[]
  ): Promise<Question[]> {
    if (!content || questions.length === 0) {
      throw new Error('질문지가 없습니다.');
    }

    // 사주 정보 조회
    const sajuData = await this.fetchSajuData(sajuRecordId);

    // 모든 질문에 대해 AI 생성
    const results = await Promise.all(
      questions.map(async (question) => {
        const previewText = await this.generatePreview(content, sajuData, question);
        return {
          ...question,
          preview_text: previewText
        };
      })
    );

    console.log('✅ 무료 콘텐츠 AI 생성 완료:', results);
    return results;
  }
}

// 싱글톤 인스턴스 export
export const freeContentService = FreeContentService.getInstance();