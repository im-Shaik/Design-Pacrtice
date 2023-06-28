import React from "react";

const Button = ({ children, type, isDisabled, byeNow }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      style={{
        cursor: "pointer",
        backgroundColor: "purple",
        outline: "none",
        display: "inline-flex",
        gap: "5px",
        alignItems: "center",
        border: "none",
        borderRadius: "15px",
        color: "white",
        padding: "15px 20px",
      }}
      className={"btn-shop"}
      onClick={byeNow}
    >
      {children}
    </button>
  );
};

export default Button;
