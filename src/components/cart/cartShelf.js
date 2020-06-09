import React, { Component } from "react";
import { connect } from "react-redux";
import ShelfItem from "../../common/shelfLineItem/shelfItem";
class CartShelf extends Component {
  render() {
    const { cartProducts } = this.props;
    return (
      <div className="container ">
        <h2 className="h2">Shopping Cart</h2>
        <div className="container shelf">
          {cartProducts.map((product, i) => (
            <div className="row p-2" key={`p${i}`}>
              <ShelfItem key={product._id} product={product} />{" "}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartTotal: state.total.data,
    cartProducts: state.cart.products,
  };
};
export default connect(mapStateToProps)(CartShelf);
