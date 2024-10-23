import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, removeFromCart } from '../redux/CartSlice';

const UpdateCartQuantity = ({id,quantity, onDelete, onIncrese,onDecrease }) => {

  const dispatch = useDispatch();

  const decreseClick = () => {
    dispatch(decrement({ id }))
    onDecrease();
  }
  const increseClick = () => {
    dispatch(increment({ id }))
    onIncrese();
  }
  const handleDelete = () => {
    dispatch(removeFromCart(id));
    onDelete();
  }
  return (
    <div>
      <div>
        <button onClick={decreseClick} className='inline-block rounded-full font-semibold uppercase tracking-wide
         transition-colors duration-300 text-center disabled:cursor-not-allowed focus:outline-none
          focus:ring focus:ring-offset-2 bg-yellow-400 text-stone-800 hover:bg-yellow-300
           focus:bg-yellow-300 focus:ring-yellow-300 px-4 py-2 text-sm md:px-4 md:py-2 me-2'
           >
          -
        </button>
        <span className='text-sm font-bold'>{quantity}</span>
        <button onClick={increseClick} className='inline-block rounded-full font-semibold uppercase tracking-wide transition-colors
         duration-300 text-center disabled:cursor-not-allowed focus:outline-none focus:ring 
         focus:ring-offset-2 bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300
          focus:ring-yellow-300 px-4 py-2 text-sm md:px-4 md:py-2 ms-2'
          >
          +
        </button>
        <button 
          className='inline-block rounded-full font-semibold uppercase tracking-wide 
          transition-colors duration-300 text-center disabled:cursor-not-allowed focus:outline-none 
          focus:ring focus:ring-offset-2 bg-yellow-400 text-stone-800 hover:bg-yellow-300
           focus:bg-yellow-300 focus:ring-yellow-300 px-4 py-2 text-sm md:px-4 md:py-3 ms-3'
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UpdateCartQuantity;
