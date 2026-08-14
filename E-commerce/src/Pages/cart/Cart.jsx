import React, { useState } from 'react'
import "./Cart.css";
import CartCard from '../../Component/CartCard/CartCard';
import {useSelector} from "react-redux"
import ec from "../../assets/emptycart.png"
const Cart = () => {
    const cartItems = useSelector((state) => state.cart || []);
    let total =cartItems.reduce((a,b)=>a+b.price,0);
  return (
    <div className='cart'>
        {cartItems.length<=0? <div className='empty-cart'>
            <img src={ec} alt="" />  
            <h1>Empty Cart </h1>
        </div>:
        <div className="cartcard-section">
            {cartItems.map((items,index)=>(
                <CartCard name={items.name} image={items.image} price={items.price} id={index}/>
            ))}
            <div className="price-section">
                <span>Total product : {cartItems.length}</span>
                <span>Total price :{total}</span>
            </div>
        </div>

         }
    </div>
  )
}

export default Cart