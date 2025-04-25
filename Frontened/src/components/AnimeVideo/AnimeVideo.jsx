import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams
import Login from "../Login";
import axios from "axios";

function AnimeVideo() {
  const { id } = useParams(); // Get ID from URL
  const [search, setSearch] = useState("");
  const [animeVideo, setAnimeVideo] = useState(null);

  useEffect(() => {
    const fetchAnimeVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/Anime/Animedetails/${id}`);
        setAnimeVideo(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchAnimeVideo();
  }, [id]);

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-900 shadow-md">
        <div className="container max-w-screen-2xl mx-auto px-4 md:px-20 flex items-center justify-between h-16">
          <Link to="/" className="text-3xl font-bold text-white">
            AnimeLover
          </Link>

          {/* Search Box */}
          <div className="flex items-center gap-4">
            <div className="join flex">
              <input
                className="input input-bordered bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
                placeholder="Search anime..."
              />
              <select className="select bg-gray-800 text-white border-l-0 border-r-0 rounded-none">
                <option disabled selected>Filter</option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
              <button className="btn bg-blue-600 hover:bg-blue-700 rounded-r-md">Search</button>
            </div>

            {/* Login Button */}
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
            >
              Login
            </button>
            <Login />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container max-w-screen-2xl mx-auto px-4 md:px-20 flex gap-6 py-8">
        {/* Left Sidebar */}
        <div className="left w-1/4 bg-gray-900 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">List of Episodes</h2>
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search episodes..."
              className="input input-bordered bg-gray-800 text-white pl-4 pr-10 py-2 w-full rounded-md"
            />
            <button className="absolute right-2 top-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="middle w-2/4 bg-gray-900 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl mb-5 font-bold">{animeVideo?.title || "Anime Video Section"}</h1>
         
          {/* Video Section */}
          {animeVideo?.videourl ? (
            <iframe
              width="100%"
              height="315"
              src={animeVideo.videourl}
              title="Anime Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          ) : (
            <p className="text-gray-500">No video available</p>
          )}
        </div>

        {/* Right Sidebar (Anime Details) */}
        <div className="right w-1/4 bg-gray-900 p-4 rounded-lg shadow-md">
          {animeVideo ? (
            <div className="flex flex-col items-center">
              <img
                className="w-full md:w-[300px] h-[200px] object-cover rounded-lg shadow-lg"
                src={animeVideo.imageurl}
                alt={animeVideo.title}
              />
              <h1 className="text-xl font-bold mt-4">{animeVideo.title}</h1>
              <p className="text-gray-400 text-sm">{animeVideo.aired || "Unknown Date"} • {animeVideo.type || "Anime"}</p>
              <p className="mt-2 text-gray-300 text-sm text-center">
                {animeVideo.description || "No synopsis available."}
              </p>
            </div>
          ) : (
            <p className="text-gray-500 text-center">Loading Anime Details...</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default AnimeVideo;


// ?.(optional chaining) for eg (animevideo?.title || videosection) agar title null or undefined ho error mat dena
// undefined dena kyu ki undefined hone se videosection  dikhana.