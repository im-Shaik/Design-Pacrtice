import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="counter mt-5">
        <h3>Counter</h3>
        <button
          type="button"
          className="btn btn-warning position-relative text-white"
          onClick={handleClick}
        >
          Counter
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {count}
            <span className="visually-hidden">increment</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
