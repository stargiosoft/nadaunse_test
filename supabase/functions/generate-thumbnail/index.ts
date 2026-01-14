// Supabase Edge Function: 썸네일 이미지 생성 (Gemini 2.5 Flash Image + WebP 변환)
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'
import {
  ImageMagick,
  initializeImageMagick,
  MagickFormat,
} from 'npm:@imagemagick/magick-wasm@0.0.30'

// ImageMagick WASM 초기화 (서버 시작 시 1회)
const wasmBytes = await Deno.readFile(
  new URL(
    'magick.wasm',
    import.meta.resolve('npm:@imagemagick/magick-wasm@0.0.30'),
  ),
)
await initializeImageMagick(wasmBytes)
console.log('✅ ImageMagick WASM 초기화 완료')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// 레퍼런스 이미지 URL (Supabase Storage)
const REFERENCE_SWAN_IMAGE_URL = Deno.env.get('REFERENCE_SWAN_IMAGE_URL') || 
  'https://hyltbeewxaqashyivilu.supabase.co/storage/v1/object/public/assets/ref.png.png'

serve(async (req) => {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { imagePrompt, referenceImageBase64, contentId } = await req.json()

    if (!imagePrompt) {
      return new Response(
        JSON.stringify({ success: false, error: '이미지 프롬프트가 필요합니다.' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const apiKey = Deno.env.get('GOOGLE_API_KEY')
    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, error: 'Google API 키가 설정되지 않았습니다.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // 풀 프롬프트 구성
    const fullPrompt = `SCENE & COMPOSITION:
${imagePrompt}

---
==============================
[SCENE SPACE DECLARATION — FIXED]
==============================
This scene MUST take place within a fully expanded environment.
The space is wide and continuous, extending beyond Osun-i in all directions.
The background must fill the entire image edge to edge,
with the environment clearly visible across the whole frame.
This is NOT a close-up or isolated corner.
The setting must feel like a complete place, not a partial view.
==============================
GLOBAL SCENE RULES (ABSOLUTE)
==============================
- The image must be a single, fully self-contained scene.
- The scene shows ONLY the present moment as a frozen snapshot.
- No before/after, no timeline, no process depiction.
- The meaning of the scene must be readable within 1 second as a thumbnail.
- The background must explain the topic itself, not just create mood.
- The image must be understandable without any text, symbols, or captions.
==============================
FULL-BLEED BACKGROUND LOCK (ABSOLUTE)
==============================
- The background MUST completely fill the entire image edge to edge.
- NO white background, margin, empty canvas, or exposed frame is allowed.
- NO visible border, outline, panel, card, or poster-style framing.
- The background must physically touch all four edges of the image.
- Any visible blank or white space is a FAILURE.
This is a full-bleed illustration.
The scene itself IS the canvas.
==============================
EXECUTION CONTEXT (IMPORTANT)
==============================
This image is generated via Gemini API.
Model: 나노바나나1_api
The image is rendered as a raw image asset
inside a custom React application.
It is NOT:
- an AI Studio preview
- a framed illustration
- a branded or platform UI output
DO NOT include:
- any logo
- any watermark
- any UI overlay
- any platform-identifying element
- any aspect-ratio labels or corner markings
==============================
CHARACTER BASE LOCK (ABSOLUTE)
==============================
Osun-i is a fixed mascot character.
Use the base appearance as an absolute reference.
Osun-i must ALWAYS have:
- A chubby, bell-shaped white body
- Pure white body color
- Thick, consistent dark outline
- EXACTLY two small black dot eyes
 (size, spacing, and position must NOT change)
- One flat horizontal oval yellow beak
 (shape must NOT change)
- One thin stem with exactly two rounded light-green leaves on the head
- Two simple oval yellow feet (no toes)
NO reinterpretation.
NO deformation.
NO simplification.
==============================
FACE & EYEBROW HARD LOCK (CRITICAL)
==============================
Osun-i’s facial structure is COMPLETELY LOCKED.
ABSOLUTE RULES:
- Osun-i has EXACTLY:
 • 2 eyes (black dots)
 • 0 eyelids
 • 0 eyelashes
 • 0 extra facial marks
 • 0 additional lines around the eyes
- NO new facial elements may be added under any circumstance.
Eyebrow rules (VERY IMPORTANT):
- Osun-i has NO independent eyebrows.
- Eyebrows must NOT be drawn as separate shapes, lines, or strokes.
- Eyebrows must NOT be duplicated or layered.
- Eyebrows must NOT float, detach, or overlap the eyes.
If eyebrows appear as visible lines, shapes, or multiple elements,
the result is INVALID.
==============================
EMOTION & EXPRESSION ALIGNMENT (CRITICAL)
==============================
Facial exaggeration is NOT allowed.
Emotion must be expressed primarily through:
1. Action (hesitating, pausing, observing, stopping mid-motion)
2. Posture (leaning, distance, body direction, stillness)
3. VERY subtle facial tension only (no new shapes)
IMPORTANT:
- The facial expression must ALWAYS match the [SAJU PRODUCT TOPIC].
- Do NOT express anger, aggression, or extreme emotion
 unless the topic explicitly implies it.
- Curiosity, uncertainty, concern, expectation, contemplation
 must be expressed as restrained, quiet states.
Examples:
- Curiosity → paused action, slight forward lean
- Uncertainty → hesitation, uneven weight, stopped motion
- Expectation → stillness, attention focused forward
- Concern → reduced movement, cautious posture
If the topic is about “wondering,” “checking,” or “considering,”
angry or intense expressions are STRICTLY FORBIDDEN.
A mismatch between topic and expression is a FAILURE.
==============================
AUTOMATIC SCENE GENERATION (CORE)
==============================
Based ONLY on the [SAJU PRODUCT TOPIC],
the AI must automatically and creatively determine:
- What Osun-i is doing right now (one clear action or paused action)
- Osun-i’s posture and emotional state (subtle, topic-aligned)
- A concrete, specific location that visually explains the topic
- Meaningful objects that make the topic obvious at a glance
Rules:
- Avoid generic rooms unless the topic clearly requires it.
- Avoid repeating similar locations or compositions.
- The background and objects must actively carry the meaning.
==============================
OTHER CHARACTERS RULE (ABSOLUTE)
==============================
If the scene requires other characters:
- They MUST be Osun-i–style characters ONLY
- Same silhouette, proportions, and design rules
- NO human silhouettes
- NO human-shaped figures or shadows
- NO abstract person-like forms
Any human presence must be represented
ONLY as another Osun-i-shaped character.
==============================
STYLE & QUALITY
==============================
- Flat 2D illustration
- Solid colors only
- No gradients
- No glow or lighting effects
- Minimal shading
- Clear visual storytelling
- Instantly readable at thumbnail size
==============================
OUTPUT CANVAS RULE (STRICT)
==============================
- The illustration must appear as a full-bleed scene.
- No borders, frames, margins, or rounded corners.
- No text inside the image.
- No logo or watermark.`

    console.log('🔑 Gemini API 호출 시작 (gemini-2.5-flash-image)...')

    // Gemini 2.5 Flash Image 요청 본문 구성
    const requestBody: any = {
      contents: [{
        parts: []
      }]
    }

    // 레퍼런스 이미지 처리
    let referenceImageData = referenceImageBase64
    
    // 클라이언트에서 제공하지 않았으면 Supabase Storage에서 가져오기
    if (!referenceImageData && REFERENCE_SWAN_IMAGE_URL) {
      try {
        console.log('📥 Supabase Storage에서 레퍼런스 이미지 다운로드:', REFERENCE_SWAN_IMAGE_URL)
        const imageResponse = await fetch(REFERENCE_SWAN_IMAGE_URL)
        if (imageResponse.ok) {
          const imageArrayBuffer = await imageResponse.arrayBuffer()
          const imageBytes = new Uint8Array(imageArrayBuffer)
          
          // Base64 인코딩
          const base64String = btoa(
            imageBytes.reduce((data, byte) => data + String.fromCharCode(byte), '')
          )
          referenceImageData = base64String
          console.log('✅ 레퍼런스 이미지 다운로드 완료')
        } else {
          console.warn('⚠️ 레퍼런스 이미지 다운로드 실패:', imageResponse.status)
        }
      } catch (error) {
        console.warn('⚠️ 레퍼런스 이미지 처리 오류:', error)
      }
    }

    // 레퍼런스 이미지가 있으면 추가
    if (referenceImageData) {
      requestBody.contents[0].parts.push({
        inlineData: {
          mimeType: 'image/png',
          data: referenceImageData
        }
      })
      console.log('🖼️ 레퍼런스 이미지 포함')
    } else {
      console.warn('⚠️ 레퍼런스 이미지 없이 진행')
    }

    // 텍스트 프롬프트 추가
    requestBody.contents[0].parts.push({
      text: fullPrompt
    })

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ Gemini API 오류:', response.status, errorText)
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Gemini API 오류: ${response.status} - ${errorText}` 
        }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const data = await response.json()
    console.log('📦 Gemini 응답 구조:', JSON.stringify(data, null, 2))

    // Gemini API 응답에서 이미지 데이터 추출
    // Python: part.inline_data.data → JavaScript: part.inlineData.data (camelCase)
    if (data.candidates && data.candidates[0]?.content?.parts) {
      for (const part of data.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.mimeType && part.inlineData.mimeType.startsWith('image')) {
          console.log('✅ 썸네일 생성 완료 (Gemini 2.5)')
          
          // 🚀 Base64를 Supabase Storage에 업로드
          const generatedImageData = part.inlineData.data
          
          try {
            const supabaseUrl = Deno.env.get('SUPABASE_URL')
            const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
            
            if (!supabaseUrl || !supabaseServiceKey) {
              throw new Error('SUPABASE_URL 또는 SUPABASE_SERVICE_ROLE_KEY가 설정되지 않았습니다.')
            }
            
            const supabase = createClient(supabaseUrl, supabaseServiceKey)

            // Base64를 Uint8Array로 변환
            const pngBytes = Uint8Array.from(
              atob(generatedImageData),
              c => c.charCodeAt(0)
            )

            // 🔄 PNG → WebP 변환
            let finalBytes: Uint8Array
            let contentType = 'image/webp'
            let fileExtension = 'webp'

            try {
              console.log('🔄 PNG → WebP 변환 시작...')

              // ImageMagick으로 PNG → WebP 변환
              finalBytes = ImageMagick.read(pngBytes, (img): Uint8Array => {
                img.quality = 85
                return img.write(MagickFormat.WebP, (data) => new Uint8Array(data))
              })

              const compressionRatio = ((1 - finalBytes.length / pngBytes.length) * 100).toFixed(1)
              console.log(`✅ WebP 변환 완료: ${pngBytes.length} → ${finalBytes.length} bytes (${compressionRatio}% 감소)`)

            } catch (conversionError) {
              // WebP 변환 실패 시 PNG 폴백
              console.warn('⚠️ WebP 변환 실패, PNG로 폴백:', conversionError)
              finalBytes = pngBytes
              contentType = 'image/png'
              fileExtension = 'png'
            }

            // 파일명 생성 (contentId 기반으로 고정 → 재생성 시 같은 파일에 덮어쓰기)
            const fileName = `thumbnails/${contentId || crypto.randomUUID()}.${fileExtension}`

            console.log('📤 Storage 업로드 시작:', fileName)

            // Storage에 업로드
            const { data: uploadData, error: uploadError } = await supabase.storage
              .from('assets')
              .upload(fileName, finalBytes, {
                contentType,
                upsert: true // 같은 파일명이면 덮어쓰기
              })
            
            if (uploadError) {
              console.error('❌ Storage 업로드 실패:', uploadError)
              throw new Error(`Storage 업로드 실패: ${uploadError.message}`)
            }
            
            // Public URL 생성
            const { data: { publicUrl } } = supabase.storage
              .from('assets')
              .getPublicUrl(fileName)
            
            // ✅ 타임스탬프 제거: 브라우저 HTTP 캐시 활용
            // 재생성 시 파일을 덮어쓰기(upsert)하므로 URL은 동일하게 유지
            // 필요 시 클라이언트에서 cache-busting 처리
            console.log('✅ Storage 업로드 완료:', publicUrl)
            
            // contentId가 있으면 DB 업데이트
            if (contentId) {
              const { error: updateError } = await supabase
                .from('master_contents')
                .update({ 
                  thumbnail_url: publicUrl  // 타임스탬프 없이 저장
                })
                .eq('id', contentId)

              if (updateError) {
                console.error('⚠️ DB 업데이트 실패:', updateError)
              } else {
                console.log('✅ DB 업데이트 완료 (thumbnail_url):', contentId)
              }
            }
            
            return new Response(
              JSON.stringify({ success: true, imageUrl: publicUrl }),
              { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
            
          } catch (storageError) {
            console.error('❌ Storage 처리 오류:', storageError)
            
            // Storage 업로드 실패 시 폴백: base64 data URL 반환
            const imageUrl = `data:${part.inlineData.mimeType};base64,${generatedImageData}`
            console.warn('⚠️ Storage 실패, base64 폴백 사용')
            
            // contentId가 있으면 DB 업데이트 (폴백)
            if (contentId) {
              try {
                const supabaseUrl = Deno.env.get('SUPABASE_URL')!
                const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
                const supabase = createClient(supabaseUrl, supabaseServiceKey)

                const { error: updateError } = await supabase
                  .from('master_contents')
                  .update({ 
                    thumbnail_url: imageUrl
                  })
                  .eq('id', contentId)

                if (updateError) {
                  console.error('⚠️ DB 업데이트 실패:', updateError)
                } else {
                  console.log('✅ DB 업데이트 완료 (base64 폴백):', contentId)
                }
              } catch (dbError) {
                console.error('⚠️ DB 업데이트 오류:', dbError)
              }
            }
            
            return new Response(
              JSON.stringify({ success: true, imageUrl }),
              { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
          }
        }
      }
    }

    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Gemini API 응답에서 이미지를 찾을 수 없습니다.' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
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