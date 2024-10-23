import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../utils/healper';
import { addToCart, increment, removeFromCart } from '../redux/CartSlice';
import UpdateCartQuantity from '../ui/UpdateCartQuantity';
import CartOverview from '../ui/CartOverview';

const Maincart = ({ id, name, price, img, desc, handleToast, searchItem}) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart.cart.find((item) => item.id === id));

  // State to toggle between Add to Cart and Update Cart Quantity
  const [inCart, setInCart] = useState(!!cartItem);

  useEffect(() =>  {
    setInCart(!!cartItem);
  }, [cartItem])

  // Function to handle adding the item to the cart
  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, desc, quantity: 1, img }));
    handleToast(`${name} added in cart`);
    setInCart(true); // Set state to true to show update button
  };

  // Function to handle removing the item from the cart
  const handleRemoveFromCart = () => {
   // dispatch(removeFromCart(id));
    handleToast(`${name} removed from the cart`);
    setInCart(false); // Set state to false to show Add to Cart button again
  };

  const handleIncrease = () => {
    handleToast(`${name} added`);
  }
  const handledecrease = () => {
    handleToast(`${name} removed`)
  }
  if(name.toLowerCase().includes(searchItem.toLowerCase())) {

    return (
      <>
      <div className="mx-auto max-w-3xl font-mono">
        <li className="flex gap-4 py-2">
          <img src={img} className="h-24" alt={name} />
          <div className="flex grow flex-col pt-0.5">
            <p className="font-medium">{name}</p>
            <p className="text-sm capitalize text-stone-500 italic">{desc}</p>
  
            <div className="mt-auto flex items-center justify-between">
              <p className="text-sm">&#8377;{price}</p>
  
              {/* Conditionally render Add to Cart or Update Cart Quantity */}
              {inCart ? (
                <UpdateCartQuantity id={id} quantity={cartItem?.quantity || 1} onDelete={handleRemoveFromCart} onIncrese={handleIncrease} onDecrease={handledecrease}   />
              ) : (
                <button
                  className="inline-block rounded-full font-semibold uppercase tracking-wide 
                  transition-colors duration-300 text-center disabled:cursor-not-allowed focus:outline-none
                   focus:ring focus:ring-offset-2 bg-yellow-400 text-stone-800 hover:bg-yellow-300
                    focus:bg-yellow-300 focus:ring-yellow-300 px-4 py-2 text-sm md:px-5 md:py-3"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
                
              )}
            </div>
          </div>
        </li>
        <hr />
        
      </div>
      <div>
        {inCart ? (
          <CartOverview />
        ) : (
          <></>
        )}
      </div>
      </>
    );
  } else {
    return null;
  }
};

export default Maincart;
