import mongoose from "mongoose"
import config from "./config.js"

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("MongoDB Database Connected")
    } catch (error) {
        console.log("Database connection error: ", error)
    }
}

export default connectDB;