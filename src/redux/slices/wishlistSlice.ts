import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface wishlistItem {
  id: number;
  brand: string;
  name: string;
  img: string;
  price: number;
  color: null | {
    hex: string;
    name: string;
  };
}

interface wishlistState {
  value: wishlistItem[];
}

const initialState: wishlistState = {
  value: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<wishlistItem>) => {
      state.value = [action.payload, ...state.value];
    },
    removeFromWishlist: (state, action: PayloadAction<wishlistItem>) => {
      state.value = state.value.filter((item) => {
        if (item.color && action.payload.color) {
          return item.color.hex !== action.payload.color.hex;
        }
      });
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export const selectWishlist = (state: RootState) => state.wishlist.value;

export default wishlistSlice.reducer;
