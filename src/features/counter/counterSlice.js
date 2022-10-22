import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fatchincrement = createAsyncThunk(
  'counter/fatchincrement',
  async value => {
    const response = await axios.put('/counter/increment', { value: value });
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [fatchincrement.fulfilled]: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { increment, decrement, incrementAmount } = counterSlice.actions;

export default counterSlice.reducer;
