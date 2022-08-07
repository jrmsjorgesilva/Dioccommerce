import mongoose from "mongoose";
import { Express } from 'express';
import dotenv from "dotenv";
dotenv.config();

const mongooseConnect = async (server: Express) => {
  const mongoUri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@restapiboilerplateclust.5vrtx.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(mongoUri);
    console.log("conectado com sucesso ao MONGO DB");
    return;
  } catch (error: any) {
    console.log("erro: ", error);
    throw new Error(error);
  }
};

export default mongooseConnect;
