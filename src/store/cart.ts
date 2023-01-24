import verifyAlreadyExistingProductOnCart from "@/scripts/verifyAlreadyExistingProductOnCart";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
  modalOpen: false,
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOnCart(state: IState, action: IAction) {
      action.payload = verifyAlreadyExistingProductOnCart(
        state.products,
        action.payload
      );

      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.products[index] = action.payload;
      } else {
        state.products = state.products
          ? [...state.products, { ...action.payload }]
          : [action.payload];
      }

      state.totalItems++;
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state) {
      state.totalItems--;
    },
    openModal(state) {
      state.modalOpen = true;
    },
    closeModal(state) {
      state.modalOpen = false;
    },
  },
});

export const { addOnCart, removeFromCart, openModal, closeModal } =
  slice.actions;
export default slice.reducer;
