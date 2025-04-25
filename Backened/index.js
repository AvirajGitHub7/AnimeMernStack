import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
const app=express();

import animeRoute from "./route/animeroute.js"
import useroute from "./route/useroute.js"
import videoroute from "./route/animevideoroute.js"
import emailSend from "./route/email.js"
import searchanimes from "./route/search.js"
import isAdminRoute from "./route/isAdminRoute.js"

import cors from "cors"

dotenv.config();
app.use(cors());


const PORT=process.env.PORT || 4000

const URI=process.env.MongoDBURI;

try {
    mongoose.connect(URI);
    console.log("Connected to mongodb");
} catch (error) {
    console.log("Error:",error);
}
app.use(express.json());

app.use("/Anime",animeRoute);
app.use("/user",useroute);
app.use("/Anime/Animedetails",videoroute);
app.use("/",emailSend);
app.use("/",searchanimes);

app.use("/",isAdminRoute);

app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
});