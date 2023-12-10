import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrSinhVien: [],
  showError: "",
};

const sinhVienSlice = createSlice({
  name: "sinhVien",
  initialState,
  reducers: {
    getValueSV: (state, action) => {
      const sinhVien = state.arrSinhVien.find((item) => {
        return item.maSV == action.payload.maSV;
      });
      if (!sinhVien) {
        state.arrSinhVien.push(action.payload);
        state.showError = "";
      } else {
        state.showError = "Sinh viên đã tồn tại";
      }
    },
    removeSV: (state, action) => {
      const index = state.arrSinhVien.findIndex((item) => {
        return item.maSV == action.payload;
      });
      if (index != -1) {
        state.arrSinhVien.splice(index, 1);
      }
    },
    updateSV: (state, action) => {
      const index = state.arrSinhVien.findIndex((item) => {
        return item.maSV == action.payload.maSV;
      });
      if (index != -1) {
        state.arrSinhVien[index] = action.payload;
      }
    },
  },
});

export const { getValueSV, removeSV, updateSV } = sinhVienSlice.actions;

export default sinhVienSlice.reducer;
