import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/SearchSharp";
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="h-14 flex items-center bg-[#131921] relative sticky top-0 z-[100] py-6">
        <Link to="/">
          <img
            className="w-[100px] object-contain mt-[18px] mx-[20px]"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
          />
        </Link>
        <div className=" flex flex-1 items-center ">
          <input className="w-full h-8" type="text" />
          {/* logo */}
          <SearchIcon className="bg-[#cd9042] p-1 w-32 h-32" />
        </div>
        <div className="header__nav flex justify-between">
          <div className="header__option flex flex-col ml-2.5 mr-2.5">
            <span className="header__optionLineOne text-white text-sm">
              Hello Guest
            </span>
            <span className="header__optionLineTwo text-white">Sign In</span>
          </div>
          <div className="header__option flex flex-col ml-2.5 mr-2.5">
            <span className="header__optionLineOne text-white text-sm">
              Hello Guest
            </span>
            <span className="header__optionLineTwo text-white">Sign In</span>
          </div>
          <div className="header__option flex flex-col ml-2.5 mr-2.5">
            <span className="header__optionLineOne text-white text-sm">
              Returns
            </span>
            <span className="header__optionLineTwo text-white">& Order</span>
          </div>
          <Link to="/checkout" className="flex items-center">
            <div className="header__optionBasket">
              <ShoppingCart className="cart" />
              <span className="text-white mr-5">0</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
