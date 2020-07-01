import React, { Component } from "react";
import { connect } from "react-redux";

import ShelfItem from "../../common/shelfLineItem/shelfItem";
import { isEmpty } from "react-redux-firebase";
class CartShelf extends Component {
  render() {
    const { cartProducts } = this.props;
    if (isEmpty(cartProducts)) {
      return (
        <React.Fragment>
          <div className="container ">
            <h2 className="h2">Shopping Cart</h2>
            <br></br>
          </div>
          <div className="EmptyState text-center">
            <p className="text-lg-center font-weight-light">
              YOUR CART IS EMPTY
            </p>
            <button
              type="button"
              className="btn btn-dark no-margin-top "
              id={`btn-cont-shopping`}
              onClick={() => this.props.history.push("/")}
            >
              Continue Shopping
            </button>
          </div>
        </React.Fragment>
      );
    }
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
