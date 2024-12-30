import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cards
 from './Cards'
import list from "../../public/list.json"

function Webseries() {
 
  return (
    <>
    
      <Navbar/>
        <div className='min-h-screen max-w-screen-2xl mx-auto container md:px-20 py-4 mt-20 px-5 '>
           <div>
           <h1 className="md:text-3xl text-xl font-bold mt-8">Welcome to the <span className='text-blue-500'>Ultimate Webseries Collection!</span></h1>
        <p className="mt-4 md:text-lg text-gray-600">
          Dive into a world of captivating stories and binge-worthy web series. From thrilling adventures to heartwarming dramas, Intense crime dramas or light-hearted comedies, explore a vast selection of web series that will keep you hooked for hours. 
        </p>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
             {list.map((item)=>{
                return <Cards item={item} key={item.id}/>
             })}
          </div>
           </div>
        </div>
      <Footer/>
    </>
  )
}

export default Webseries
