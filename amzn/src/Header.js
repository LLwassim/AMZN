import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

//Link is used to create a clickable link or route you can follow
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  console.log({ useState });
  const [{ basket }, dispatch] = useStateValue();
  const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
  `;
  const CustomClose = styled(CloseIcon)`
    cursor: pointer;
  `;
  const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
  `;
  const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  width: 300px;
  z-index 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0, .2)
  }
  a {
      font-weight: 600;
  }
`;

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
          <CustomMenu onClick={() => setBurgerStatus(true)} />

          <span className="header__optionline23">All</span>
        </div>
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
      <BurgerNav show={burgerStatus}>
        <li>Trending</li>
        <li>Best Sellers</li>
        <li>New Releases</li>
        <li>Movers and Shakers</li>
        <li>Digital Content</li>
        <li>Prime Video</li>
        <li>Amazon Music</li>
        <li>Fire TV</li>
        <li>Kindle</li>
        <li>Echo & Alexa</li>
        <li>Fire Tablets</li>
        <li>Amazon Photos</li>
        <li>AWS Courses</li>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
      </BurgerNav>
    </div>
  );
}

export default Header;
