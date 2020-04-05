const initialState = {
  products: []
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CART":
      return {
        ...state,
        products: action.products
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        productToAdd: action.product
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        productToRemove: action.product
      };
      deafult: return state;
  }
};
