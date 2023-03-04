import { createStore } from "redux";
import namesReducer from "./reducers/namesReducer";

const store = createStore(namesReducer, {});

export default store;
