import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOnCart(state: IState, action: IAction) {
      state.products = state.products
        ? [...state.products, action.payload]
        : [action.payload];
      state.totalItems++;
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state) {
      state.totalItems--;
    },
  },
});

export const { addOnCart, removeFromCart } = slice.actions;
export default slice.reducer;
