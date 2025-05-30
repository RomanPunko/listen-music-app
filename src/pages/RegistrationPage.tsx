import RegistrationForm from "@/components/forms/RegistrationForm"

export const RegistrationPage = () => {
  return (
    <div className="text-white w-full bg-black ">
      <div className="auth-page-fade-in min-h-svh flex flex-col justify-center items-start pl-[20%] bg-[url('../public/img/registerBG.jpg')] bg-cover bg-right">
          <div className="flex flex-col">
            <p className="text-7xl select-none tracking-widest font-mono text-center mb-10">LISTEN</p>
            <RegistrationForm/>
          </div>
      </div>
    </div>
  )
}

export default RegistrationPage