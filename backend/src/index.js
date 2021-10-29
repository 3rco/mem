import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import apiRouter from "./routes";

dotenv.config();

const MONGODB = process.env.MONGODB || "mongodb://localhost/mem";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("🛰  MongoDB connected!");
  })
  .catch((error) => {
    console.log("🔥 MongoDB connection failed!\n", error);
  });

const server = express();

server.options("*", cors());

server.use(cors());
server.use(express.json());
server.use('/api', apiRouter);

server.listen(PORT, (err) => {
  if (err) {
    console.log(`Error : ${err}`);
    process.exit(-1);
  }
  console.log(`🚀 Server runing Port: ${PORT}...`);
});
