import React from "react";
const Thumb = props => {
  return (
    <img
      src={props.productImageURL}
      className="card-img-top"
      alt={props.imgAlt}
    />
  );
};

export default Thumb;
