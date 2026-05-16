# 📝 MERN Notes App

**Live Demo:** [https://goatnotes-8ypj.onrender.com/](https://goatnotes-8ypj.onrender.com/)

A full-stack, modern notes application built with the MERN (MongoDB, Express, React, Node.js) stack. Designed with a focus on clean architecture, responsive UI, and robust backend security including rate-limiting.

<br />
<p align="center">
  <img src="./assets/Screenshot%202026-05-16%20222019.png" width="30%" alt="Notes App Screenshot 1" />
  <img src="./assets/Screenshot%202026-05-16%20222040.png" width="30%" alt="Notes App Screenshot 2" />
  <img src="./assets/Screenshot%202026-05-16%20222056.png" width="30%" alt="Notes App Screenshot 3" />
</p>
<br />

## 🚀 Features

- **Complete CRUD Operations**: Seamlessly Create, Read, Update, and Delete notes.
- **Modern & Responsive UI**: Built with React, Tailwind CSS, and DaisyUI for a beautiful, accessible, and fully responsive user experience.
- **Global Rate Limiting**: Integrated Upstash Redis to implement robust API rate limiting, protecting the backend from abuse or spam requests.
- **Interactive Feedback**: Real-time toast notifications (via `react-hot-toast`) for user actions.
- **RESTful API**: Well-structured backend using Express.js following REST conventions.
- **Database Persistence**: MongoDB integration using Mongoose with automated timestamps for notes.

## 💻 Tech Stack

### Frontend
- **Framework**: React 19 (via Vite for lightning-fast HMR and builds)
- **Styling**: Tailwind CSS & DaisyUI
- **Routing**: React Router
- **HTTP Client**: Axios
- **Icons & UI**: Lucide React, React Hot Toast

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Security & Caching**: Upstash Redis
- **Environment**: dotenv, cors

## 📂 Project Structure

- `frontend/`: Contains the React application. Built using Vite, utilizing functional components, hooks, and modern routing.
- `backend/`: Contains the Express server, Mongoose models, controllers, and rate-limiting middleware.

## 🛠️ Installation & Setup

1. **Clone the repository**
2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```
3. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```
4. **Environment Variables**
   Create a `.env` file in the `backend` directory and add your keys:
   ```env
   # MongoDB connection string
   MONGO_URI=your_mongodb_connection_string
   
   # Upstash Redis credentials for rate limiting
   UPSTASH_REDIS_REST_URL=your_upstash_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_token
   ```
5. **Run the Application**
   - Backend: `npm run dev` (Runs on port 5001)
   - Frontend: `npm run dev` (Runs on port 5173)

## 💡 Highlights for Recruiters
- **Full-Stack Integration**: Successfully bridged a React frontend with an Express backend, ensuring smooth data flow via RESTful endpoints.
- **State & Routing**: Managed client-side routing with React Router and local state efficiently without over-engineering.
- **Security First**: Went beyond basic CRUD by implementing server-side rate limiting using Upstash Redis, demonstrating an understanding of production-ready API security and abuse prevention.
- **UI/UX Design**: Leveraged DaisyUI and Tailwind to create a polished, themeable interface rapidly, focusing on user experience through instant toast feedback and clean layouts.
