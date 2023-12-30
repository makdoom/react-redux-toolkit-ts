import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      if (state.value !== 0) {
        state.value -= 1;
      }
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },

    decrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.value !== 0) {
        state.value -= action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    // Pending case
    builder.addCase(incrementAsync.pending, () => {
      console.log("Increment asynchrnously: Pending");
    });

    // Fullfilled case
    builder.addCase(
      incrementAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        console.log("hello");
        state.value += action.payload;
      }
    );
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
