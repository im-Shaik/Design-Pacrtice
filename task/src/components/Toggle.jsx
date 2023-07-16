import React, { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <h3 className="mt-3">Toggle switch</h3>
      <button
        className="btn btn-warning text-white py-2 px-5"
        onClick={handleToggle}
      >
        {`${isOn ? "Switch - On" : "Switch - Off"}`}
      </button>
    </>
  );
};

export default Toggle;
