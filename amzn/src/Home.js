import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://m.media-amazon.com/images/I/61HyZqthVEL._SX3000_.jpg"
          />
          <div className="home__row">
            <Product
              id="12213443"
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
              price={29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={3}
            />
            <Product
              id="59043343"
              title="Will Audible Logo Audible Audiobook – Unabridged"
              price={23.99}
              image="https://m.media-amazon.com/images/I/61gS6EWmWwL.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="20966963"
              title="Resistance Bands, Exercise Workout Bands for Women and Men, 5 Set of Stretch Bands for Booty Legs"
              price={12.0}
              image="https://m.media-amazon.com/images/I/71ue-wJsmuS._AC_SL1500_.jpg"
              rating={5}
            />
            <Product
              id="89075890"
              title="BalanceFrom GoYoga All-Purpose 1/2-Inch Extra Thick High Density Anti-Tear Exercise Yoga Mat with Carrying Strap"
              price={17.02}
              image="https://m.media-amazon.com/images/I/81bDVYz4OrL._AC_UL320_.jpg"
              rating={4}
            />
            <Product
              id="63448433"
              title="Liquid I.V. Hydration Multiplier - Passion Fruit - Hydration Powder Packets | Electrolyte Drink Mix | Easy Open Single-Serving Stick | Non-GMO"
              price={17.99}
              image="https://m.media-amazon.com/images/I/71N4DD1NKpL._AC_SL1500_.jpg"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="59454413"
              title="Echo Dot (3rd Gen) bundle with Amazon Smart Plug - Charcoal"
              price={47.99}
              image="https://m.media-amazon.com/images/I/61A6bOdVrHS._AC_SL1000_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
