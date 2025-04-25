import React from 'react'
import {useAuth} from "../context/AuthProvider"
import toast from 'react-hot-toast'
function Logout() {
    const [authuser,setauthuser]=useAuth();
    const handlelogout=()=>{
        try {
            setauthuser({
                ...authuser,
                user:null
            })
            localStorage.removeItem("users");
            toast.success("logout Successfully");
           
            setTimeout(() => {
                window.location.reload();
              
               
              }, 2000);
        } catch (error) {
            toast.success("Error"+error.message);
        }
    }
  return (
    <div>
      <button onClick={handlelogout} className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'>Logout</button>
    </div>
  )
}

export default Logout
