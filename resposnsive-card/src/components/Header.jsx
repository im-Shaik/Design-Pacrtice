import React from "react";
import ReactDOM from "react-dom/client";
import ShowCart from "./ShowCart";
const Header = ({ stuff, stack }) => {
  const handleClick = (e) => {
    e.preventDefault();
    let total = 0;
    if (stack.length <= 0) {
      alert("No stocks please back!");
    } else {
      stack.map((items) => {
        total += items.price;
      });
    }
    ReactDOM.createRoot(document.querySelector("main")).render(
      <React.StrictMode>
        <ShowCart total={total} stack={stack} />
      </React.StrictMode>
    );
  };
  return (
    <nav>
      <div className="logo">
        <h2>shoppY</h2>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Catagories</a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-user"></i> You
            </a>
          </li>
        </ul>
      </div>
      <div className="cart">
        <a href="#" onClick={handleClick}>
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
