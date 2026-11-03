import dotenv from 'dotenv';

dotenv.config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'
const app = express(); 

app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
 
}))

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
  })
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 3000;

app.get("/",(req, res")=>{
  res.send("Hello world");
}

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',recipeRouter)
app.listen(port, () => console.log(`server is running on port ${port}`));


