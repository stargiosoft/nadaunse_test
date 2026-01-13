-- Migration: 마스터 콘텐츠 삭제 가능하도록 외래 키 제약 수정
-- Date: 2026-01-13
-- Description: order_results.question_id를 nullable로 변경하고 ON DELETE SET NULL 추가
--              마스터 콘텐츠 삭제 시 order_results의 question_id만 NULL이 되고,
--              question_text와 gpt_response는 그대로 유지되어 사용자는 계속 볼 수 있음

BEGIN;

-- 1. 기존 외래 키 제약 삭제
ALTER TABLE order_results
  DROP CONSTRAINT IF EXISTS order_results_question_id_fkey;

-- 2. question_id 컬럼을 nullable로 변경
ALTER TABLE order_results
  ALTER COLUMN question_id DROP NOT NULL;

-- 3. 새로운 외래 키 제약 추가 (ON DELETE SET NULL)
ALTER TABLE order_results
  ADD CONSTRAINT order_results_question_id_fkey
  FOREIGN KEY (question_id)
  REFERENCES master_content_questions(id)
  ON DELETE SET NULL;

-- 4. 인덱스 확인 (성능 최적화)
-- question_id에 인덱스가 없으면 추가
CREATE INDEX IF NOT EXISTS idx_order_results_question_id
  ON order_results(question_id)
  WHERE question_id IS NOT NULL;

COMMIT;

-- 테스트 쿼리 (실행하지 않고 참고용)
-- 1. order_results에서 question_id가 NULL인 레코드 확인
-- SELECT id, order_id, question_id, question_text FROM order_results WHERE question_id IS NULL;

-- 2. 마스터 콘텐츠 삭제 후 order_results 확인
-- DELETE FROM master_content_questions WHERE id = 'xxx';
-- SELECT * FROM order_results WHERE question_text LIKE '%삭제된 콘텐츠%';
