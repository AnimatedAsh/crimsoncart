import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT } from "./types";

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        products: action.products,
      };
    case ADD_PRODUCT:
      console.log("Added Product", action.cartProducts);
      return {
        ...state,
        products: action.cartProducts,
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: action.products,
      };

    default:
      return state;
  }
};

export default cartReducer;
