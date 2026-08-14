import React, { useState } from 'react'
import { FaShopify } from "react-icons/fa";
import "./shop.css";
import { catogoare } from '../../catogore';
import { dummydata } from '../../dummydata';
import Product from '../../Component/product/Product';
const Shop = () => {
    const [cat,setCat] = useState(dummydata);
      function filterProduct (catogoare){
        if(catogoare === "All"){
            setCat(dummydata);
        }else{
            const updateData = dummydata.filter((item)=>(item.category===catogoare))
        setCat(updateData);
        }
       
      }
  return (
    <div className='shop'>
        <div className="heading">
            <span>Shop<FaShopify/></span>
        </div>
      <div className="catogore-section">
            {catogoare.map((item)=>(
               <div className="catogore-cart" onClick={()=>{
                filterProduct(item.name)
               }}>
                <img src={item.Image}  />
                <span>{item.name}</span>
               </div>
            ))}
            </div>
             <div className="product-section">
                    {cat.map((item)=>(
                      <Product key={item.id} name={item.name} price={item.price} image={item.image}/>
                    ))}
                   </div>
    </div>
  )
}

export default Shop