import { createStore, applyMiddleware, compose } from "redux";
import { createFirestoreInstance } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import * as firebase from "firebase";
import rootReducer from "./rootReducer";
import fbConfig, { rrfConfig } from "../config/fbConfig";

const middlewares = [thunk.withExtraArgument(getFirebase)];
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))
);

export const rrfProps = {
  firebase,
  useFirestoreForProfile: true,
  userProfile: "users",
  config: { fbConfig, ...rrfConfig },
  dispatch: store.dispatch,
  createFirestoreInstance
};
