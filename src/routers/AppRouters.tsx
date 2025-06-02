import { type FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from '@/pages/RegistrationPage';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';

const AppRouters: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouters;
