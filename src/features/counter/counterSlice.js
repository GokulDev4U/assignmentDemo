import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
    },

  },
});

export const { increment} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
