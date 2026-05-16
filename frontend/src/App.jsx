import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import CreatePage from './pages/CreatePage'
import NoteDetail from './pages/NoteDetail'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="garden">
    
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#FF69B440_100%)]" />
      <Routes> 

        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/create' element={<CreatePage/>}></Route>
        <Route path='/note/:id' element={<NoteDetail/>}/>
      
      </Routes>
    </div>
  )
}

export default App

