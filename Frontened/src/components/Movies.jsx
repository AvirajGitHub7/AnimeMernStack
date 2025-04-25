import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import axios from 'axios';
import Cards from './Cards';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Movies() {
  const navigate = useNavigate();
  const [anime, setanime] = useState([]);

  useEffect(() => {
    const getanime = async () => {
      try {
        const res = await axios.get('http://localhost:4001/Anime');
        setanime(res.data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    getanime();
  }, []);

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
    <Navbar/>
      {/* Section 1: Hero Video Section */}
      <div className="relative max-w-screen-2xl mx-auto px-6 h-screen overflow-hidden ">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/new_project.mp4" type="video/mp4" />
        </video>

        {/* Overlay for Blur + Color */}
        <div className="absolute w-full h-full bg-black bg-opacity-60 backdrop-blur-sm z-10 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-white text-3xl md:text-6xl font-bold text-center px-4"
          >
            Welcome to AnimeLovers 🎬
          </motion.h1>
        </div>
      </div>

  {/* Section 2: Featured Anime */}
  <div className="bg-white max-w-screen-2xl md:mx-20 mt-10 dark:bg-gradient-to-b dark:from-zinc-900 dark:via-zinc-800 dark:to-black text-black dark:text-white py-16 px-6 space-y-16 max-w-screen-2xl mx-auto flex flex-col items-center justify-center text-center">

  <h2 className="text-4xl font-bold text-center mb-10">🎬 Featured Anime Picks</h2>

  {/* Card 1 */}
  <div className="flex flex-col md:flex-row items-center gap-8">
    <motion.img
      src="https://i.ytimg.com/vi/qal34e9v_pk/maxresdefault.jpg"
      alt="Suzume"
      initial={{ opacity: 0, x: -90 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/3 h-72 object-cover rounded-xl shadow-lg"
    />
    <div className="md:w-1/2 text-center md:text-left">
      <h3 className="text-3xl font-semibold mb-4">Suzume</h3>
      <p className="text-lg text-gray-700">
      When Suzume stumbles upon a mystical door, her world turns upside down.
      As more doors open across Japan, unleashing disasters, she embarks on a
       magical quest to close them — discovering courage, connection and the beauty of letting go.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col md:flex-row-reverse items-center gap-8">
    <motion.img
      src="/Josse.jpg"
      alt="Josee"
      initial={{ opacity: 0, x: 90 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="w-full md:w-1/3 h-72 object-cover rounded-xl shadow-lg"
    />
    <div className="md:w-1/2 text-center md:text-left">
      <h3 className="text-3xl font-semibold mb-4">Josee,the tiger and the fish</h3>
      <p className="text-lg text-gray-700">
        A beautiful tale of love and personal growth between an aspiring marine biologist and a girl confined to a wheelchair.
        Together, they explore life beyond limits and boundaries.Josee, a spirited girl bound to her wheelchair, meets Tsuneo, a dreamer chasing the sea.
         Together, they navigate life’s challenges, building a bond that teaches them the meaning of freedom, passion, and love beyond limitations.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col md:flex-row items-center gap-8">
    <motion.img
      src="https://www.slugmag.com/wp/wp-content/uploads/2017/04/screen-shot-2016-11-27-at-1-42-50-pm.png"
      alt="Your Name"
      initial={{ opacity: 0, x: -90 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/3 h-72 object-cover rounded-xl shadow-lg"
    />
    <div className="md:w-1/2 text-center md:text-left">
      <h3 className="text-3xl font-semibold mb-4">Your Name</h3>
      <p className="text-lg text-gray-700">
      Your Name is a beautifully animated Japanese film directed by Makoto Shinkai.
       It follows the story of two strangers, Taki and Mitsuha, who mysteriously
        begin to swap bodies across time and space. As they experience each other’s lives,
         a deep bond forms between them — leading to a heartfelt journey of love, fate, and longing.

      </p>
    </div>
  </div>
</div>



      {/* Section 3: Anime Cards List */}
      <div className='bg-white dark:bg-black text-black dark:text-white px-6 py-12 max-w-screen-2xl md:mx-20 mt-10 mb-10 '>
          <Slider {...settings}>
  {anime.map((item) => (
    <Cards
      key={item._id}
      item={item}
      onClick={() => {
        document.activeElement.blur(); // ✅ Focus remove kare
        navigate(`/${item._id}`);
      }}
    />
    
  ))}
</Slider>

        
          </div>


      <Footer />
    </>
  );
}

export default Movies;
