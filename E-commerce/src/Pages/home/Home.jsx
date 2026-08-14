import React, { useState } from 'react';
import Nav from '../../Component/Nav/Nav';
import bg from "../../assets/bg0.gif";
import "./Home.css"
import { catogoare } from '../../catogore';
import Product from '../../Component/product/Product';
import {dummydata} from "../../dummydata";
const Home = () => {
  const [cat,setCat] = useState(dummydata);
  function filterProduct (catogoare){
    const updateData = dummydata.filter((item)=>(item.category===catogoare))
    setCat(updateData);
  }
  return (
    <div className='home'>
      <div className="hero-bg">
        <img src={bg} alt="" />
      </div>
      <div className="catogore-section">
      {catogoare.slice(1,6).map((item)=>(
         <div className="catogore-cart" onClick={()=>{
          filterProduct(item.name)
         }}>
          <img src={item.Image}  />
          <span>{item.name}</span>
         </div>
      ))}
      </div>
      <h1>Tranding Product</h1>
       <div className="product-section">
        {cat.slice(0,5).map((item)=>(
          <Product key={item.id} name={item.name} price={item.price} image={item.image}/>
        ))}
       </div>
       
    </div>
  )
}

export default Home