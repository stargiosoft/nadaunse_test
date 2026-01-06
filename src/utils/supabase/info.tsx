/**
 * Supabase 환경 설정
 *
 * Vercel 환경변수:
 * - Production: VITE_SUPABASE_PROJECT_ID, VITE_SUPABASE_ANON_KEY
 * - Preview/Staging: VITE_SUPABASE_PROJECT_ID, VITE_SUPABASE_ANON_KEY
 */

// Production 기본값 (환경변수 미설정 시 fallback)
const PRODUCTION_PROJECT_ID = "kcthtpmxffppfbkjjkub";
const PRODUCTION_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjdGh0cG14ZmZwcGZia2pqa3ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwMzkxNTEsImV4cCI6MjA4MTYxNTE1MX0.lETgMmkEbkcoyQOyuiuCLQ06DPDANsJfJbzzhexcK3c";

export const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID || PRODUCTION_PROJECT_ID;
export const publicAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || PRODUCTION_ANON_KEY;