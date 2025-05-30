import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';


const LoginForm = () =>{

  return(
    <div className="bg-white/5 backdrop-blur-md p-10 rounded-xl flex flex-col gap-5 shadow-lg max-w-sm w-[400px] ">
      <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
      <Input
        type="email"
        placeholder="Email"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
      />
      <Input
        type="password"
        placeholder="Password"
        className="bg-white/20 border border-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none"
      />
      <Button
        className="bg-white/90 hover:bg-white hover:cursor-pointer text-black font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out"
      >
        Sign In
      </Button>
      <Link to="/registration" className="text-center self-center text-sm cursor-pointer text-gray-300 hover:text-white transition duration-200">
        Don't have an account?
      </Link>
    </div>
  )
}

export default LoginForm;