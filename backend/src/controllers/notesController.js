export const getAllNotes = (req,res)=>{
    res.status(200).send("You just fetched the notes");
}

export const createANote = (req,res) =>{
    res.status(201).json({message:"Post Created"});
}

export const updateNote = (req,res) => {
    res.status(201).json({message:"Post Updated"});
}

export const deleteNote = (req,res) => {
    res.status(201).json({message:"Post Deleted"});
}