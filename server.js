import express from "express";
import cors from "cors";
//It allows your backend to be accessed from a different domain (like when your frontend runs on localhost:5173 and backend on localhost:5000).
import "dotenv/config";
//So this line ensures your app can read secret values (like PORT, MONGO_URI, etc.) stored in .env.
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";

const app=express();
const PORT=process.env.PORT || 3000;

//Database connection
await connectDB()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>
res.send("Server is live................"));
app.use("/api/users",userRouter)
app.use("/api/resumes",resumeRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
});