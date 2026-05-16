import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import noteRoute from "./routes/noteRoute.js";
import { connectDB } from "./config/database.js";
import ratelimiter from "./middleware/rateLimit.js";

const app = express();
dotenv.config();



app.use(cors({
    origin:"http://localhost:5173",
}));
//middleware  parse json body b4 response
app.use(express.json());
app.use(ratelimiter);


app.use("/api/",noteRoute);  //launch noteRoute on that api,   response

//connect db then start application
connectDB().then(()=>{
                    //return requests
app.listen( 5001, () => {
    console.log("Server stared on port 5001");
});

});


