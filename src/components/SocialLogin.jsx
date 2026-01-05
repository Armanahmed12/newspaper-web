import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {

    const {handleGoogleLogin,handleGithubLogin} = use(AuthContext);
 
  return (
    <div className="mb-5">
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button onClick={()=>handleGoogleLogin()} className="flex items-center gap-2 bg-blue-200 hover:bg-blue-300 hover:cursor-pointer px-3 w-full py-2 rounded font-semibold">
          <FcGoogle size={24} /> Login with Google
        </button>
        <button onClick={()=> handleGithubLogin()} className="flex items-center gap-2 bg-blue-200 hover:bg-blue-300 hover:cursor-pointer w-full px-3 py-2 rounded font-semibold">
          <FaGithub size={24} /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
