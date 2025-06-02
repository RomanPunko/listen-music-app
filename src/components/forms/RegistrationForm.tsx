import { useState, type FC } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import type { IFormData } from '@/types/auth-form-types';
import { AuthService } from '@/api/services/auth/auth-service';
import { goToHomePage } from '@/utils/helpers';
import { handleChangeForm } from '@/utils/helpers';
import { useAppDispatch } from '@/hooks/app-hooks';
import { setIsAuthenticated } from '@/store/slices/user-slice';

const RegistrationForm: FC = () => {
  const dispatch = useAppDispatch()
  const [apiError, setApiError] = useState<string | null>(null);
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      setApiError('Password must be at least 6 characters long!');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setApiError("Passwords don't match!");
      return;
    }

    try {
      const response = await AuthService.register(formData.email, formData.password);
      if (response.data.accessToken) console.log('Hello new Roman');
      await dispatch(setIsAuthenticated(true))
      await goToHomePage(); // запитати
    } catch (error: any) {
      console.error('Помилка:', error);
      setApiError(error.response?.data?.message || error.message);
    }
  };

  return (
    <form
      className="bg-white/5 backdrop-blur-md p-10 rounded-xl flex flex-col gap-5 shadow-lg max-w-sm w-[400px] "
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-bold text-center mb-4">Registration</h2>
      <Input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
        onChange={(e) => handleChangeForm(e, setFormData)}
      />
      <Input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
        onChange={(e) => handleChangeForm(e, setFormData)}
      />
      <Input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        autoComplete="current-confirm-password"
        placeholder="Confirm password"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
        onChange={(e) => handleChangeForm(e, setFormData)}
      />
      <Button
        className="bg-white/90 hover:bg-white hover:cursor-pointer text-black font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out"
        type="submit"
      >
        Sign Up
      </Button>
      {apiError && <div className="text-red-500 text-center mt-2 text-sm">{apiError}</div>}
      <Link
        to="/login"
        className="text-center self-center text-sm cursor-pointer text-gray-300 hover:text-white transition duration-200"
      >
        Do you have an account?
      </Link>
    </form>
  );
};

export default RegistrationForm;
