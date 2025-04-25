import express from "express"
import nodemailer from "nodemailer"
import dotenv from "dotenv";

dotenv.config();
const router=express.Router();
router.use(express.json());


router.post("/sendMail", async(req,res)=>{
  const {name,email,subject,message}=req.body;

  const transporter=nodemailer.createTransport({
    service:"gmail",
    port:465,
    secure:true,
    auth:{
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASSWORD
    }
  });

  const receiver={
    from:process.env.EMAIL_USER,
    to:"avirajseal@gmail.com",
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSubject:${subject}`,

  };

  try {
    await transporter.sendMail(receiver);
    res.status(200).json({ success: true, message: "Email Sent Successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Email Failed to Send", error });
  }

});

export default router