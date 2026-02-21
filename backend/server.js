import express from "express";

const app = express();

    //route through localhost /api/
app.get("/api/",(req,res)=>{ // if there is a request on /api/ then return this res
    res.status(200).send("Hello 10") // sends this message as response 
}); //when your browser requests


   //create new note
app.post("/api/", (req,res) => {
    res.status(201).json({message:"Post Created"})
})


app.put("/api/:id", (req,res) => {
    res.status(201).json({message:"Post Updated"})
})

app.delete("/api/:id", (req,res) => {
    res.status(201).json({message:"Post Deleted"})
})








                    //return requests
app.listen( 5001, () => {
    console.log("Server stared on port 5001");
});




