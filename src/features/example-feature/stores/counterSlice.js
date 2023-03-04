import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementAction: (state) => {
      state.value += 1;
    },
    decrementAction: (state) => {
      state.value -= 1;
    },
    incrementByAmountAction: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementAction, decrementAction, incrementByAmountAction } =
  counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
