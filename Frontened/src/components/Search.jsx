import React, { useState, useEffect } from 'react';
import { useSearch } from '../context/SearchProvider';
import axios from 'axios';
import Cards from './Cards';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Search() {
    const navigate = useNavigate();
    const { query ,setquery} = useSearch();
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:4001/search?query=${query}`)
            .then((res) => setResult(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [query]);

    return (
        <>
        

            <div className="bg-gray-900 min-h-screen flex flex-col items-center p-8">
         
           
                {/* Navbar */}
                <div className="navbar bg-gray-800 shadow-lg rounded-lg px-6 py-3 mb-6 w-full max-w-5xl flex justify-between">
                    <a className="text-2xl font-bold text-white cursor-pointer">AnimeLover</a>
                    <div className="flex items-center gap-4">
                        <input 
                            type="text" 
                            placeholder="Search anime..." 
                            className="input input-bordered w-32 md:w-56 px-3 py-2 rounded-md text-gray-800 focus:outline-none"
                        />
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 h-10 rounded-full border-2 border-gray-500">
                                    <img src="Josse.jpg" alt="User" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-800 text-white rounded-lg w-48">
                                <li><a className="hover:bg-gray-700 p-2 rounded-md">Profile</a></li>
                                <li><a className="hover:bg-gray-700 p-2 rounded-md">Settings</a></li>
                                <li><a className="hover:bg-red-600 p-2 rounded-md">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <h2 className="text-3xl font-bold text-white mb-6">
                    Results for <span className="text-blue-500">"{query}"</span>
                </h2>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
                        {result.length > 0 ? (
                            result.map((item) => (
                             
                              <Cards
                                  item={item}
                                  onClick={() => {
                                      document.activeElement.blur();
                                      navigate(`/${item._id}`);
                                  }}
                                  className="transition-all transform hover:scale-105 hover:shadow-lg rounded-md bg-gray-800 text-white w-full h-full"
                              />
                          
                            ))
                        ) : (
                            <p className="text-gray-400 text-lg">No results found.</p>
                        )}
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}

export default Search;
