import React from 'react';
import { FaShopify } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import "./Nav.css";
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"

const Nav = () => {
  const dispatch = useDispatch();
 const cartItems = useSelector(state => state.cart || []);
  return (
    <header className="nav-container">
      {/* Top Main Bar */}
      <div className="top-name">
       <Link to="/"> <div className="logo">
          <FaShopify className="logo-icon" />
          <span>V-Shop</span>
        </div></Link>

        <form className="search-box" >
          <input type="text" placeholder="Search products, brands, and categories..." />
          <button type="submit" aria-label="Search">
            <FaMagnifyingGlass />
          </button>
        </form>

       <Link to={"/cart"}> <div className="cart-box">
          <div className="icon-wrapper">
            <CiShoppingCart />
            <span className="cart-badge">{cartItems.length}</span>
          </div>
          <span className="cart-text">Cart</span>
        </div>
        </Link>
      </div>

      {/* Bottom Navigation Links */}
      <nav className="bottom-name">
        <ul>
         <Link to="/"><li>Home</li></Link>
         <Link to="/shop"><li>shop</li></Link>
         <Link to="/cart"><li>cart</li></Link>
         <Link to="/contact"><li>contact</li></Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;