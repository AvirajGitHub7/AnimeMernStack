import { signup,login,googlelogin } from "../controller/userController.js";
import express from "express"

 const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/googlelogin",googlelogin);
export default router;