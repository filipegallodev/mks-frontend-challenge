import handleSameProduct from "@/scripts/handleSameProduct";
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
        action.payload,
        action.type
      );

      state.products = handleSameProduct(state.products, action.payload,action.type);
      state.totalItems++;
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state: IState, action: IAction) {
      action.payload = verifyAlreadyExistingProductOnCart(
        state.products,
        action.payload,
        action.type
      );

      state.products = handleSameProduct(state.products, action.payload,action.type);
      state.totalItems--;
      state.totalPrice -= action.payload.price;
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
