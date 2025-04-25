import jwt from "jsonwebtoken"

export const isAdmin=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).send("Token missing");
    }

    try {
        const decoded = jwt.verify(token, "secret");
        if (decoded.role !== "admin") return res.status(403).send("Not authorized");
        req.user = decoded;   //website ko req as a variable jiske pass(id,email or role) hai bhej raha hai
        next();   //next route or middleware mai jana
      } catch (err) {
        res.status(400).send("Invalid token");
      }
};