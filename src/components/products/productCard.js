import React, { Component } from "react";
import { connect } from "react-redux";
import Thumb from "../../common/thumb";
import StarRating from "../../common/starRating/starRating";
import { addProduct } from "../../store/cart/actions";
import { updateCart } from "../../store/checkout_total/actions";

class ProductCard extends Component {
  handleClick = (e, product) => {
    let { cartProducts, addProduct, updateCart } = this.props;

    addProduct(product, cartProducts);
    updateCart(cartProducts);
  };
  render() {
    const {
      _id,
      title,
      productImageURL,
      thumbImageUrl,
      price,
      numberInStock,
      userRating,
    } = this.props.product;
    let productInShelf = { ...this.props.product };
    productInShelf.quantity = 1;
    return (
      <div className="col mb-4 card-deck">
        <div className="card h-100">
          <Thumb alt={title} productImageURL={thumbImageUrl} />
          <div className="card-body text-dark">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">
              <i className="fas fa-rupee-sign" />
              <span className="product_price">{price}</span>
            </p>
          </div>
          <div className="container align-items-end item-cardfooter">
            <button
              type="button"
              className="btn btn-dark"
              id={`btn${_id}`}
              onClick={(e) => this.handleClick(e, productInShelf)}
            >
              Add To Cart
            </button>

            <p className="card-text">
              <small>In Stock {numberInStock}</small>
            </p>

            <StarRating rating={userRating} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.cart.products,
    total: state.total.data,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateCart: (cartProducts) => dispatch(updateCart(cartProducts)),
//     addProduct: (product, cartProducts) =>
//       dispatch(addProduct(product, cartProducts)),
//   };
// };

const actions = {
  updateCart,
  addProduct,
};

export default connect(mapStateToProps, actions)(ProductCard);
