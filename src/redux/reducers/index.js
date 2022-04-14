import {combineReducers} from "redux";
import {buyItemReducer} from "./productReducers";
// import { productsReducer,selectedProductsReducer } from "./productReducers";

 const reducers = combineReducers({
    buyItem:buyItemReducer,
  });
  export default reducers;
