import React from "react";
import "./Product.css";

function Product({ id, price, image, rating, title }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong> 
        </p>
        <div className="product__rating"> 
        {/* Creates Multiple Stars in rating prop*/}
          {Array(rating)
            .fill()
            .map((_i) => (
              <p>☆</p>
            ))}
        </div>
      </div>

      <img src={image}></img>
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
