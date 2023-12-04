import { Console } from "console";
import mongoose from "mongoose";

const mongoString = process.env.DATABASE_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoString!);
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};

export default connectDB;
