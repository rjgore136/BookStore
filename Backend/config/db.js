import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";

const connectDB = async () =>{
    try {
        await mongoose.connect(MONGO_URL);
        console.log("DB connected successfully ...");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;