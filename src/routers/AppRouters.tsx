import { type FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from '@/pages/RegistrationPage';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import PremiumPage from '@/pages/PremiumPage';
import FavoritePage from '@/pages/FavoritePage';
import Layout from '@/components/layout/Layout';

const AppRouters: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/premium"
        element={
          <Layout>
            <PremiumPage />
          </Layout>
        }
      />
      <Route
        path="/favorite"
        element={
          <Layout>
            <FavoritePage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRouters;
