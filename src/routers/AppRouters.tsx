import { type FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from '@/pages/RegistrationPage';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import FavoritePage from '@/pages/FavoritePage';
import Layout from '@/components/layout/Layout';
import PlaylistPage from '@/pages/PlaylistPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouters: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/registration"
        element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
        }
      />

      {/* Private */}
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Layout>
              <HomePage />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/favorite"
        element={
          <PrivateRoute>
            <Layout>
              <FavoritePage />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/playlist/:id"
        element={
          <PrivateRoute>
            <Layout>
              <PlaylistPage />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRouters;
