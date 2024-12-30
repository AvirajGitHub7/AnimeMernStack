import React from 'react'

function Cards({item}) {
    
  return (
    <div>
      <div className="card bg-base-100 w-80 md:w-96 shadow-xl mt-8 hover:scale-105 duration-200 dark:text-black">
  <figure>
    <img className='w-full h-64 object-cover'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  flex justify-between items-center  p-4">
      <div className="badge badge-outline">{item.category}</div>
      <div className="badge badge-outline  ">{item.rating}</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
