import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cart from "./cart";

const reducer = combineReducers({ cart });
const store = configureStore({ reducer });

export default store;
