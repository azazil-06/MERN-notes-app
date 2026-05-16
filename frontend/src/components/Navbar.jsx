import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-primary font-sans tracking-tighter'>gOATnoTes</h1>
                <div className='flex items-center gap-4'>
                    <Link to={"/create"}  className='btn border-none bg-gray-350 text-primary hover:bg-gray-300 rounded-full flex items-center gap-2 shadow-sm '>

                   
                    <PlusIcon className='size-5'/>
                    <span className='font-bold'>New Note</span>
                    </Link>
                </div>
            </div>

        </div>
      
    </header>
  )
}

export default Navbar
