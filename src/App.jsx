import React from "react";
import Product from "./Product";

function App() {
  return (
    <div className="container">
      {DataTransfer.map((item, index) => {
        return <Product {...item} />;
      })}
    </div>
  );
}

export default App;
