import { type FC, type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@/hooks/app-hooks';

interface Props {
  children: JSX.Element;
}

const PublicRoute: FC<Props> = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return !isAuthenticated ? children : <Navigate to="/home" replace />;
};

export default PublicRoute;
