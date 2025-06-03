import axios from 'axios';
import { getContentType } from './api-helper';
import { getAccessToken, removeFromStorage } from './services/auth/auth-helper';
import { errorCatch } from './api-helper';
import { AuthService } from './services/auth/auth-service';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4200/api',
  headers: getContentType(),
});

instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    const message = errorCatch(error);

    const isJwtError =
      message?.includes('jwt expired') || message?.includes('jwt must be provided');

    if (
      error.response?.status === 401 &&
      isJwtError &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        await AuthService.getNewTokens();
        return instance.request(originalRequest);
      } catch (e) {
        if (errorCatch(e) === 'jwt expired') removeFromStorage();
      }
    }

    throw error;
  }
);
