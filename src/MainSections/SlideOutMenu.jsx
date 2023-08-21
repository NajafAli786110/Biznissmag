import React from "react";
import { Link } from "react-router-dom";
import "./SlideOutMenu.css";
import WebsiteLogo from '../assets/image/Logo/Business Breath Logo.png';

const SlideOutMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`slide-out-menu ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="menu-content">
        <img src={WebsiteLogo} alt="Logo" className="mb-10"/>
        <ul className="menu-list gap-8 flex flex-col">
          <li>
            <Link to="/" className="text-4xl">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-4xl" >About</Link>
          </li>
          <li>
            <Link to="/services" className="text-4xl">Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SlideOutMenu;
