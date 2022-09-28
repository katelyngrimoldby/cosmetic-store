import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
