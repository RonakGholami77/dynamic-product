import React from "react";
import Vector from "./Vector";
import Content from "./Content";
import Option from "./Option";

function Product(props) {
  const { id, category, image, price, title, description } = props;

  return (
    <div id={id} className="product">
      <Vector image={image} category={category} />
      <Content title={title} description={description} />
      <Option price={price} />
    </div>
  );
}

export default Product;
