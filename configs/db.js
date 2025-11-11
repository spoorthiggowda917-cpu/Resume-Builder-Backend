import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on("connected",()=>{
            console.log("Database connected successfully")
            //Represents the current connection to MongoDB.
            
        })
        
        let mongodbURI=process.env.MONGODB_URI;//This stores your MongoDB connection link in a variable.
        const projectName="Resume_Builder";

        if(!mongodbURI){
            throw new Error("MONGODB_URI environment variable not sent");
            
        }

        if(mongodbURI.endsWith("/")){
            mongodbURI=mongodbURI.slice(0,-1)
        }
        await mongoose.connect(`${mongodbURI}/${projectName}`)
        //${mongodbURI}/${projectName} → Combines the base URI and database name into a full connection string.

    }catch(error){
        console.error("Error connecting to MongoDB:",error);
        

    }
    
}

export default connectDB