import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.NEXT_PUBLIC_MONGO_URI) {
      throw new Error("NEXT_PUBLIC_MONGO_URI not found");
    }
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);
    if (mongoose.connection.readyState === 1) {
      console.log("Successfully connected to MongoDB");
    } else {
      console.log("Failed to establish a connection to MongoDB");
    }
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
