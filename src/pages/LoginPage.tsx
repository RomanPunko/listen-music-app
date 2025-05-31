import { type FC } from 'react'; 
import LoginForm from "@/components/forms/LoginForm"

export const LoginPage:FC = () => {
  return (
    <div className="text-white w-full bg-black">
      <div className="auth-page-fade-in min-h-svh flex flex-col justify-center items-end bg-cover pr-[20%] bg-[url('/img/loginBG.jpg')] bg-left">
          <div className="flex flex-col">
            <p className="text-7xl select-none tracking-widest font-mono text-center mb-10">LISTEN</p>
            <LoginForm/>
          </div>
      </div>
    </div>
  )
}

export default LoginPage