import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const AddSub = ({ id, handleAdd, handleSub }) => {
  return (
    <div className="cal">
      <a href="#" id={id} onClick={handleAdd}>
        <AiOutlinePlus></AiOutlinePlus>
      </a>
      <a href="#" id={id} onClick={handleSub}>
        <AiOutlineMinus></AiOutlineMinus>
      </a>
    </div>
  );
};

export default AddSub;
