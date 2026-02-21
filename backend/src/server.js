import express from "express";
import noteRoute from "./routes/noteRoute.js";

const app = express();


app.use("/api/",noteRoute);  //launch noteRoute on that api


                    //return requests
app.listen( 5001, () => {
    console.log("Server stared on port 5001");
});




