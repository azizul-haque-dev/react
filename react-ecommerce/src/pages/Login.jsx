import React, { useState } from "react";




const Login = () => {
  const[ showSignup,setShowSignUp]=useState(false)
  return ( showSignup?<form className="flex flex-col w-[90%] sm:max-w-96 mx-auto items-center gap-4 mt-14 text-gray-800">
    <div className="inline-flex items-center gap-2 mb-2 mt-10">
    <p className="prata-regular text-3xl">{showSignup?'Sign Up':'Login'}</p>
    <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
    </div>
    <input type="text"
    name="name"
    placeholder="Name"
    className="w-full px-3 py-2 border border-gray-800"
     />
      <input type="email"
    name="email"
    placeholder="Email"
    className="w-full px-3 py-2 border border-gray-800"
     />
      <input type="password"
    name="password"
    placeholder="password"
    className="w-full px-3 py-2 border border-gray-800"
     />
     <div className="flex justify-between w-full text-sm mt-[-8px]">
      <p className="cursor-pointer">Forgot your password</p>
      <p onClick={()=>setShowSignUp(false)}className="cursor-pointer underline text-blue-700">Login here</p>

     </div>
     <button type="submit" className="px-8 py-2 font-light text-white mt-4 bg-black">
      Sign up 
     </button>
  

  </form>:
  <form className="flex flex-col w-[90%] sm:max-w-96 mx-auto items-center gap-4 mt-14 text-gray-800">
    <div className="inline-flex items-center gap-2 mb-2 mt-10">
    <p className="prata-regular text-3xl">LOGIN</p>
    <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
    </div>
    <input type="email"
    name="email"
    placeholder="Email"
    className="w-full px-3 py-2 border border-gray-800"
     />
      <input type="password"
    name="password"
    placeholder="password"
    className="w-full px-3 py-2 border border-gray-800"
     />
     <div className="flex justify-between w-full text-sm mt-[-8px]">
      <p className="cursor-pointer">Forgot your password</p>
      <p onClick={()=>setShowSignUp(true)}className="cursor-pointer underline text-blue-700">Create a acoount</p>

     </div>
     <button type="submit" className="px-8 py-2 font-light text-white mt-4 bg-black">
      Sign in 
     </button>
  

  </form>)
};

export default Login;
