import axios from "axios";
const api = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api/notes" : "/api/notes",
});
export default api;