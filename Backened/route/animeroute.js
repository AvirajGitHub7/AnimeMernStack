import getAnime from "../controller/animecontroller.js"
import express from "express"

const router=express.Router();

router.get("/",getAnime);
export default router;