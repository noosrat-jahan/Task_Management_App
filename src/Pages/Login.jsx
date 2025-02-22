import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const { googleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);

        const userInfo = {
          UserId: user.uid,
          Name: user.displayName,
          Email: user.email,
        };
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign in Successful",
          showConfirmButton: false,
          timer: 3500,
        });

        if (user) {
          axios
            .post(`${import.meta.env.VITE_API_URL}/users`, userInfo)
            .then((res) => {
              console.log(res.data);
            });
        }

        navigate("/");
      })
      .catch((err) => {
        console.log("Error:", err.message);
      });
  };

  return (
    <div>
      <div className="p-5 flex flex-col items-center justify-center min-h-screen bg-gray-100">
       
        <div className="md:p-20 p-10 bg-white space-y-10 shadow-lg rounded-lg text-center">
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

        <Link to="/" className="bg-teal-500 mt-10 rounded-md text-white p-2">
          {" "}
          🏡Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
