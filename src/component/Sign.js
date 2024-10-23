
import React, { useState } from 'react'
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import data from '../data.json'

const Signin = () => {

    const [demo , setDemo] = useState(false);
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error , setError] = useState('');

    const navigate =  useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = data.user.find(user => user.email === email && user.password === password);

        if (user) {
            navigate('/signin/main');
        } else{
            setError('Your email and password is not matching');
        }
    };
  return (
    <div className='mx-auto font-mono flex w-full items-center justify-center p-2 min-h-screen max-w-3xl'>
        <div className='mx-auto bg-gray-300 px-12 py-12 rounded-lg shadow-xl'>
            <h1 className='text-center text-xl text-gray-700'>Login</h1>
            <div>
                <form className='w-full px-3 py-6 ' onSubmit={handleSubmit}>
                    <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} type='email' 
                    required name='email' 
                    className='rounded size-8 w-full lg:w-full p-1 outline-none'
                    placeholder="user@mail.com" />
                    <p className='mb-4'></p>
                    
                    <input 
                    value={password} 
                    required  
                    name='password' 
                    placeholder='Enter your password' 
                    type='password'
                    className='outline-none w-full lg:w-full size-8 rounded p-1' 
                    onChange={(e) => setPassword(e.target.value)} />
                     <p className='mb-4'></p>

                        {error && <p className='text-red-500 mb-4'>{error}</p>}

                     <div className='flex item-center justify-center'>
                        <Button type="primary" action="submit">Login</Button>
                     </div>
                </form>

                <div className='text-end mt-2 text-blue-700'>
                    <button onClick={() => setDemo((prev) => !prev)} 
                    className='capitalize underline underline-offset-1 transition duration-1000 ease-out'>
                    Are you looking for a demo account?
                    </button>
                    {
                        demo && (
                            <div className='m-1 space-y-1 text-center text-slate-900 transition duration-1000 ease-out'>
                                <p>email:<span className="text-blue-600">demo1@email.com</span></p>
                                <p>password:<span className="text-blue-600">demo1</span></p>
                            </div>
                        )
                    }
                </div>

                <div className='mt-4 text-center'>
                    <span>Don't Have An Account? </span>
                    <Link to='/signup'>
                        <span className='text-blue-700'> SignUp</span>
                        </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin