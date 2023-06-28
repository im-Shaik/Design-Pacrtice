import React from "react";
import ReactDOM from "react-dom/client";
import AddSub from "./AddSub";
import Button from "./Button";
import Shop from "./Shop";
import { AiFillShopping } from "react-icons/ai";

const ShowCart = ({ total, stack }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    stack.map((item) => {
      if (Number(e.currentTarget.id) === item.id) {
        total += item.price;
      }
    });
    return (document.querySelector(
      ".cal-total"
    ).innerHTML = `$Price : ${total.toFixed(2)}`);
  };
  const handleSub = (e) => {
    e.preventDefault();
    stack.map((item) => {
      if (Number(e.currentTarget.id) === item.id) {
        total -= item.price;
      }
    });
    return (document.querySelector(
      ".cal-total"
    ).innerHTML = `$Price : ${total.toFixed(2)}`);
  };

  const byeNow = () => {
    if (stack.length <= 0) {
      alert("Stack is empty so first add your cart!....");
    } else {
      ReactDOM.createRoot(document.querySelector("main")).render(
        <React.StrictMode>
          <Shop stack={stack}></Shop>
        </React.StrictMode>
      );
    }
  };

  return (
    <>
      <div className="back-wrapper">
        <div>
          <a href="#" onClick={handleClick}>
            <i className="fa-solid fa-arrow-left"></i>
          </a>
        </div>

        <div className="total">
          <h3 className="cal-total">$Price : {total.toFixed(2)}</h3>
        </div>

        <div>
          <a href="#">
            <i className="fa-solid fa-cubes"></i>
            {stack.length}
          </a>
        </div>
      </div>
      <div className="show-wrapper">
        {stack.map((item) => {
          return (
            <div key={item.id} className="card-wrapper">
              <div className="box">
                <div className="img">
                  <img src={item.img} alt="img" />
                </div>
                <div className="box-content">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <p>Price : ${item.price.toFixed(2)}</p>
                  <div className="cal">
                    <AddSub
                      id={item.id}
                      handleAdd={handleAdd}
                      handleSub={handleSub}
                    ></AddSub>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="shop-wrapper">
        <Button byeNow={byeNow} type={"button"} version={"success"}>
          <AiFillShopping></AiFillShopping> Buy Now
        </Button>
      </div>
    </>
  );
};
export default ShowCart;
