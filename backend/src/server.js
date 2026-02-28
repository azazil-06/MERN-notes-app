import express from "express";
import noteRoute from "./routes/noteRoute.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//middleware
app.use(express.json())

app.use("/api/",noteRoute);  //launch noteRoute on that api

connectDB();
                    //return requests
app.listen( 5001, () => {
    console.log("Server stared on port 5001");
});




