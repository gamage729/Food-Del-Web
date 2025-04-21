import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LogingPopup from './components/LogingPopup/LoginPopup';
import StoreContextProvider from './context/StoreContext'; 


const App = () => {

  const[showLoging,setShowLoging] = useState(false)
  return (
    <StoreContextProvider>  
    <>
    {showLoging?<LogingPopup setShowLoging={setShowLoging}/>:<></>}
      <div className='app'>
        <Navbar setShowLoging={setShowLoging}/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/cart' element= {<Cart/>} />
          <Route path='/order' element= {<PlaceOrder/>} />
        </Routes>
      
        
      </div>
      <Footer/>
    
    </>
    </StoreContextProvider>
    
  )
}

export default App
