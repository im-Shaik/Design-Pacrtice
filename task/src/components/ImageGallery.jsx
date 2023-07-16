import React from "react";
import { useState } from "react";

const allImage = [
  {
    id: 1,
    category: "food",
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    category: "food",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    category: "food",
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    category: "marvel",
    src: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFydmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 5,
    category: "marvel",
    src: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcnZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    category: "marvel",
    src: "https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxtYXJ2ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 7,
    category: "food",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
const ImageGallery = () => {
  const [selected, setSelected] = useState("all");
  const handleChange = (category) => {
    setSelected(category);
  };

  const filletedImg =
    selected === "all"
      ? allImage
      : allImage.filter((img) => img.category === selected);

  return (
    <>
      <h3 className="mt-3">Image Gallery</h3>
      <div className="buttons d-flex gap-4">
        <button
          onClick={() => {
            handleChange("all");
          }}
          className="btn btn-warning text-white py-2 px-3"
        >
          All
        </button>
        <button
          onClick={() => {
            handleChange("marvel");
          }}
          className="btn btn-warning text-white py-2 px-3"
        >
          Marvel
        </button>
        <button
          onClick={() => {
            handleChange("food");
          }}
          className="btn btn-warning text-white py-2 px-3"
        >
          Food
        </button>
      </div>
      <div
        className="mt-4 images d-flex flex-wrap gap-3"
        style={{ width: "18rem" }}
      >
        {filletedImg.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.category}
            className="img-thumbnail"
          />
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
