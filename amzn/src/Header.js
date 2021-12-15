import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionline1">Hello</span>
          <span className="header__optionline2">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionline1">Returns</span>
          <span className="header__optionline2">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionline1">Your</span>
          <span className="header__optionline2">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionline2 header__BasketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
