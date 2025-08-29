import mongoose from "mongoose";
import { DB_URI, DB_NAME } from "./env.js";

const dbConnect = async () => {
   try{

    await mongoose.connect(DB_URI);
    console.log("MongoDB Connected Successfully !!!!!!");

   } 
   catch(error){
    console.error("MongoDB Connection error : ", error);
    process.exit(1);
   }
}

export default dbConnect;