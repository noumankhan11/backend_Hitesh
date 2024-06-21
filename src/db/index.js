import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    // const connectionInstance = await mongoose.connect(
    //   `${process.env.MONGODB_URI}/${DB_NAME}`);
    const connnectionInstance = await mongoose.connect(
      "mongodb://127.0.0.1:27017/myapp"
    );

    console.log(`/n MongoDB connected !! DB Host : `);
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};

export default connectDb;
