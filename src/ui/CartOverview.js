import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../utils/healper';

const CartOverview = () => {

    const cart = useSelector((state) => state.cart.cart);

    const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0);

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (
    <div className='fixed bottom-0 w-full font-mono flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base'>
        <div>
        <p className='space-x-4 font-semibold text-stone-300 sm:space-x-6'>
            Total Items: {totalItem}
        </p>
        <p className='space-x-4 font-semibold text-stone-300 sm:space-x-6'>
            Total Price: {formatCurrency(totalPrice)}
        </p>
        </div>
        
        <Link to={{pathname:'/signin/main/cart', state: {cart,totalPrice}}}>Open Cart &rarr;</Link>
    </div>
  )
}

export default CartOverview