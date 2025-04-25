import getAnimeVideo from "../controller/animevideocontroller.js";
import express from "express";
const router=express.Router();

router.get("/:id",getAnimeVideo);
export default router;