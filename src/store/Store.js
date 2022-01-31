import { createStore, compose } from "redux";
import musicReducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  musicReducer,
  composeEnhancers()
);

export default store;