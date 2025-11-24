import React, { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    toggleSidebar();
    setIsDropdownOpen(false);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="close-btn" onClick={toggleSidebar}>
        <IoClose id="close-icon"/>
      </div>
      <ul>
        <li><Link to={"/"} onClick={closeSidebar}>Home</Link></li>

        <li className="dropdown" ref={dropdownRef}>
          <button className="dropdown-btn" onClick={toggleDropdown}>
            Pages ▾
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/store" onClick={closeSidebar}>Store</Link></li>
              <li><Link to="/blog" onClick={closeSidebar}>Blog</Link></li>
              <li><Link to="/licenses" onClick={closeSidebar}>Licenses</Link></li>
              <li><Link to="/changelog" onClick={closeSidebar}>Changelog</Link></li>
            </ul>
          )}
        </li>

        <li><Link to={"/about"} onClick={closeSidebar}>About</Link></li>
        <li><Link to={"/services"} onClick={closeSidebar}>Services</Link></li>
        <li><Link to={"/contact"} onClick={closeSidebar}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
