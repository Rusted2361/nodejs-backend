import { configDotenv } from "dotenv";
import { application } from "express";
import mongoose from "mongoose";
import DB_NAME from "./constants.js";
import connectDB from "./db/index.js";

configDotenv(
    {
        path:'./env'
    }
)

connectDB()

.then(()=>{
    // application.on(
    //     "error", (error) => {
    //         console.log("ERR: ", error);
    //         throw error;
    //     })
    application.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
        console.log("Mongo connection failed");
})



/*
import express from 'express';
const app = express();

(
    async () => {
        try {
            mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on(
                "error", (error) => {
                    console.log("ERR: ", error);
                    throw error;
                })
            app.listen(process.env.PORT, () =>{
                console.log(`app is listening on PORT: ${process.env.PORT}`);
            })
        } catch (error) {
            console.error("ERROR :", error);
            throw err
        }
    
}) ()
*/