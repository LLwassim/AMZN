import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkoutleft">
          <img
            src="https://m.media-amazon.com/images/I/61aOT2LNRxL._SX3740_.jpg"
            className="checkout__ad"
          />
          <div>
            <h2 className="checkout_title">Your Shopping basket</h2>
            <CheckoutProduct ></CheckoutProduct>
          </div>
        </div>
        <div className="checkoutright">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
