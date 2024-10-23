
import React from 'react';
import { Link } from 'react-router-dom';

const Firstpage = () => {
    
  return (
    <div>
        <div className="h-screen max-w-full bg-costum-image bg-cover font-mono
         bg-bottom px-4 text-center text-slate-100">
            <div className='pt-36'>
              <h1 className='py-8 text-xl font-semibold md:text-3xl'>Crafting Pizza Perfection <br /> 
              <span className='text-yellow-500'>Straight out of the oven, straight to you.</span>
              </h1> 
              <Link to='/signin'>Please Login To Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Firstpage