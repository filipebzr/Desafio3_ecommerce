import React from "react";
import iconName from "../assets/images/Header/iconName.png";
import iconProfile from "/profile.svg";
import iconShop from "/shop.svg";

const Header = () => {
  return (
    <div className="h-[100px] w-full px-8 flex items-center justify-between">
      <img src={iconName} alt="Furniro icon" className="w-auto h-10" />

      <nav className="flex gap-10 font-bold">
        <a href="/" className="hover:border-b border-black hover:shadow-lg">
          Home
        </a>
        <a href="/shop" className="hover:border-b border-black hover:shadow-lg">
          Shop
        </a>
        <a href="/about" className="hover:border-b border-black hover:shadow-lg">
          About
        </a>
        <a href="/contact" className="hover:border-b border-black hover:shadow-lg">
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <div className="flex h-[24px] w-[24px] rounded-full shadow-lg justify-center items-center bg-white hover:text-gray-500">
          <a href="/profile">
            <img src={iconProfile} alt="" />
          </a>
        </div>
        <div className="flex h-[24px] w-[24px] rounded-full shadow-lg justify-center items-center bg-white hover:text-gray-500">
          <a href="/shop">
            <img src={iconShop} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
