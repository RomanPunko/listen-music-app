import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/app-hooks';
import { useAppSelector } from '@/hooks/app-hooks';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import { loginUser } from '@/store/slices/auth-slice';
import { type IFormData } from '@/store/slices/auth-slice';


const LoginForm: React.FC = () => {
  const loading = useAppSelector((state) => state.auth.loading);
  const error = useAppSelector((state) => state.auth.error);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = async (data: IFormData) => {
    const resultLogin = await dispatch(loginUser(data));

    if (loginUser.rejected.match(resultLogin)) {
      setError('root', {
        type: 'manual',
        message: String(resultLogin.payload) || 'Login failed',
      });
    }
  };

  useAuthRedirect();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white/5 backdrop-blur-md p-10 rounded-xl flex flex-col gap-5 shadow-lg max-w-sm w-[400px]"
    >
      <h2 className="text-3xl font-bold text-center mb-4">Login</h2>

      <Input
        type="email"
        placeholder="Email"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && (
        <span className="text-red-500 mt-[-15px] text-sm">{errors.email.message}</span>
      )}

      <Input
        type="password"
        placeholder="Password"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
        {...register('password', { required: 'Password is required' })}
      />
      {errors.password && (
        <span className="text-red-500 mt-[-15px] text-sm">{errors.password.message}</span>
      )}

      <Button
        className="bg-white/90 hover:bg-white hover:cursor-pointer text-black font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out disabled:opacity-50"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Sign In'}
      </Button>

      {(errors.root || error) && (
        <div className="text-red-500 text-center">{errors.root?.message || error}</div>
      )}

      <Link
        to="/registration"
        className="text-center self-center text-sm cursor-pointer text-gray-300 hover:text-white transition duration-200"
      >
        Don't have an account?
      </Link>
    </form>
  );
};

export default LoginForm;
