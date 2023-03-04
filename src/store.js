// applyMiddleware & compose for "redux chrome devtool" extension
import { createStore, applyMiddleware, compose } from "redux";
// reducer
import namesReducer from "./reducers/namesReducer";

// for "redux chrome devtool" extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// composeEnhancers(applyMiddleware()), for "redux chrome devtool" extension
const store = createStore(
  namesReducer,
  {},
  composeEnhancers(applyMiddleware())
);

export default store;
