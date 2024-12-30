import React from 'react'
import { useForm } from "react-hook-form"




import { Link } from 'react-router-dom'
function Login() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>

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

      <div className='btns mt-7 space-y-2 flex justify-around'>
           <button className=' bg-blue-500 text-white rounded-md px-5 py-2 hover:bg-blue-400 cursor-pointer duration-300'>Login</button>
           <p>Not registered? <Link to="/Signup" className='text-blue-500 underline cursor-pointer'>Signup</Link></p>
      </div>
      </form>
  </div>
</dialog>
    
    </div>
  )
}

export default Login
