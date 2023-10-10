import { createSlice } from "@reduxjs/toolkit";

const initCounter = {
  counter: 10,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    calc(state, action) {
      const { plus, minus } = action.payload;
      state.counter = state.counter + plus + minus;
    },
  },
});

export const counterAction = counterSlice.actions;
export default counterSlice.reducer;
