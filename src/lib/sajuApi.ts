/**
 * Stargio 사주 API 호출 유틸리티
 *
 * Edge Function에서 사주 API가 빈 데이터를 반환하는 문제를 해결하기 위해
 * 프론트엔드(브라우저)에서 직접 호출합니다.
 */

export interface SajuApiData {
  [key: string]: unknown
}

/**
 * Stargio 사주 API를 호출하여 사주 데이터를 가져옵니다.
 *
 * @param birthDate - 생년월일 ("1992-07-15" 또는 ISO 형식)
 * @param birthTime - 생시 ("21:30" 형식)
 * @param gender - 성별 ("male" | "female")
 * @returns 사주 데이터 객체 또는 null (실패 시)
 */
export async function fetchSajuData(
  birthDate: string,
  birthTime: string,
  gender: 'male' | 'female'
): Promise<SajuApiData | null> {
  try {
    // 날짜 포맷 변환: "1992-07-15T00:00:00.000Z" → "19920715"
    const datePart = birthDate.includes('T') ? birthDate.split('T')[0] : birthDate.split(' ')[0]
    const dateOnly = datePart.replace(/-/g, '')

    // 시간 포맷 변환: "21:30" → "2130"
    const timeOnly = birthTime.replace(/:/g, '')

    // 최종 birthday 파라미터: "199207152130"
    const birthday = dateOnly + timeOnly

    const url = `https://service.stargio.co.kr:8400/StargioSaju?birthday=${birthday}&lunar=True&gender=${gender}`

    console.log('🔮 [프론트엔드] 사주 API 호출:', url)

    const response = await fetch(url)

    if (!response.ok) {
      console.error('❌ [프론트엔드] 사주 API HTTP 오류:', response.status)
      return null
    }

    const data = await response.json()

    // 유효성 검증
    if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
      console.error('❌ [프론트엔드] 사주 API가 빈 데이터 반환')
      return null
    }

    console.log('✅ [프론트엔드] 사주 API 호출 성공 (키 개수:', Object.keys(data).length, ')')
    return data
  } catch (error) {
    console.error('❌ [프론트엔드] 사주 API 호출 실패:', error)
    return null
  }
}
