import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Signin from './component/Sign';
import Signup from './component/Signup';
import Main from './component/Main';
import Cart from './component/Cart';
import OrderItem from './ui/OrderItem';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin/main' element={<Main />} />
          <Route path='/signin/main/cart' element={<Cart />} />
          <Route path='/signin/main/cart/order_cart' element={<OrderItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
