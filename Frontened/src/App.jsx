import React from 'react'
import Home from "./components/home/Home"
import Webseries from './components/Webseries';
import {Routes,Route, Navigate} from "react-router-dom"
import Signup from './components/Signup';
import toast, { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider.jsx"
import Animedetails from './components/AnimeVideo/Animedetails.jsx';
import AnimeVideo from './components/AnimeVideo/AnimeVideo.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Search from './components/Search.jsx';
import { SearchProvider } from './context/SearchProvider.jsx';
import Movies from './components/Movies.jsx';
import AdminPanel from './components/AdminPanel/adminpanel.jsx';

  function App(){
    const [authuser,setauthuser]=useAuth();
  return (
    <>
      < SearchProvider>
      <Routes>
        <Route path='/search' element={<Search/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/watch/:id" element={<AnimeVideo/>}/>
        <Route path="/:id" element={<Animedetails/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/Webseries" element={authuser?<Webseries/>:<Navigate to= "/Signup"/>} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/addanime" element={<AdminPanel/>}/>
      </Routes>
      
      </SearchProvider>
      <Toaster />
    </>
  );
}

export default App
