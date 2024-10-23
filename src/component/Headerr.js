import React from 'react'
import { Link } from 'react-router-dom'

const Headerr = () => {

  return (
    <div > 
      <div className='flex w-full font-mono sm:tracking-widest items-center justify-between border-b border-stone-200
       bg-yellow-400 px-4 py-3 font-bold uppercase sm:px-6 text-gray-700'>
        <Link to='/'>Slicemaster Pizzeria</Link>
        <div>
            <input type='search' placeholder='Search order #' className='w-28 rounded-full px-4 py-2 text-sm 
            transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring
             focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72 bg-yellow-100' />
        </div>
    </div>
    </div>
  )
}

export default Headerr