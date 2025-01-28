import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    add: (state, action) => {
      let product = state.value.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.amount === action.payload.amount
      );

      if (product) {
        state.value = state.value.map((item) => {
          if (
            item.id === action.payload.id &&
            item.color === action.payload.color
          ) {
            item.count += Number(action.payload.count);
          }
          return item;
        });
      } else {
        state.value.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.value = state.value.filter(
        (item) =>
          item.id !== action.payload.id || item.color !== action.payload.color
      );
    },

    edit: (state, action) => {
      state.value = state.value.map((item) => {
        if (
          item.color === action.payload.color &&
          item.id === action.payload.id
        ) {
          item.count = action.payload.count;
        }
        return item;
      });
    },
  },
});

export default cardSlice.reducer;
export const { add, remove, edit } = cardSlice.actions;
