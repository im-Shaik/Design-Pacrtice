import React from "react";
// import reactDom coz when we click a cart button to load this showcart component
import ReactDOM from "react-dom/client";
import ShowCart from "./ShowCart";
const Header = ({ stack }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // this is total amount of cart in center
    let total = 0;
    // validation of stack less than 0 na alert a message
    if (stack.length <= 0) {
      alert("No stocks please back!");
    } else {
      // else cal a total price
      stack.map((items) => {
        total += items.price;
      });
    }
    // this is render a new page
    ReactDOM.createRoot(document.querySelector("main")).render(
      <React.StrictMode>
        {/* this new page 
        go to showcart component */}
        <ShowCart key={stack.id} total={total} stack={stack} />
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
        {/* this event using cart */}
        <a href="#" onClick={handleClick}>
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </nav>
  );
};

export default Header;
