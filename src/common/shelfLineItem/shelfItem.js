import React, { Component } from "react";
import Thumb from "../thumb";
class ShelfItem extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className="card w-100">
        <div className="d-flex flex-row">
          <div className="mh-100">
            <Thumb
              alt={product.title}
              productImageURL={product.thumbImageUrl}
            />
          </div>
          <div className="d-flex p-2 flex-column w-100">
            <div className="d-flex flex-row w-100">
              <div className="p-2">
                <h4 className="h4">{product.title}</h4>
              </div>
              <div className="ml-auto p-2">
                <i className="fas fa-rupee-sign" />
                <span className="product_price">{product.price}</span>
              </div>
            </div>

            <div className="p-2">In stock: {product.numberInStock}</div>
            <div className="p-2">Qty: {product.quantity}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShelfItem;
