import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

/**
 * 로그인이 필요한 페이지에서 사용하는 훅
 * 세션이 없으면 SessionExpiredDialog를 표시
 * 
 * @returns isAuthenticated - 로그인 여부
 * @returns showSessionDialog - 세션 만료 다이얼로그 표시 여부
 * @returns isLoading - 세션 확인 중 여부
 */
export function useRequireAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSessionDialog, setShowSessionDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        setIsAuthenticated(true);
        setShowSessionDialog(false);
      } else {
        setIsAuthenticated(false);
        setShowSessionDialog(true);
      }
    } catch (error) {
      console.error('❌ 세션 확인 실패:', error);
      setIsAuthenticated(false);
      setShowSessionDialog(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isAuthenticated, showSessionDialog, isLoading };
}
