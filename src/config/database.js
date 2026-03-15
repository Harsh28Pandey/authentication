import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/auth`)
        console.log("MongoDB Database Connected")
    } catch (error) {
        console.log("Database connection error: ", error)
    }
}

export default connectDB;