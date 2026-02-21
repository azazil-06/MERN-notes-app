import express from "express";

const app = express();

    //route through localhost /api/
app.get("/api/",(req,res)=>{ // if there is a request on /api/ then return this res
    res.send("Hello") // sends this message as response 
}); //when your browser requests

                    //return
app.listen( 5001, () => {
    console.log("Server stared on port 5001");
});




