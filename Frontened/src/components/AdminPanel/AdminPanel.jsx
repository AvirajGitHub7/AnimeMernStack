import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar';

function AdminPanel() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    try {
      await axios.post("http://localhost:4001/addAdmin", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success("Anime added!");
      reset();
    } catch (err) {
      toast.error("Failed to add anime");
    }
  };

  return (
    <>
      <Navbar />
      <div
  className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-6"
  style={{
    backgroundImage: `url('https://img.freepik.com/premium-photo/night-sky-with-milky-way_553012-22918.jpg')`,
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */} {/*inset-0 is equivalent to:top:0; right:0; bottom:0; left:0;*/}
  <div className="relative z-10 ">
    <div className="w-full max-w-xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl mt-10  p-8"> 
      <h1 className="text-3xl font-extrabold text-center mb-4 text-blue-600">📺 Add New Anime</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-black">
        <input {...register("name")} placeholder="Name" className="input input-bordered w-full" required />
        <input {...register("category")} placeholder="Category" className="input input-bordered w-full" required />
        <input {...register("title")} placeholder="Title" className="input input-bordered w-full" required />
        <input {...register("rating")} type="number" step="0.1" placeholder="Rating" className="input input-bordered w-full" required />
        <input {...register("image")} placeholder="Image URL" className="input input-bordered w-full" required />
        
        <button type="submit" className="btn btn-primary w-full py-2 text-lg">🚀 Add Anime</button>
      </form>
    </div>
  </div>
</div>

    </>
  );
}

export default AdminPanel;
