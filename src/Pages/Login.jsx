import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    
  const { googleLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin();
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="p-8 bg-white shadow-lg rounded-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
          <button
            onClick={handleGoogleLogin}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2"
          >
            <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>
          <p className="text-gray-500 mt-2 text-sm">
            Manage tasks easily & efficiently
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
