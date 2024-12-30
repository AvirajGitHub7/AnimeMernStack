import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

import { useForm } from "react-hook-form"

function Signup() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className="flex h-screen items-center justify-center md:text-lg ">

    <div className="shadow-md border-[2px] p-7 rounded-md space-y-3 modal-box"> 
       <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold md:text-2xl">Signup</h3>

            {/*Fullname*/}
           <div className='mt-4 space-y-2'>
    <span>Fullname</span><br/>
    <input className="outline-none w-80"placeholder='Enter your Fullname' 
     {...register("fullname", { required: true })}
    />
        <br/>
        {errors.fullname && <span className="text-red-600 text-sm">This field is required</span>}
      </div>

           {/*Email*/}
           <div className='mt-4 space-y-2'>
    <span>Email</span><br/>
    <input className="outline-none w-80"placeholder='Enter your email'
      {...register("email", { required: true })}
    />
        <br/>
        {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
     </div>


      {/*password*/}
      <div className='mt-4 space-y-2'>
    <span>Password</span><br/>
    <input className="outline-none w-80" placeholder='Enter your password'
      {...register("password", { required: true })}
    />
        <br/>
        {errors.password && <span className="text-red-600 text-sm">This field is required</span>}
    </div>

    
    <div className='btns  mt-10 space-y-2 space-x-7 flex justify-around 'style={{ marginTop: '30px' }}>
           <button className=' bg-blue-500 text-white rounded-md md:px-5 md:py-2 px-3 text-md hover:bg-blue-400 cursor-pointer duration-300'>Signup</button>
           <p>already have an account? <span onClick={()=>document.getElementById("my_modal_3").showModal()}  className='text-blue-500 underline cursor-pointer'>Login</span></p>
      </div>
      <Login/>
      </form>
       </div>


    </div>
     
        
  
    </>
  )
}

export default Signup
