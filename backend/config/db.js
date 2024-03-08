import mongoose from "mongoose";

export default async function connectDB() {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);

        const url = `${db.connection.host}:${db.connection.port}`;
        
        console.log(`MongoDB connected in: ${url}`);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}