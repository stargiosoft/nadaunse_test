/**
 * Sentry Custom Integration 설정 - CDP로 실제 Chrome 제어
 */

import { chromium } from '@playwright/test';

const WEBHOOK_URL = 'https://kcthtpmxffppfbkjjkub.supabase.co/functions/v1/sentry-slack-webhook';

async function main() {
  console.log('🔧 Sentry Custom Integration 설정 시작\n');
  console.log('🔌 Chrome에 연결 중...');

  // 실행 중인 Chrome에 CDP로 연결
  const browser = await chromium.connectOverCDP('http://127.0.0.1:9222');

  console.log('✅ Chrome 연결 성공!');

  // 기존 컨텍스트 가져오기
  const contexts = browser.contexts();
  const context = contexts[0];

  // 기존 페이지 가져오기
  let page = context.pages().find(p => p.url().includes('sentry.io'));
  if (!page) {
    page = context.pages()[0];
  }

  if (!page) {
    console.error('❌ Sentry 페이지를 찾을 수 없습니다.');
    await browser.close();
    return;
  }

  console.log('📍 현재 페이지:', page.url());

  try {
    // Developer Settings 페이지가 아니면 이동
    if (!page.url().includes('developer-settings')) {
      console.log('📍 Developer Settings 페이지로 이동...');
      await page.goto('https://stargiosoft.sentry.io/settings/developer-settings/', {
        waitUntil: 'networkidle',
        timeout: 30000
      });
    }

    await page.waitForTimeout(2000);

    // "Create New Integration" 또는 "New Internal Integration" 버튼 찾기
    console.log('🔍 New Integration 버튼 찾는 중...');

    // 여러 가능한 버튼 셀렉터 시도
    const newIntegrationBtn = page.locator('button, a').filter({ hasText: /New Internal Integration|Create New|New Integration/i }).first();

    if (await newIntegrationBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await newIntegrationBtn.click();
      console.log('✅ New Integration 버튼 클릭');
      await page.waitForTimeout(2000);
    } else {
      console.log('⚠️ New Integration 버튼을 찾을 수 없습니다. 페이지를 확인해주세요.');
    }

    // Integration 이름 입력
    console.log('✏️ Integration 이름 입력...');
    const nameInput = page.locator('input[name="name"], input[placeholder*="name" i]').first();
    if (await nameInput.isVisible({ timeout: 5000 }).catch(() => false)) {
      await nameInput.click();
      await nameInput.fill('Slack Alert Webhook');
      console.log('✅ 이름 입력 완료');
    }

    await page.waitForTimeout(1000);

    // Webhook URL 입력 필드 찾기
    console.log('🔗 Webhook URL 입력...');
    const webhookInput = page.locator('input[name="webhookUrl"], input[placeholder*="webhook" i], input[placeholder*="URL" i]').first();
    if (await webhookInput.isVisible({ timeout: 5000 }).catch(() => false)) {
      await webhookInput.click();
      await webhookInput.fill(WEBHOOK_URL);
      console.log('✅ Webhook URL 입력 완료');
    } else {
      // 모든 입력 필드 중에서 찾기
      const allInputs = await page.locator('input[type="text"], input[type="url"]').all();
      for (const input of allInputs) {
        const placeholder = await input.getAttribute('placeholder') || '';
        const name = await input.getAttribute('name') || '';
        if (placeholder.toLowerCase().includes('url') || name.toLowerCase().includes('url') || name.toLowerCase().includes('webhook')) {
          await input.fill(WEBHOOK_URL);
          console.log('✅ Webhook URL 입력 완료 (대체 방식)');
          break;
        }
      }
    }

    await page.waitForTimeout(1000);

    // Issue 체크박스 활성화 (Webhook 이벤트)
    console.log('☑️ Issue 이벤트 체크...');
    const issueCheckbox = page.locator('input[type="checkbox"]').filter({ hasText: /issue/i }).first();
    if (await issueCheckbox.isVisible({ timeout: 3000 }).catch(() => false)) {
      const isChecked = await issueCheckbox.isChecked();
      if (!isChecked) {
        await issueCheckbox.click();
        console.log('✅ Issue 체크박스 활성화');
      }
    }

    // Error 체크박스도 활성화
    const errorCheckbox = page.locator('input[type="checkbox"]').filter({ hasText: /error/i }).first();
    if (await errorCheckbox.isVisible({ timeout: 3000 }).catch(() => false)) {
      const isChecked = await errorCheckbox.isChecked();
      if (!isChecked) {
        await errorCheckbox.click();
        console.log('✅ Error 체크박스 활성화');
      }
    }

    await page.waitForTimeout(1000);

    // Read 권한 설정 (Project, Issue 등)
    console.log('🔐 권한 설정...');
    const readSelects = await page.locator('select').all();
    for (const select of readSelects) {
      const options = await select.locator('option').allTextContents();
      if (options.some(opt => opt.toLowerCase().includes('read'))) {
        await select.selectOption({ label: 'Read' }).catch(() => {});
      }
    }

    console.log('\n✅ 자동 설정 완료!');
    console.log(`📋 Webhook URL: ${WEBHOOK_URL}`);
    console.log('\n👉 설정을 확인하고 "Save Changes" 버튼을 클릭해주세요.');
    console.log('\n⏳ 30초 후 스크립트 종료...');

    await page.waitForTimeout(30000);

    console.log('👋 완료!');

  } catch (error) {
    console.error('❌ 에러:', error);
    console.log('\n👉 브라우저에서 직접 완료해주세요.');
    console.log(`📋 입력할 Webhook URL: ${WEBHOOK_URL}`);
  }

  // 연결만 해제 (브라우저는 열린 상태 유지)
  await browser.close();
}

main().catch(console.error);
