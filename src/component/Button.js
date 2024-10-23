import React from 'react'
import { Link } from 'react-router-dom';


const Button = ({ children , type}) => {

    const base =
    'inline-block rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 text-center disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-offset-2';

  // Adjustments for different button types
  const styles = {
    primary: `${base} bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 px-24 py-3 text-base md:px-8 md:py-3`,
    primaryy: `${base} bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 px-4 text-sm py-2 text-base md:text-sm md:px-4 md:py-1`, // Larger button size for mobile
    small: `${base} bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 px-4 py-2 text-sm md:px-5 md:py-3`, // Smaller button option
    round: `${base} bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 px-4 py-2 text-sm md:px-6 md:py-3 rounded-full`, // Rounded button style
    secondary: `${base} border-2 border-stone-300 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:ring-stone-200 px-24 py-3 md:px-8 md:py-3 text-base` // Secondary button style with larger size
  };
    
    

    
  return (
    <button className={styles[type]}>
        {children}
    </button>
  )
}

export default Button