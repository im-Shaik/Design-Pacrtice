import React from "react";
import Header from "./Header";
// this card have two props
// 1. .map items
// 2. empty stack coz when we click a add to cart button to store the stack
const Card = ({ items, stack }) => {
  // this function is add to cart button
  const pushCart = () => {
    // this condition is true push a items
    if (stack === null) {
      stack.push(items);
    }
    // this condition validate a stack.id and items.id its not matching can't allow duplicate items
    if (stack.id !== items.id) {
      stack.push(items);
    }
    // this header section have stack props
    // go to header section
    return <Header stack={stack} />;
  };

  return (
    // this wrapper showing stuff
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
