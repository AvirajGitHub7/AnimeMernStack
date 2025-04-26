import React, { useEffect } from 'react'

import { useForm } from "react-hook-form"
import axios  from 'axios'
import toast from 'react-hot-toast'
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from 'react-router-dom'
function Login() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userinfo={
      
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/login",userinfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
       toast.success('loggedin succesfully');
       document.getElementById("my_modal_3").close();

       setTimeout(() => {
         localStorage.setItem("users",JSON.stringify(res.data.user))
         
         localStorage.setItem("token", res.data.token);
         localStorage.setItem("role", res.data.role); 
         window.location.reload();
          
        
       }, 3000);
      }
    }).catch((err)=>{
      console.log(err);
      toast.error('Error:'+err.response.data.message);
      setTimeout(()=>{

      },2000)
    })
  }

  const { user, isAuthenticated ,loginWithRedirect} = useAuth0();
  useEffect(() => {
    if (isAuthenticated && user) {
      axios.post("http://localhost:4001/user/googlelogin", {
        email: user.email,
        name: user.name,
        picture: user.picture,
      })
      .then((res) => {
        localStorage.setItem("users", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [isAuthenticated, user]);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        
  <div className="modal-box dark:bg-gray-900 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
     
      <Link to="/" 
  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
  onClick={() => document.getElementById("my_modal_3").close()}> ✕ </Link>

    <h3 className="font-bold text-lg">Login</h3>

     {/*Email*/}
      <div className='mt-4 space-y-2'>
    <span>Email</span><br/>
    <input className="outline-none w-80 p-1 rounded-sm "placeholder='Enter your email' 
      {...register("email", { required: true })}
    />
    <br/>
    {errors.email && <span className="text-red-600 text-sm">This field is required</span>}


      </div>
      {/*password*/}
      <div className='mt-4 space-y-2'>
    <span>Password</span><br/>
    <input className="outline-none w-80 p-1 rounded-sm" placeholder='Enter your password' 
     {...register("password", { required: true })}
    />
    <br/>
    {errors.password && <span className="text-red-600 text-sm">This field is required</span>}


      </div>

      <div className='btns mt-7 space-y-2 flex justify-around'>
           <button className=' bg-blue-500 text-white rounded-md px-5 py-2 hover:bg-blue-400 cursor-pointer duration-300'>Login</button>
           <p>Not registered? <Link to="/Signup" className='text-blue-500 underline cursor-pointer'>Signup</Link></p>
      </div>
      </form>
           {/* <button className=' bg-red-600 text-white rounded-md px-5 py-2 hover:bg-red-700 cursor-pointer duration-300' onClick={() => loginWithRedirect()}>Google</button> */}
  </div>
</dialog>
    
    </div>
  )
}

export default Login
