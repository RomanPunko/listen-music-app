import React, { useState, type FC } from 'react'; 
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';
import type { IFormData } from '@/types/auth-form-types';
import { AuthService } from '@/api/services/auth/auth-service';

const LoginForm: FC = () =>{
  const [apiError, setApiError] = useState<string | null>(null);
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();

    try{
      const response = await AuthService.login(formData.email, formData.password);
      if(response.data.accessToken) console.log('Hello Roman')

    } catch (error: any){
      console.error('Помилка:', error);
      setApiError('Invalid email or password');
    }
  }

  
  return(
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 backdrop-blur-md p-10 rounded-xl flex flex-col gap-5 shadow-lg max-w-sm w-[400px] "
    >
      <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
      <Input
        id='email'
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
        onChange={handleChange}
      />
      <Input
        id='password'
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
        onChange={handleChange}
      />
      <Button
        className="bg-white/90 hover:bg-white hover:cursor-pointer text-black font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out"
        type="submit"
      >
        Sign In
      </Button>
      {apiError && (
        <div className="text-red-500 text-center mt-2 text-sm">
          {apiError}
        </div>
      )}
      <Link to="/registration" className="text-center self-center text-sm cursor-pointer text-gray-300 hover:text-white transition duration-200">
        Don't have an account?
      </Link>
    </form>
  )
}

export default LoginForm;