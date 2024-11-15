import React from "react";

function Content(props) {
  const { title, description } = props;
  return (
    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Content;
