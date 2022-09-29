import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoute from "./routes/auth.js";

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connect to mongodb");
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server api is running on port 5000");
});
