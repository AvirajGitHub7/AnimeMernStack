import React, { useState,useEffect } from 'react'
import Login from './Login';
function Navbar() {

   const[theme,settheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");
   const element=document.documentElement;
   useEffect(()=>{
   if(theme==="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
      document.body.classList.add("dark");
   }else{
    element.classList.remove("dark");
    localStorage.setItem("theme","light");
    document.body.classList.remove("dark");
   }

   },[theme])


    const navitems=(<>
      <li><a href='/'>Home</a></li>
      <li><a href='/Webseries'>WebSeries</a></li>
      <li><a>Movies</a></li>
      <li><a>Contact</a></li>
      <li><a>About</a></li>
      
    </>);
    const [sticky,setsticky]=useState(false);
     useEffect(()=>{
        const handlesticky=()=>{
            if(window.scrollY>0){
                setsticky(true);
            }else{
                setsticky(false);
            }

        }
        window.addEventListener("scroll",handlesticky);
        return()=>{
            window.removeEventListener("scroll",handlesticky);
        }
     },[]);
  return (
    <>
      <div className={`dark:bg-slate-900 dark:text-white navbar bg-base-100 max-w-screen-2xl mx-auto container md:px-20 py-4 fixed top-0 left-0 right-0 z-50 ${
        sticky?"sticky-navbar bg-base-200 shadow-md transition-all ease-in-out duration-300" :""
      }`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:text-black">
       {navitems}
      
      
      </ul>
    </div>
    <a className=" text-xl md:text-3xl font-bold cursor-pointer">AnimeLovers</a>
  </div>
    <div className="navbar-end space-x-4">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-xl ">
     {navitems}
      
    </ul>
  </div>
    <div className="hidden md:block">
           <label className=" flex items-center gap-2 px-2 py-2 border rounded-md">
  <input type="text" className="grow outline-none" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
           </label>
    </div>
    <input onClick={()=>settheme(theme==="dark"?"light":"dark")} type="checkbox" value="synthwave" className="toggle theme-controller" />
  <div className="">
  <a onClick={()=>document.getElementById("my_modal_3").showModal()}
  className="bg-black text-white px-3 py-2 md:px-5 md:py-3 rounded-md hover:bg-slate-800 duration-300 cursor-pointer mr-5 md:mr-0">
  Login
  </a>
   <Login/>

  </div>
    </div>
  
</div>
    </>
  )
}

export default Navbar
