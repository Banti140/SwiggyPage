import {combineReducers} from "redux";
import {ProductReducer} from "./productReducers";
// import { productsReducer,selectedProductsReducer } from "./productReducers";

 const reducers = combineReducers({
  ItemsReducer:ProductReducer,
  });
  export default reducers;
