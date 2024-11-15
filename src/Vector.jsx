import React from "react";

function Vector(props) {
  const { image, category } = props;

  return (
    <div className="vector">
      <img src={image} alt={category} />
    </div>
  );
}

export default Vector;
