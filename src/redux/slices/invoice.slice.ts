import { invoiceEmptyState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const InvoiceSlice = createSlice({
  name: "invoice",
  initialState: invoiceEmptyState,
  reducers: {
    createInvoice: (state, action) => {
      return action.payload;
    },
    modifyInvoice: (state, action) => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetInvoice: (state, action) => {
      return invoiceEmptyState;
    },
  },
});

export const { createInvoice, modifyInvoice, resetInvoice } =
  InvoiceSlice.actions;

export default InvoiceSlice.reducer;
