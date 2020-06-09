import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import addressesReducer from "./addresses/reducer";

import profileReducer from "./profile/reducer";
import locationReducer from "./location/reducer";
import authReducer from "./auth/reducer";
import cartReducer from "./cart/reducer";
import checkout_total from "./checkout_total/reducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  addressList: addressesReducer,
  profileItems: profileReducer,
  cart: cartReducer,
  total: checkout_total,
  location: locationReducer,
});

export default rootReducer;
