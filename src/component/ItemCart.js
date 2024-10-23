import React from 'react'
import UpdateCartQuantity from '../ui/UpdateCartQuantity';
import { useDispatch } from 'react-redux';
import { decrement, increment, removeFromCart } from '../redux/CartSlice';

const ItemCart = ({id, quantity, name, price, img}) => {

  const dispatch = useDispatch();
  
  const decreseClick = () => {
    dispatch(decrement({ id }))
  }
  const increseClick = () => {
    dispatch(increment({ id }))
  }
  const handleDelete = () => {
    dispatch(removeFromCart(id));
  }

  const totalPrice = price * quantity


  return (
    <div className='md:flex justify-between font-semibold shadow-sm p-2 mb-3'>
      <div className='flex items-center text-slate-600'>
          <img className='rounded shadow-lg' src={img} alt={name} width="60px" height="60px"  />
          <h3 className='ms-3 capitalize md:text-lg'> {name}  X  {quantity}</h3>
      </div>
      <div>
          <h2 className='inline-block me-10 md:text-lg text-slate-600'>&#8377; {totalPrice}</h2>
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
                        focus:ring-yellow-300 px-4 py-2 text-sm md:px-4 md:py-2 md:ms-2 ms-2'
                        >
                        +
                      </button>
                      <button 
                        className='inline-block rounded-full font-semibold uppercase tracking-wide 
                        transition-colors duration-300 text-center disabled:cursor-not-allowed focus:outline-none 
                        focus:ring focus:ring-offset-2 bg-yellow-400 text-stone-700 hover:bg-yellow-300
                        focus:bg-yellow-300 focus:ring-yellow-300 px-4 py-2 text-sm md:px-4 md:py-3 ms-3'
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
        </div>
    </div>
  )
}

export default ItemCart