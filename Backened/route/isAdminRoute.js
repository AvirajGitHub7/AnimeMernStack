import express from "express"
import { isAdmin } from "../middleware/isAdmin.js"
import anime from "../model/animemodel.js"

const router=express.Router();

//Adding anime in database
router.post("/addAdmin",isAdmin, async (req,res)=>{
  try {
    const newAnime= new anime(req.body);
    newAnime.save();
    res.status(201).send("Anime added successfully");
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
})


export default router