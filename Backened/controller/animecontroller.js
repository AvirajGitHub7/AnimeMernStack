import Anime from "../model/animemodel.js"

const getAnime=async (req,res)=>{
    try {
        const animelist= await Anime.find();
        res.status(200).json(animelist);
        
    } catch (error) {
        console.log("Error:",error);
        res.status(500).json(error);
    }
}
export default getAnime