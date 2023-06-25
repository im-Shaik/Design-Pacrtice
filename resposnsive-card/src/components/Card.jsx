import React from "react";
import Header from "./Header";
const Card = ({ items, stack }) => {
  const pushCart = () => {
    if (stack === null) {
      stack.push(items);
    }
    if (stack.id !== items.id) {
      stack.push(items);
    }
    return <Header stack={stack} />;
  };

  return (
    <div className="card-wrapper">
      <div className="box">
        <div className="img">
          <img src={items.img} alt="img" />
        </div>
        <div className="box-content">
          <h2>{items.title}</h2>
          <p>{items.description}</p>
          <p>Price : ${items.price.toFixed(2)}</p>
          <button onClick={pushCart}>
            <i className="fa-solid fa-cart-shopping"></i>Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
