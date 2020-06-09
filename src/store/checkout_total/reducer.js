import { UPDATE_CART } from "./types";

const initialState = {
  data: {
    productQuantity: 0,
    totalPrice: 0,
    currencyId: "INR",
    currentFormat: "₹",
  },
};

export const checkout_total = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CART:
      console.log("Updated Cart", action.cartTotal);
      return {
        ...state,
        data: { ...action.cartTotal },
      };
    default:
      return state;
  }
};

export default checkout_total;
