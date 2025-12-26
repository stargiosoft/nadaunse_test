// Supabase Edge Function: 이미지 프롬프트 생성 (GPT-5-nano)
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// 타임아웃 헬퍼 함수
const fetchWithTimeout = (url: string, options: RequestInit, timeout = 30000): Promise<Response> => {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error(`요청 타임아웃 (${timeout}ms)`)), timeout)
    )
  ])
}

serve(async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { title, description, questionerInfo } = await req.json()

    console.log('🚀 이미지 프롬프트 생성 요청 수신')
    console.log('   제목:', title)
    console.log('   설명:', description?.substring(0, 50) + '...')

    if (!title) {
      return new Response(
        JSON.stringify({ success: false, error: '제목이 필요합니다.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const apiKey = Deno.env.get('OPENAI_API_KEY')
    if (!apiKey) {
      console.error('❌ OpenAI API 키가 설정되지 않았습니다.')
      return new Response(
        JSON.stringify({ success: false, error: 'OpenAI API 키가 설정되지 않았습니다.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('✅ OpenAI API 키 확인 완료')

    // 프롬프트 구성
    const prompt = `다음 운세 콘텐츠의 썸네일 이미지를 위한 장면 묘사를 50자 이내로 작성하세요.

제목: ${title}
설명: ${description || '없음'}
질문자 정보: ${questionerInfo || '없음'}

요구사항:
- 50자 이내
- 구체적인 장면/배경/분위기 묘사
- 아기 백조 캐릭터가 등장하는 장면
- 영어 금지, 한글로만 작성

예시: "밤하늘 아래 타로 카드를 보는 아기 백조"`

    console.log('🔑 OpenAI API 호출 시작 (GPT-5-nano)...')
    console.log('   API URL: https://api.openai.com/v1/responses')
    console.log('   모델: gpt-5-nano')

    // OpenAI Responses API 호출 (GPT-5-nano) - 타임아웃 30초
    const response = await fetchWithTimeout('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-5-nano',
        input: prompt
      })
    }, 30000)

    console.log('📡 OpenAI API 응답 상태:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ OpenAI API 오류:', response.status, errorText)
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `OpenAI API 오류: ${response.status} - ${errorText}` 
        }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const data = await response.json()
    console.log('📦 OpenAI 응답 구조:', JSON.stringify(data, null, 2))
    
    // GPT-5-nano 응답 구조: data.output[0].content[0].text
    let generatedPrompt = ''
    
    if (data.output && data.output[0]?.content?.[0]?.text) {
      // GPT-5-nano 전용 응답 형식
      generatedPrompt = data.output[0].content[0].text.trim()
    } else if (data.output_text) {
      // GPT-5.1 형식 (fallback)
      generatedPrompt = data.output_text.trim()
    } else if (data.choices && data.choices[0]?.message?.content) {
      // 일반 Chat Completions API 응답 형식 (fallback)
      generatedPrompt = data.choices[0].message.content.trim()
    } else {
      console.error('❌ 알 수 없는 응답 구조:', data)
      throw new Error('예상하지 못한 API 응답 형식입니다.')
    }

    if (!generatedPrompt) {
      throw new Error('생성된 프롬프트가 비어있습니다.')
    }

    console.log('✅ 이미지 프롬프트 생성 완료 (GPT-5-nano):', generatedPrompt)

    return new Response(
      JSON.stringify({ success: true, imagePrompt: generatedPrompt }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('❌ 함수 실행 오류:', error)
    console.error('   에러 상세:', error instanceof Error ? error.stack : error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : '알 수 없는 오류' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})