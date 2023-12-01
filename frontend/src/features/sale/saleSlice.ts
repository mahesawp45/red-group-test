import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SaleState {
  //   data: SalesApiResponse | null;
  loading: boolean;
  //   singleSale: Sale | null;
  errors: any;
  isSuccess: boolean | null;
  message: string;
}

const initialState: SaleState = {
  //   data: null,
  //   singleSale: null,
  loading: false,
  isSuccess: null,
  errors: null,
  message: "",
};

const saleSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setSales: (state, action: PayloadAction<any>) => {
      //   state.data = action.payload;
    },
    filterSales: (state, action) => {
      //   state.data?.data.splice(
      //     state.data.data.findIndex((employee) => employee.id === action.payload),
      //     1
      //   );
    },
  },
  extraReducers: (builder) => {},
});

export default saleSlice.reducer;
export const { setSales, filterSales } = saleSlice.actions;
