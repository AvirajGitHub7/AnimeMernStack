import React from 'react'
import Home from "./components/home/Home"
import Webseries from './components/Webseries';
import {Routes,Route} from "react-router-dom"
import Signup from './components/Signup';

  function App(){
  return (
    <>
      {/* <Home/>
      <Course/> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Webseries" element={<Webseries/>} />
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </>
  );
}

export default App
