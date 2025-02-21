import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { googleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign in Successful",
          showConfirmButton: false,
          timer: 3500,
        });
        navigate('/');
      })
      .catch((err) => {
        console.log("Error:", err.message);
      });
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="p-10 bg-white space-y-10 shadow-lg rounded-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
          <button
            onClick={handleGoogleLogin}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center justify-center gap-2"
          >
            <FcGoogle />
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
