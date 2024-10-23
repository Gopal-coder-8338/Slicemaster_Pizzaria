import React, { useState } from 'react'
import Headerr from '../component/Headerr'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/CartSlice';

const OrderItem = () => {   

    const [firstname, setFirstname] = useState('');
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('');
    const [checked, setChecked] = useState(false);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if(checked && firstname && mobile && address) {
            toast.success(`Thanks for your order , ${firstname}`)
        } else {
            toast.error('Please fill out all fields and confirm your order.')
        }
    }

    const handleOrder = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false)
          navigate('/signin/main')
          dispatch(clearCart());
        }, 3000);
      }

  return (
    <div>
        <Headerr />
        {loading && (
          <div className='fixed inset-0 flex flex-col justify-center items-center bg-gray-800 bg-opacity-50 z-10'>
          <ClimbingBoxLoader cssOverride={{}} speedMultiplier={1} loading={loading} size={10} />
          <p>Loading...</p>
        </div>
        )}
        <form onSubmit={handleSubmit} className={`${loading ? 'filter blur-sm' : ''}`}>
        
        <div>
            <h2 className='md:text-2xl md:mb-8 text-gray-700 font-serief tracking-widest px-4 py-5 font-semibold'>Ready to order? Let's go!</h2>
        </div>
        <div className="mb-5 font-mono text-lg px-4 flex flex-col gap-10 sm:flex-row sm:items-center">
            <label className='sm:basis-40'>First Name</label>
            <input 
                className='input grow shadow-lg border
                 border-gray-300 md:size-12 rounded-full px-4 py-2 text-sm 
            transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring'
                type='text'
                name='customer'
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />
        </div>
        <div className="mb-5 font-mono text-lg px-4 flex flex-col gap-10 sm:flex-row sm:items-center">
            <label className='sm:basis-40'>Phone Number</label>
            <input 
                className='input grow shadow-lg border
                 border-gray-300 md:size-12 rounded-full px-4 py-2 text-sm 
            transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring'
                type='number'
                name='mobile'
                onChange={(e) => setMobile(e.target.value)}
            />
        </div>
        <div className="mb-5 font-mono text-lg px-4 flex flex-col gap-10 sm:flex-row sm:items-center">
            <label className='sm:basis-40'>Address</label>
            <input 
                className='input grow shadow-lg border
                 border-gray-300 md:size-12 rounded-full px-4 py-2 text-sm 
            transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring'
                type='type'
                name='address'
                onChange={(e) => setAddress(e.target.value)}    
            />
        </div>
        <div className='flex font-mono flex-row px-4 mb-6'>
            <input onChange={(e) => setChecked(e.target.checked)} required type='checkbox' className='input border
                 border-gray-300 md:size-6' /> 
            <p className='ms-6 md:text-lg'>Are you sure want to order?</p>
        </div>
        <div className='px-4'>
            <button onClick={handleOrder} type='submit' className='className="inline-block  rounded-full font-semibold uppercase tracking-wide 
                  transition-colors duration-300 text-center focus:outline-none
                   focus:ring focus:ring-offset-2 bg-yellow-400 text-stone-800 hover:bg-yellow-300
                    focus:bg-yellow-300 focus:ring-yellow-300 px-4 py-4 text-sm md:px-5 md:py-3"'>oreder now</button>
                
        </div>
        </form>
        <Toaster />
    </div>
  )
}

export default OrderItem