import React, { useState } from "react";
import ShowCart from "./ShowCart";
import App from "../App";

const Button = () => {
  //   let total = 0;
  //   if (stack.length <= 0) {
  //     console.log("hello");
  //   } else {
  //     stack.map((items) => {
  //       total += items.price;
  //     });
  //   }
  const [showComponents, setShowComponents] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowComponents(true);
    console.log("From button components");
  };

  return (
    <div className="cart">
      <a href="#" onClick={handleClick}>
        <i className="fa-solid fa-cart-shopping"></i>
      </a>
      {showComponents && (
        <main>
          {/* Components to be shown */}
          <div className="div-wrapper">
            <ShowCart />
          </div>
        </main>
      )}
    </div>
  );
};

export default Button;
