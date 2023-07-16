import React from "react";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Api from "./components/Api";
import Toggle from "./components/Toggle";
import Timer from "./components/Timer";
import ImageGallery from "./components/ImageGallery";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Counter></Counter>
        <hr />
        <Form></Form>
        <hr />
        <Api></Api>
        <hr />
        <Toggle></Toggle>
        <hr />
        <Timer initializeTime={10}></Timer>
        <hr />
        <ImageGallery></ImageGallery>
      </div>
    </>
  );
}

export default App;
