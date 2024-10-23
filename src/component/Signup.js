import React, { useState } from 'react'
import Button from './Button'
//import Loader from '../ui/Loader'
import { Link, useNavigate  } from 'react-router-dom';

const Signup = () => {

    const [demo , setDemo] = useState(false);

  return (
    <div className='mx-auto font-mono flex w-full items-center justify-center p-2 min-h-screen max-w-3xl'>
        <div className='mx-auto bg-gray-300 px-12 py-12 rounded-lg shadow-xl'>
            <h1 className='text-center text-xl text-gray-700'>Signup</h1>
            <div>
                <form className='w-full px-3 py-6 '>
                <input type='text' 
                    
                     name='username' className='rounded size-8 w-full lg:w-full p-1 outline-none' placeholder="username" />
                     {/* {errors.usename && <p className='mb-4 text-red-500'>Username required</p>} */}
                    <p className='mb-4'></p>

                    <input type='email' 
                    
                     name='email' className='rounded size-8 w-full lg:w-full p-1 outline-none' placeholder="user@mail.com" />
                     {/* {errors.email && <p className='mb-4 text-red-500'>Email is required</p>} */}

                    <p className='mb-4'></p>
                    
                    <input name='password' placeholder='Enter your password' type='password'
                     className='outline-none w-full lg:w-full size-8 rounded p-1' />
                     {/* {errors.password && <p className='text-red-500 mb-4'>Password required</p>} */}
                     <p className='mb-4'></p>
                     <div className='flex item-center justify-center'>
                        <Button type="primary" action="submit">Signup</Button>
                     </div>
                </form>

                <div className='text-end mt-2 text-blue-700'>
                    <button onClick={() => setDemo((prev) => !prev)} 
                    className='capitalize text-center underline underline-offset-1 transition duration-1000 ease-out'>
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
                    <span>Already have an account </span>
                    <Link to='/signin'>
                        <span className='text-blue-700'> Signin</span>
                        </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup