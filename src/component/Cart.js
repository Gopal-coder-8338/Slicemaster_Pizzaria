import React, { useState } from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import ItemCart from './ItemCart'
import { useDispatch, useSelector } from 'react-redux';
import CartOverview from '../ui/CartOverview';
import { clearCart } from '../redux/CartSlice';
import toast, { Toaster } from 'react-hot-toast';
import { ClimbingBoxLoader } from 'react-spinners';
import Headerr from './Headerr';


const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cart)

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClear = () => {
      dispatch(clearCart());
      toast.success('Cart cleared successfully!');
    }

    const isCartEmpty = cartItems.length === 0;

    const handleBacTokMenu = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false)
        navigate('/signin/main')
      }, 3000);
    }
  return (
    <>
    <div className='font-mono text-slate-700 grid h-screen grid-rows-[auto_1fr_auto]'>
        <Headerr />

        {loading && (
          <div className='fixed inset-0 flex flex-col justify-center items-center bg-gray-800 bg-opacity-50 z-10'>
          <ClimbingBoxLoader cssOverride={{}} speedMultiplier={1} loading={loading} size={10} />
          <p>Loading...</p>
        </div>
        )}

        <div className={`mt-3 overflow-scroll overflow-x-hidden ${loading ? 'filter blur-sm' : ''}`}>
            <button onClick={handleBacTokMenu} to='/signin/main' className='text-blue-500 capitalize px-4 hover:underline
            text-md '>&larr; back to menu</button>
            <div className='px-4 py-3'>
              <h2 className='mb-5 text-xl font-semibold'>Your cart,</h2>  
                {cartItems.length > 0 ? (
                  cartItems.map((food) => {
                    return <ItemCart key={food.id} id={food.id} name={food.name} price={food.price} quantity={food.quantity} img={food.img} /> 
                  })
                ) : (
                  <div className='grid justify-center col-auto'>
                    <img src='/shopping.png' width="200px" alt='Empty Cart' /> <br />
                    <p className='text-red-500 font-semibold capitalize text-lg'>Your cart is empty.</p>
                  </div>
                )}
                
            </div>
        </div>

        <hr className='m-3' />

        <div className='flex gap-3 px-4 mb-24'>
          <Link to='/signin/main/cart/order_cart' className={`inline-block rounded-full font-semibold uppercase tracking-wide 
                        transition-colors duration-300 text-center disabled:cursor-not-allowed focus:outline-none 
                        focus:ring focus:ring-offset-2  px-4 py-2 text-sm md:px-6 md:py-4 
                        ${isCartEmpty ? 'bg-gray-300 cursor-not-allowed ' : 
                        'bg-yellow-400 text-stone-700 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300'}`}>
                          order pizzas
                          </Link>
          <button onClick={handleClear} className='inline-block rounded-full font-semibold border transition-all border-gray-500 uppercase tracking-wide 
                        transition-colors duration-300 text-center disabled:cursor-not-allowed focus:outline-none 
                        focus:ring focus:ring-offset-2 bg-white text-stone-700 hover:text-slate-600 hover:bg-gray-200
                        focus:bg-gray-300 focus:ring-gray-300 px-4 py-2 text-sm md:px-6 md:py-4 ms-3'>clear cart</button>
        </div>
    </div>
    <CartOverview />
    <Toaster />
    </>
  );
};

export default Cart;
