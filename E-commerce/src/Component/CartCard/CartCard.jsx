import React from 'react'
import "./CartCard.css";
import { CiSquareRemove } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';
const CartCard = ({name,price,image,id}) => {
    const dispatch = useDispatch()
  return (
    <div className='cartcard'>
        <div className="lesf-card">
         <img src={image} alt="" />
         <div className="name-price">
            <span>{name}</span>
            <span>Rs{price}/-</span>
         </div>
        </div>
        <div className="right-card">
          <button onClick={()=>{
            dispatch(RemoveItem(id))
          }}>Remove <CiSquareRemove /></button>
        </div>
    </div>
  )
}

export default CartCard