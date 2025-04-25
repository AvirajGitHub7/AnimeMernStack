import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    };
    await axios.post("http://localhost:4001/user/signup", userinfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup successfully");
          localStorage.setItem("users", JSON.stringify(res.data.user));
          navigate(from, { replace: true });
        }
      }).catch((err) => {
        toast.error('Error: ' + err.response.data.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] p-4">
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-1/2 bg-gray-100 p-4 hidden sm:flex items-center justify-center">
          <img src="./Josse.jpg" alt="Sign-up" className="w-full h-auto rounded-lg shadow-md" />
        </div>

        {/* Right Side: Form */}
        <div className="w-full sm:w-1/2 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>

      

          {/* Sign-Up Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Fullname */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                {...register("fullname", { required: true })}
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400"
              />
              {errors.fullname && <p className="text-red-600 text-sm">Full name is required</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", { required: true })}
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400"
              />
              {errors.email && <p className="text-red-600 text-sm">Email is required</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                {...register("password", { required: true })}
                className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400"
              />
              {errors.password && <p className="text-red-600 text-sm">Password is required</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md text-lg font-medium transition duration-300"
            >
              Sign Up
            </button>

               {/* Google Sign-In */}
          <button
            type="button"
            className="w-full bg-red-500 hover:bg-red-400 text-white py-2 rounded-md text-lg font-medium transition duration-300"
          >
            Sign In with Google
          </button>
          
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span onClick={() => document.getElementById("my_modal_3").showModal()} className="text-indigo-600 cursor-pointer underline">
              Login
            </span>
          </p>
        </div>
      </div>

      <Login />
    </div>
  );
}

export default Signup;
