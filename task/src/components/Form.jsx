import React from "react";
import { useRef } from "react";

const Form = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const messageRef = useRef();
  const handleSubmit = () => {
    alert(`
            Name : ${nameRef.current.value}
            Email : ${emailRef.current.value}
            Password : ${passwordRef.current.value}
            Message : ${messageRef.current.value}
            `);
  };
  return (
    <div>
      <h3>From control</h3>
      <form action="#">
        <div className="form-floating mb-3">
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mt-3">
          <textarea
            ref={messageRef}
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <div className="d-grid col-4 mt-4 mx-auto">
          <button
            className="btn btn-warning text-white"
            type="button"
            onClick={handleSubmit}
          >
            Button
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
