import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkoutleft">
          <img
            src="https://m.media-amazon.com/images/I/61aOT2LNRxL._SX3740_.jpg"
            className="checkout__ad"
          />
          <div className>
            <h2 className="checkout_title">Your shopping basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
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
