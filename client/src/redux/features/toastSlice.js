import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.push({
        id: action.payload.id,
        type: action.payload.type,
        title: action.payload.title,
        message: action.payload.message,
      });
    },
    deleteToast: (state, action) => {
      return state.filter((item) => action.payload !== item.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToast, deleteToast } = toastSlice.actions;

export default toastSlice;
