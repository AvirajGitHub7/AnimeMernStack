import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer"

function About() {
  return (
    <>
     <Navbar/>
     <main className="min-h-screen flex flex-col items-center justify-center pt-16 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold text-center mb-6 mt-10">About Us</h1>

        <div className="max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome to <span className="font-semibold text-blue-400">AnimeVerse</span>, 
            your one-stop platform for anime lovers! Here, you can explore, 
            watch, and discuss your favorite anime with a passionate community.
          </p>

          <div className="mt-6">
            <img
              src="/josse2.jpg"
              alt="About AnimeVerse"
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-6 text-blue-400">Why Choose Us?</h2>
          <p className="text-gray-400 mt-2">
            ✅ Ad-free streaming <br />
            ✅ HD Quality & Fast Servers <br />
            ✅ Latest Anime Updates <br />
            ✅ Community Discussions
          </p>

          <h2 className="text-2xl font-semibold mt-6 text-blue-400">Our Mission</h2>
          <p className="text-gray-400 mt-2">
            Bringing anime fans together in a seamless, engaging, and ad-free experience.
          </p>

<div className="cards flex flex-col md:flex-row items-center gap-8 mt-8">

<div className="card w-64 h-72 glass">
  <figure><img src="/suzume.jpg" alt="Founder"/></figure>
  <div className="card-body">
    <h2 className="card-title">Ryuto Takashi</h2>
    <p>Founder of AnimeLover, bringing the best anime content to fans worldwide.</p>

  </div>
</div>

<div className="card w-64 h-72 glass">
  <figure><img src="/josse2.jpg" alt="Co-Founder"/></figure>
  <div className="card-body">
    <h2 className="card-title">Hana Mitsuki</h2>
    <p>Co-Founder, dedicated to expanding the AnimeLover community globally.</p>
   
  </div>
</div>

<div className="card w-64 h-72 glass">
  <figure><img src="/Josse.jpg" alt="Managing Director"/></figure>
  <div className="card-body">
    <h2 className="card-title">Kenji Nakamura</h2>
    <p>Managing Director, ensuring top-quality anime content and user experience.</p>
    
  </div>
</div>

</div>


        </div>
      </main>

   <Footer/>
    </>
  )
}

export default About
