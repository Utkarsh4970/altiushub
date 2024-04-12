import { createSlice } from '@reduxjs/toolkit';


const GlobalVariables = createSlice({
  name: 'GlobalVariables',
  initialState: {
    CurrentRoutePath: '/',
    invoiceDetail: {}

  },
  reducers: {
    UpdateCurrentPath: (state, action) => {
      state.CurrentRoutePath = action.payload;
    },
    UpdateInvoiceDetail: (state, action) => {
      state.invoiceDetail = action.payload
    }
  },
});

export const { UpdateCurrentPath, UpdateInvoiceDetail } = GlobalVariables.actions;
export default GlobalVariables.reducer;
