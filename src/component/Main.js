import React, { useState } from 'react'
import Maincart from './Maincart'
import products from '../products'
import Header from './Header'
import toast, { Toaster } from 'react-hot-toast';


const Main = () => {
  const handleToast = (name) => toast.success(name);

  const [searchItem , setSearchItem] = useState('');
  
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <div>
      <div className='fixed top-0 w-full'>
        <Header setSearchItem={setSearchItem} />
      </div>
      <br />
      <br />
      <br />
      {
        products.map((product) => {
          return <Maincart
            key={product.id} 
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            desc={product.desc}
            handleToast={handleToast}
            searchItem={searchItem}
          />
          
        })
      }
      
      <br />
      {/* <p className='mb-10'></p>
      <CartOverview /> */}
    </div>
    </>
  )
}

export default Main