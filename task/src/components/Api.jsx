import React from "react";
import { useState, useEffect } from "react";
const Api = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };
  return (
    <>
      <h3>List from Api</h3>
      <div className="btn-group">
        <button
          className="btn btn-warning text-white btn-md dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          User's
        </button>
        {data ? (
          <ul className="dropdown-menu">
            {data.map((item) => (
              <li className="dropdown-item" key={item.id}>
                {item.login}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default Api;
