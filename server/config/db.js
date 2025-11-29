import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database Connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/movieticketbooking`);
  } catch (error) {
    console.log("Mongodb connection failed" + error);
  }
};

export default connectDB;
