export function formatDate(date) {
   
    if (!date) return ""; 
    
   
    const parsedDate = new Date(date);

   
    if (isNaN(parsedDate.getTime())) {
        return "Invalid Date";
    }

    return parsedDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        
        year: "numeric",
    });
}