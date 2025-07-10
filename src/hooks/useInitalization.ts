import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './app-hooks';
import { getAccessToken } from '@/api/services/auth/auth-helper';
import { setIsAuthenticated, setIsInitialized } from '@/store/slices/auth-slice';

const useInitialization = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const token = getAccessToken();

  useEffect(() => {
    if (token) {
      dispatch(setIsAuthenticated(true));
    } else {
      dispatch(setIsAuthenticated(false));
    }

    dispatch(setIsInitialized(true));
  }, [token, dispatch]);

  return { isAuthenticated };
};

export default useInitialization;
