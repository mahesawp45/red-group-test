import { configureStore } from "@reduxjs/toolkit";
import saleSlice from "../features/sale/saleSlice.ts";


export const store = configureStore({
  reducer: {
    sales: saleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
