import React from "react";
import ProductCard from "./productCard";

const ProductList = ({ products }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3">
      {products.map(product => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
