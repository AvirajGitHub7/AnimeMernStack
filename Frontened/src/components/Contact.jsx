import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { PiTelegramLogo } from "react-icons/pi";
import { TiWorldOutline } from "react-icons/ti";


function Contact() {
  const [formData,setformdata]=useState({name:"",email:"",subject:"",message:""});

  const handleChange=(e)=>{
    setformdata({...formData ,[e.target.name]:e.target.value });
   
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4001/sendMail", formData);
    
      if (res.data.success) {
        setformdata({ name: "", email: "", subject: "", message: "" });
      } else {
        console.log("Email not sent");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  


  return (
    <>
      <Navbar />
      <main className="min-h-[80px] flex flex-col justify-center items-center md:pt-20 bg-gray-100 mt-10">
        {/* <h1 className="text-3xl font-bold text-center mt-6 mb-6">Contact Page</h1> */}

        <div className="max-w-4xl w-full bg-white shadow-lg border rounded-lg flex flex-col md:flex-row p-6 mb-10">
          {/* Left Side - Form */}

          <div className="w-full md:w-2/5 p-6 order-2 ">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <label className="block text-gray-600 text-sm mb-2">Full Name</label>
            <input
              value={formData.name} onChange={handleChange}
              type="text"
              name="name"
              placeholder="Name"
              className="w-full border border-gray-300 p-2 text-sm rounded-md mb-4 focus:none "
            />

            <label className="block text-gray-600 text-sm mb-2">Email Address</label>
            <input
              value={formData.email} onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 text-sm rounded-md mb-4 focus:ring-2 "
            />

            <label className="block text-gray-600 text-sm mb-2">Subject</label>
            <input
               value={formData.subject} onChange={handleChange}
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full border border-gray-300 p-2 text-sm rounded-md mb-4 focus:ring-2 "
            />

            <label className="block text-gray-600 text-sm mb-2">Message</label>
            <textarea
               value={formData.message} onChange={handleChange}
              placeholder="Your Message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 p-3 text-sm rounded-md mb-4 focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-md text-white font-semibold transition">
              Send Message
            </button>

          </form>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-3/5 flex justify-center items-center p-6 order-1 md:order-2">
            <img
              src="/suzume.jpg"
              alt="Contact"
              className="w-[400px] h-[450px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-wrap flex-col md:flex-row gap-4 md:gap-0 items-center justify-between w-full max-w-2xl mt-6 px-6 mb-20 ">
  <div className="flex flex-col  items-center gap-2">
    <IoLocationOutline className="rounded-full border-2 border-blue-400 bg-blue-100 p-2 text-4xl" />
    <p className="text-gray-700 font-medium">Guwahati, Kahilipara</p>
  </div>

  <div className="flex flex-col items-center gap-2">
    <IoCallOutline className="rounded-full border-2 border-blue-400 bg-blue-100 p-2 text-4xl" />
    <p className="text-gray-700 font-medium">+91 8399901995</p>
  </div>

  <div className="flex flex-col items-center gap-2">
    <PiTelegramLogo className="rounded-full border-2 border-blue-400 bg-blue-100 p-2 text-4xl" />
    <p className="text-gray-700 font-medium">avi@gmail.com</p>
  </div>

  <div className="flex  flex-col items-center gap-2">
    <TiWorldOutline className="rounded-full border-2 border-blue-400 bg-blue-100 p-2 text-4xl" />
    <p className="text-gray-700 font-medium">This Website</p>
  </div>
       </div>



      </main>
      <Footer/>
    </>
  );
}

export default Contact;
