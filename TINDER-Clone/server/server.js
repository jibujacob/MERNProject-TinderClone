import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import postRoutes from "./Routes/posts.js"

//App Config
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:"30mb",extended:true}));
app.use(cors());
dotenv.config();

const port = process.env.PORT;
const url = process.env.MONGO_DB_URL;

//API endpoints
app.use("/",postRoutes);

//Middleware
mongoose.connect(url)
    .then(app.listen(port,() => console.log("Successfully listening on port "+ port)))
    .catch((error) => console.log(error.message));





