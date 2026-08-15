import React from 'react'
import Home from './Pages/home/home'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './Component/Nav/Nav'
import Footer from './Component/Footer/Footer'
import Shop from './Pages/Shopes/Shop'
import Cart from './Pages/cart/Cart'
import Contact from './Pages/Contact/Contact'
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     <Footer/>

     </BrowserRouter>
    </>
  )
}

export default App