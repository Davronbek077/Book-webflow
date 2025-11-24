import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import navImg1 from "../../assets/face.png";
import navImg2 from "../../assets/twit.png";
import navImg3 from "../../assets/in.png";
import { LuShoppingCart } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router-dom";
import CartModal from "../cartModal/CartModal";
import "./Navbar.css";

const Navbar = ({ cartCount, cartItems, onRemoveFromCart, onQtyChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const closeDropdown = () => setIsDropdownOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo-wrap">
            <div className="menu-icon" onClick={toggleSidebar}>
              <FaBars />
            </div>
            <div className="logo">
              <img src={logo} alt="logo" />
              <h3>Pages</h3>
            </div>
          </div>

          <div className="nav-icons">
            <a href="https://www.facebook.com/" target="_blank"><img src={navImg1} alt="facebook" /></a>
            <a id="tw" href="https://x.com/" target="_blank"><img src={navImg2} alt="twitter" /></a>
            <a href="https://www.linkedin.com/" target="_blank"><img src={navImg3} alt="linkedin" /></a>
          </div>

          <ul className="navbar-list">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="dropdown-btn">
                Pages ▾
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/store" onClick={closeDropdown}>Store</Link></li>
                  <li><Link to="/blog" onClick={closeDropdown}>Blog</Link></li>
                  <li><Link to="/licenses" onClick={closeDropdown}>Licenses</Link></li>
                  <li><Link to="/changelog" onClick={closeDropdown}>Changelog</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="nav-btn">
            <div className="cart-btn" onClick={toggleCart}>
              <LuShoppingCart id="cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
            <div className="order-btn">
              <button>Order Today</button>
            </div>
          </div>
        </div>
      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cartItems}
        onRemove={onRemoveFromCart}
        onQtyChange={onQtyChange}
      />

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
