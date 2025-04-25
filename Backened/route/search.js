import express from "express"
import animesearch from "../controller/searchcontroller.js"
const router=express.Router();

router.get("/search",animesearch);
export default router