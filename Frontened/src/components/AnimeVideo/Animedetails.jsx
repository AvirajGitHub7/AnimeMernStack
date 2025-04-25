import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Login from "../Login";
import Footer from "../Footer";
import Navbar from "../Navbar";
import axios from "axios";

function Animedetails() {
  const [search, setSearch] = useState("");
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/Anime/Animedetails/${id}`);
        console.log("API Response:", res.data);
        setAnimeDetails(res.data);
      } catch (error) {
        console.log("Error fetching anime details:", error);
      }
    };

    fetchAnimeDetails();
  }, [id]);

  return (
    <>
      <nav className="bg-gray-900 text-white shadow-md">
        <div className="container max-w-screen-2xl mx-auto px-4 md:px-20 flex items-center justify-between h-16">
          <Link to="/" className="text-3xl font-bold text-white">
            AnimeLover
          </Link>

          {/* Search Box */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search anime..."
                className="input input-bordered bg-gray-800 text-white pl-4 pr-10 py-2 rounded-md"
              />
              <button className="absolute right-2 top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
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

      <main className="bg-gray-950 text-white py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Section - Image */}
          <div className="md:col-span-2 flex flex-col items-center">

            {animeDetails && (
              <img className="w-64 h-96 sm:w-72 sm:h-[400px] md:w-[400px] md:h-[300px] object-cover rounded-lg shadow-lg" src={animeDetails.imageurl} alt="Anime Image" />
            )}
            <h1 className="text-3xl font-bold mt-4">{animeDetails?.moviename || "Loading..."}</h1>
            <p className="text-gray-400"> {animeDetails?.aired} • Movie • {animeDetails?.duration}</p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <Link to={`/watch/${id}`}>
                <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white font-semibold">
                  ▶ Watch Now
                </button>
              </Link>
              <button className="bg-gray-700 hover:bg-gray-800 px-6 py-2 rounded-md text-white font-semibold">
                + Add to List
              </button>
            </div>
          </div>

          {/* Right Section - Anime Details */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-red-500">Anime Details</h2>
            {animeDetails ? (
              <>
                <p><strong>Japanese:</strong> {animeDetails.japanese}</p>
                <p><strong>Aired:</strong> {animeDetails.aired}</p>
                <p><strong>Duration:</strong> {animeDetails.duration}</p>
                <p><strong>Status:</strong> {animeDetails.status}</p>
                <p><strong>MAL Score:</strong> {animeDetails.score}</p>
                <p><strong>Genres:</strong> {animeDetails?.genres?.length ? animeDetails.genres.join(", ") : "N/A"}</p>
                <p><strong>Studios:</strong> {animeDetails.studios}</p>
                <p><strong>Director:</strong> {animeDetails.director}</p>
                <p className="mt-4 text-gray-300 text-sm">{animeDetails.description}</p>
              </>
            ) : (
              <p className="text-gray-400">Loading anime details...</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Animedetails;


// Backend (Mongoose Schema) Fix:

// genres: String ko genres: [String] banaya.
// Frontend Fix:

// animeDetails?.genres?.length ? animeDetails.genres.join(", ") : "N/A" likhne se agar genres ek array hai, toh usko comma-separated format mai convert karega.
// Agar genres empty ya undefined hai, toh "N/A" show karega.