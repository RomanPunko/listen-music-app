import { Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from '@/pages/RegistrationPage';
import LoginPage from '@/pages/LoginPage';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/registration" replace />} />
      <Route path="/registration" element={<RegistrationPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
  );
};

export default Layout;