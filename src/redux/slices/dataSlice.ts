import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { data } from "../../apiTypes";

interface DataState {
  value: [] | data;
}

const initialState: DataState = {
  value: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    load: (state, action: PayloadAction<data>) => {
      state.value = action.payload;
    },
  },
});

export const { load } = dataSlice.actions;

export const selectData = (state: RootState) => state.data.value;

export default dataSlice.reducer;
