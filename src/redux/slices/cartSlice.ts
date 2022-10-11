import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface cartItem {
  product: {
    id: number;
    brand: string;
    name: string;
    img: string;
    price: number;
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
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const item = state.value.find((item) => {
        if (item.product.color && action.payload.product.color) {
          return item.product.color.hex === action.payload.product.color.hex;
        }
      });

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.value = [action.payload, ...state.value];
      }
    },
    removeFromCart: (state, action: PayloadAction<cartItem>) => {
      state.value = state.value.filter((item) => {
        if (item.product.color && action.payload.product.color) {
          return item.product.color.hex !== action.payload.product.color.hex;
        }
      });
    },
    edit: (
      state,
      action: PayloadAction<{ product: cartItem["product"]; quantity: number }>
    ) => {
      const index = state.value.findIndex((item) => {
        if (item.product.color && action.payload.product.color) {
          return item.product.color.hex === action.payload.product.color.hex;
        }
      });

      if (typeof index == "number") {
        state.value[index].quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, edit } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
