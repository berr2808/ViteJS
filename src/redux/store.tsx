import { configureStore } from "@reduxjs/toolkit";
import { User, Invoice } from "../models";
import { userSlice, invoiceSlice } from "./slices";

export interface AppStore {
  user: User;
  invoice: Invoice;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice,
    invoice: invoiceSlice,
  },
});
