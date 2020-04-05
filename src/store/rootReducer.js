import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { combineReducers } from "redux";
import addressesReducer from "./addresses/reducer";
import profileReducer from "./profile/reducer";
import locationReducer from "./location/reducer";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  addressList: addressesReducer,
  profileItems: profileReducer,
  location: locationReducer
});

export default rootReducer;
