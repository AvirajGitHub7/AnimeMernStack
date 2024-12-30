import React from 'react'

function Banner() {
  return (
    <>
     <div className="max-w-screen-2xl mx-auto container md:px-20 py-4 flex flex-col md:flex-row mt-20 mb-20">
        <div className="left order-2 w-full mt-16 px-4 md:w-1/2 md:mt-32">
          <div className='space-y-12'>
            <h1 className='text-3xl md:text-4xl'>Welcome to <span className='text-blue-500'>AnimeLovers!</span></h1>
            <p className='text-xl'>Your ultimate destination for all things anime. Explore a vast collection of series, movies, and characters from across the world. Join our community and immerse yourself in the exciting world of anime!</p>
            <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
            </label>
         </div>
         <button className="btn  bg-blue-500 text-white mt-6">Secondary</button>
        </div>
        <div className="right order-1 mt-10 md:ml-15  px-4 w-full md:w-1/2">
          <img className="w-full md:w-[600px] md:h-[500px] object-cover rounded-md"src="/suzume.jpg"/>
        </div>
     </div>
      
    </>
  )
}

export default Banner
