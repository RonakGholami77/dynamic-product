import React from "react";

function Option(props) {
  const { price } = props;
  return (
    <div className="option">
      <div>{price}</div>
      <button>Add To Card</button>
    </div>
  );
}

export default Option;
