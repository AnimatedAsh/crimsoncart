import React from "react";
import Thumb from "../../common/thumb";
import StarRating from "../../common/starRating/starRating";
const ProductCard = ({
  _id,
  title,
  productImageURL,
  price,
  numberInStock,
  userRating
}) => {
  return (
    <div className="col mb-4 card-deck">
      <div className="card h-100">
        <Thumb alt={title} productImageURL={productImageURL} />
        <div className="card-body text-dark">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">
            <i className="fas fa-rupee-sign" />
            <span className="product_price">{price}</span>
          </p>
          <a
            href="#"
            className="btn btn-dark"
            role="button"
            aria-pressed="true"
          >
            Add to Cart
          </a>
          <p className="card-text">
            <small>In Stock {numberInStock}</small>
          </p>
          <StarRating rating={userRating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
