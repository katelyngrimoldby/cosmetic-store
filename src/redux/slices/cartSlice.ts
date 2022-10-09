import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface cartItem {
  product: {
    id: number;
    brand: string;
    name: string;
    img: string;
    color: null | {
      hex: string;
      name: string;
    };
  };
  quantity: number;
}

interface cartState {
  value: [] | cartItem[];
}

const initialState: cartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<cartItem>) => {
      const currentState = [...state.value];
      const item = currentState.find(
        (e) => e.product === action.payload.product
      );
      if (item) {
        item.quantity += action.payload.quantity;
        const newState = [item].concat(
          ...currentState.filter((e) => e.product !== item.product)
        );
        state.value = newState;
      } else {
        state.value = [action.payload, ...state.value];
      }
    },
    remove: (state, action: PayloadAction<cartItem>) => {
      state.value = [...state.value].filter((e) => e !== action.payload);
    },
    edit: (state, action: PayloadAction<{ id: number; value: number }>) => {
      const copy = [...state.value];
      copy[action.payload.id].quantity += action.payload.value;
      state.value = copy;
    },
  },
});

export const { add, remove, edit } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
