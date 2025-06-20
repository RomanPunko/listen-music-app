import { type FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { registerUser } from '@/store/slices/auth-slice';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import { type IFormData } from '@/store/slices/auth-slice';


const RegistrationForm: FC = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.auth.loading);
  const error = useAppSelector((state) => state.auth.error);

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = async (data: IFormData) => {
    const result = await dispatch(registerUser(data));

    if (registerUser.rejected.match(result)) {
      setError('root', {
        type: 'manual',
        message: result.payload as string,
      });
    }
  };

  useAuthRedirect();

  return (
    <form
      className="bg-white/5 backdrop-blur-md p-10 rounded-xl flex flex-col gap-5 shadow-lg max-w-sm w-[400px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-3xl font-bold text-center mb-4">Registration</h2>

      <Input
        type="email"
        placeholder="Email"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Invalid email format',
          },
        })}
      />
      {errors.email && (
        <span className="text-red-500 text-sm mt-[-15px]">{errors.email.message}</span>
      )}

      <Input
        type="password"
        placeholder="Password"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long!',
          },
        })}
      />
      {errors.password && (
        <span className="text-red-500 text-sm mt-[-15px]">{errors.password.message}</span>
      )}

      <Input
        type="password"
        placeholder="Confirm password"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
        {...register('confirmPassword', {
          required: 'Confirm password is required',
          validate: (value) => value === getValues('password') || "Passwords don't match!",
        })}
      />
      {errors.confirmPassword && (
        <span className="text-red-500 text-sm mt-[-15px]">{errors.confirmPassword.message}</span>
      )}

      <Button
        className="bg-white/90 hover:bg-white hover:cursor-pointer text-black font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out"
        type="submit"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Sign Up'}
      </Button>

      {(errors.root || error) && (
        <div className="text-red-500 text-center text-sm">{errors.root?.message || error}</div>
      )}

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
