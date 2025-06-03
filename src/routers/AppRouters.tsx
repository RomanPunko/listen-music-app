import { type FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from '@/pages/RegistrationPage';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import SearchPage from '@/pages/SearchPage';
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
        path="/search"
        element={
          <Layout>
            <SearchPage />
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
