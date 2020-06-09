import { ADD_PRODUCT } from "./types";

export const addProduct = (product, cartProducts) => {
  return (dispatch) => {
    let productAlreadyInCart = false;
    cartProducts.forEach((cp) => {
      if (cp._id === product._id) {
        let qty = cp.quantity + product.quantity;
        cp.quantity = qty;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);

      // .catch((err) => {
      //   dispatch({ type: "ADD_PRODUCT_ERROR", err });
      // });
    }
    dispatch({ type: ADD_PRODUCT, cartProducts });
  };
};
