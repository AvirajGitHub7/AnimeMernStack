import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Freebook() {
    const filterdata=list.filter((data)=>data.category==="free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3 ,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
       <div className='max-w-screen-2xl mx-auto container md:px-20 py-4 px-4 my-8'>
          <div>
          <h1 className="text-2xl font-bold">Explore Free Anime Collections</h1>
          <p className="text-gray-600 mt-2 ">
                    Dive into an amazing selection of free anime, handpicked for you to enjoy endless entertainment without any cost.
                </p>
          </div>

          <div className='my-8'>
          <Slider {...settings}>
             {filterdata.map((item)=>{
               return  <Cards item={item} key={item.id}/>
             })}
          </Slider>

          </div>


       </div>
    </>
  )
}

export default Freebook