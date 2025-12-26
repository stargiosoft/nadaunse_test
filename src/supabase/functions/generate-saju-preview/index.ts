// Supabase Edge Function: 사주 미리보기 생성 (GPT-5.1)
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { title, description, questionerInfo, questionText, questionId } = await req.json()

    if (!title) {
      return new Response(
        JSON.stringify({ success: false, error: '제목이 필요합니다.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const apiKey = Deno.env.get('OPENAI_API_KEY')
    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, error: 'OpenAI API 키가 설정되지 않았습니다.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // 프롬프트 구성
    const prompt = `당신은 사주 전문가입니다. 다음 정보를 바탕으로 간결하고 매력적인 사주 미리보기(50-80자)를 작성하세요.

제목: ${title}
설명: ${description || '없음'}
질문자 정보: ${questionerInfo || '없음'}
질문: ${questionText}

요구사항:
- 50-80자 이내
- 구체적이고 흥미로운 내용
- 긍정적인 어조
- 이모지 사용 금지`

    console.log('🔑 OpenAI API 호출 시작 (GPT-5.1)...')

    // OpenAI Responses API 호출 (GPT-5.1)
    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-5.1',
        input: prompt,
        reasoning: { effort: 'low' },
        text: { verbosity: 'low' }
      })
    })

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
    
    // GPT-5.1 응답 구조: data.output_text (직접 반환)
    let previewText = ''
    
    if (data.output_text) {
      // GPT-5.1 전용 응답 형식
      previewText = data.output_text.trim()
    } else if (data.output && data.output[0]?.content?.[0]?.text) {
      // 다른 모델들 (gpt-5-nano, gpt-4.1 등)
      previewText = data.output[0].content[0].text.trim()
    } else if (data.choices && data.choices[0]?.message?.content) {
      // 일반 Chat Completions API 응답 형식 (fallback)
      previewText = data.choices[0].message.content.trim()
    } else {
      console.error('❌ 알 수 없는 응답 구조:', data)
      throw new Error('예상하지 못한 API 응답 형식입니다.')
    }

    if (!previewText) {
      throw new Error('생성된 텍스트가 비어있습니다.')
    }

    console.log('✅ 사주 미리보기 생성 완료 (GPT-5.1):', previewText.substring(0, 100) + '...')

    // questionId가 있으면 DB 업데이트
    if (questionId) {
      try {
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        const { error: updateError } = await supabase
          .from('master_content_questions')
          .update({ 
            preview_text: previewText,
            updated_at: new Date().toISOString()  // ✅ updated_at 추가
          })
          .eq('id', questionId)

        if (updateError) {
          console.error('⚠️ DB 업데이트 실패:', updateError)
        } else {
          console.log('✅ DB 업데이트 완료:', questionId)
        }
      } catch (dbError) {
        console.error('⚠️ DB 업데이트 오류:', dbError)
      }
    }

    return new Response(
      JSON.stringify({ success: true, previewText }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('함수 실행 오류:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : '알 수 없는 오류' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
