import { type FC, type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/app-hooks';

interface Props {
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const isInitialized = useAppSelector((state) => state.auth.isInitialized);

  if (!isInitialized) {
    return null;
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
