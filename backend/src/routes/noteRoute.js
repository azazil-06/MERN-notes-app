import express from "express"
import { createANote, deleteNote, getAllNotes, getNoteById, updateNote } from "../controllers/notesController.js";

const router = express.Router();


   //    '/' already includes /api/ in server.js
router.get("/", getAllNotes);

router.get("/:id", getNoteById);
    
//     (req,res)=>{
//     res.status(200).send("You just fetched the notes");
// } in notesController.js

router.post("/",createANote );
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);


export default router








//    VERSION 1

//     //route through localhost /api/
// app.get("/api/",(req,res)=>{ // if there is a request on /api/ then return this res
//     res.status(200).send("Hello 10") // sends this message as response 
// }); //when your browser requests


//    //create new note
// app.post("/api/", (req,res) => {
//     res.status(201).json({message:"Post Created"})
// })


// app.put("/api/:id", (req,res) => {
//     res.status(201).json({message:"Post Updated"})
// })

// app.delete("/api/:id", (req,res) => {
//     res.status(201).json({message:"Post Deleted"})
// })