import React from "react";

const Shop = ({ stack }) => {
  const goBack = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <div>
      <div className="card text-bg-success mb-3" style={{ maxWidth: "100%" }}>
        <div className="card-header">Shop</div>
        <div className="card-body">
          <h5 className="card-title">Thanks for shop us</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          {stack.map((item) => {
            return (
              <ul className="list-group list-group">
                <li className="list-group-item text-light bg-success mb-2">
                  {item.title}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <a href="#" onClick={goBack}>
        Go back!
      </a>
    </div>
  );
};

export default Shop;
