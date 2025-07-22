import { type FC } from 'react';
import RegistrationForm from '@/components/forms/RegistrationForm';

export const RegistrationPage: FC = () => {
  return (
    <div className="text-white w-full bg-black ">
      <div className="auth-page-fade-in min-h-svh flex flex-col justify-center lg:items-start items-center lg:pl-[20%] lg:bg-[url('/img/registerBG.jpg')] bg-cover bg-right md:bg-black">
        <div className="flex flex-col max-w-[400px] w-full p-4">
          <p className="text-7xl select-none tracking-widest font-mono text-center mb-10">LISTEN</p>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
