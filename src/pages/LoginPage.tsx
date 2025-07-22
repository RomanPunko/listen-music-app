import { type FC } from 'react';
import LoginForm from '@/components/forms/LoginForm';

export const LoginPage: FC = () => {
  return (
    <div className="text-white w-full bg-black">
      <div className="auth-page-fade-in min-h-svh flex flex-col justify-center lg:items-end items-center bg-cover lg:pr-[20%] lg:bg-[url('/img/loginBG.jpg')] bg-left md:bg-black">
        <div className="flex flex-col max-w-[400px] w-full p-4">
          <p className="text-7xl select-none tracking-widest font-mono text-center mb-10">LISTEN</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
