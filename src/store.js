// redux
import { createStore } from "redux";
// reducer
import namesReducer from "./reducers/namesReducer";

const store = createStore(namesReducer, {});

export default store;
