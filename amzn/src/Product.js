import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, price, image, rating, title }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* Creates Multiple Stars in rating prop */}
          {Array(rating)
            .fill()
            .map((_i) => (
              <p>☆</p>
            ))}
        </div>
      </div>

      <img src={image}></img>
      {/* when I click on buton add to basket */}
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
}

export default Product;
