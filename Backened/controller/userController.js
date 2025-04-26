import User from "../model/usermodel.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

 export const signup=async (req,res)=>{
    try {
        const{fullname,email,password}=req.body;
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exits"})
        }
        const hashPassword=await bcryptjs.hash(password,10);
        const createUser=new User({
             fullname,
             email,
             password:hashPassword,
        });
        await createUser.save();
        res.status(201).json({message:"User Created successfully", user:{
          _id:createUser.id,
          email:createUser.email,
          fullname:createUser.fullname}});
        
    } catch (error) {
        console.log("Error: "+ error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

export const login=async(req,res)=>{
    try{
      const{email,password}=req.body;
      const existingUser= await User.findOne({email});

      if (!existingUser) {
        return res.status(400).json({ message: "User not found" });
      }
      const passwordMatch=await bcryptjs.compare(password,existingUser.password);

      if( !passwordMatch){
        return res.status(400).json({message:"Incorrect password"});
      }else{

         /* token set */
         const token = jwt.sign({ id: existingUser._id, role: existingUser.role }, "secret");
    
  

        res.status(200).json({
            message:"login successfull",
            token,
            role:existingUser.role,
            user:{
            _id:existingUser.id,
            email:existingUser.email,
            fullname:existingUser.fullname
        }})

       
      }
    }catch(error){
      console.log("Error:"+ error.message)
      res.status(500).json({message:"Internal Server Error"});
    }
}

// Google login

export const googlelogin=async(req,res)=>{
 try {
  const {email,name,picture}=req.body;
  let existinguser=await User.findOne({email});

  let newuser;
  if(!existinguser){
    newuser= await User.create({
      fullname:name,
      email,
      picture,
      password:" "
    })
  }else{
    newuser=existinguser
  }
  const token=jwt.sign({id:newuser._id,role:newuser.role},"secret")

  res.status(200).json({
    message: "Google login successful",
    token,
    role: newuser.role,
    user: {
      _id: newuser._id,
      email: newuser.email,
      fullname: newuser.fullname,
      picture: newuser.picture,
    },
  });
 } catch (error) {
  console.log("Google Login Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
 }
}