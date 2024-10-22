import mongoose from "mongoose";

export const connectToDB = async () => {
    try {
        const database = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DATABASE_NAME}`);
        console.log(`connected to ${database.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}