import React, { useState } from "react";
import WebsiteLogo from "../assets/image/Logo/Business Breath Logo.png";
import { HiBars2 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SlideOutMenu from "./SlideOutMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container flex justify-between items-center py-8">
      <div className="column">
        <Link to='/'>
          <img src={WebsiteLogo} alt="Main Logo" />
        </Link>
      </div>
      <div className="column">
        <Link>
          <HiBars2 className="text-4xl" onClick={toggleMenu} />
        </Link>
      </div>
      <SlideOutMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
};

export default Header;
