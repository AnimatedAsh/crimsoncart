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

  compose(
    applyMiddleware(...middlewares),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export const rrfProps = {
  firebase,
  useFirestoreForProfile: true,
  userProfile: "users",
  config: { fbConfig, ...rrfConfig },
  dispatch: store.dispatch,
  createFirestoreInstance,
};
