import React from "react";
// i use a scss file
import "./index.scss";
import Header from "./components/Header";
import Card from "./components/Card";

const App = () => {
  /* this is empty for having header cart
   we click a add to cart while add a stuff to this stack */
  const stack = [];

  // collection of stuff
  // i use unsplash site for image
  const stuff = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Nike-H10",
      description: "Fit to your style as a Nike...",
      price: 1000,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike-H20",
      description: "Fit to your style as a Nike...",
      price: 800,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Nike-H30",
      description: "Fit to your style as a Nike...",
      price: 380,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1524532787116-e70228437bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike-H40",
      description: "Fit to your style as a Nike...",
      price: 180,
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike-H50",
      description: "Fit to your style as a Nike...",
      price: 380,
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike-H60",
      description: "Fit to your style as a Nike...",
      price: 2180,
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike-H70",
      description: "Fit to your style as a Nike...",
      price: 1180,
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike-H80",
      description: "Fit to your style as a Nike...",
      price: 3180,
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike-H90",
      description: "Fit to your style as a Nike...",
      price: 5180,
    },
    {
      id: 10,
      img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHNob2VzJTIwbmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Nike-H100",
      description: "Fit to your style as a Nike...",
      price: 8180,
    },
  ];
  return (
    // main section
    <main>
      {/* header */}
      <header>
        <div className="container">
          {/* this gonna take props a stuff of collection and empty stack */}
          <Header stuff={stuff} stack={stack} />
        </div>
      </header>
      {/* card wrapper */}
      <div className="div-wrapper">
        {/* this section for showing stuff
        i use .map function coz having through items */}
        {stuff.map((items) => {
          // and i through a props this section
          // .map > items and empty stack
          // go to card component!
          return <Card key={items.id} items={items} stack={stack} />;
        })}
      </div>
    </main>
  );
};

export default App;
