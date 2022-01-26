import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

//Link is used to create a clickable link or route you can follow
function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="header__option">
            <Link to="/login">
              <span className="header__optionline1">Hello, </span>
              <span className="header__optionline2">Sign In</span>
            </Link>
          </div>

          <div className="header__option">
            <span className="header__optionline1">Returns</span>
            <span className="header__optionline2">& Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionline1">Your</span>
            <span className="header__optionline2">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartOutlinedIcon />
              <span className="header__optionline2 header__optionBasketCount">
                {/* records basket length(items in basket) */}
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="subHeader">
        <div className="header__option">
          <span className="header__optionline23">Prime</span>
        </div>
        <div className="header__option">
          <span className="header__optionline23">Buy Again</span>
        </div>
        <div className="header__option">
          <span className="header__optionline23">Grocercies</span>
        </div>
        <div className="header__option">
          <span className="header__optionline23">Shopper Toolkit</span>
        </div>
        <div className="header__option">
          <span className="header__optionline23"> Health & Household </span>
        </div>
        <div className="header__option">
          <span className="header__optionline23"> Livestreams </span>
        </div>
        <div className="header__option">
          <span className="header__optionline23"> Beauty & Personal Care</span>
        </div>
        <div className="header__option">
          <span className="header__optionline23"> Coupons </span>
        </div>
        <div className="header__option">
          <span className="header__optionline23"> Amazon Launchpad </span>
        </div>
        <div className="header__option">
          <span className="header__optionline23">Pet Supplies</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
