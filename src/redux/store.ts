import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
