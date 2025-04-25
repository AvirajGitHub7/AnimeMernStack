
import animelists from "../model/animemodel.js"

const animesearch=async(req,res)=>{
    const {query}=req.query;
    if(!query){
       return res.json([]);
    }
   try {
    const anime=await animelists.find({name:{$regex:query,$options:"i"}}).limit(10);  // regex means regular expression , i is for case-insentive search
    res.json(anime);
   } catch (error) {
     res.status(500).json({message:"Internal Server Error"});
   }
}
export default animesearch