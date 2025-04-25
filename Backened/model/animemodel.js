import mongoose from "mongoose";

const AnimeSchema=mongoose.Schema({
    name:String,
    category: String,
    title:String,
    rating: Number,
    image: String
});
const Anime=mongoose.model("Anime",AnimeSchema);
export default Anime;