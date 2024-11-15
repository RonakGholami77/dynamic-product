import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Style.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        const response = res.json();
        return response;
      })
      .then((json) => {
        setData(json);
        console.log(json);
      });
  }, []);

  return (
    <div className="container">
      <div className="shop">
        {data.map((item, index) => {
          return <Product key={index} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;
