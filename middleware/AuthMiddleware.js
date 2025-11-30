import jwt from "jsonwebtoken"

const protect=async (req,res,next) => {
    const token = req.headers.authorization;//So this line simply reads the token from the request.
    if(!token){
        return res.status(401).json({message:"Unauthorized"});

    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)//Try to verify the token
        req.userId =decoded.userId;
        //"Store the logged-in user’s ID in the request, so next functions can know which user is logged in."
        next();

    }catch(error){
        return res.status(401).json({message:"Unauthorized"})

    }
    
}

export default protect;