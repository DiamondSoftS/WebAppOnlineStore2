import { createStore, combineReducers } from "redux";
import storeReducer from "./Reducer";
import searchReducer from "./SearchReducer";

const rootReducer = combineReducers({
  tienda: storeReducer,
  searchTerm: searchReducer,
});

const store = createStore(rootReducer);

export default store;
