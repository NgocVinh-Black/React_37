import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrSinhVien: [],
};

const sinhVienSlice = createSlice({
  name: "sinhVien",
  initialState,
  reducers: {
    getValueSV: (state, action) => {
      state.arrSinhVien.push(action.payload);
    },
  },
});

export const { getValueSV } = sinhVienSlice.actions;

export default sinhVienSlice.reducer;
