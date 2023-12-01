import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Sale } from "../../interfaces/Sale.ts";
import { APIURL, api } from "../../service/api.ts";

interface SaleState {
  data: Sale[] | null;
  loading: boolean;
  singleSale: Sale | null;
  errors: any;
  isSuccess: boolean;
  message: string;
}

const initialState: SaleState = {
  data: null,
  singleSale: null,
  loading: false,
  isSuccess: false,
  errors: null,
  message: "",
};


export const getSales = createAsyncThunk<any>(
  `${APIURL.SALES}/getSales`,
  async (params, thunkAPI) => {
    try {
      const response = await api.get(`${APIURL.SALES}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getSaleById = createAsyncThunk<Sale, string>(
  `${APIURL.SALES}/getSaleById`,
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`${APIURL.SALES}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// create
export const createSale = createAsyncThunk<Sale, Object | any>(
  `${APIURL.SALES}/create`,
  async (data, thunkAPI) => {
    try {
      const response = await api.post(APIURL.SALES, data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// update
export const updateSale = createAsyncThunk<Sale, Object | any>(
  `${APIURL.SALES}/update`,
  async (data, thunkAPI) => {
    try {
      const response = await api.put(`${APIURL.SALES}/${data.id}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// delete
export const deleteSale = createAsyncThunk<string, Object | any>(
  `${APIURL.SALES}/delete`,
  async (id, thunkAPI) => {
    try {
      const response = await api.delete(`${APIURL.SALES}/${id}`);
      thunkAPI.dispatch(
        getSales()
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const saleSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setSales: (state, action: PayloadAction<any>) => {
        state.data = action.payload;
    },
    filterSales: (state, action) => {
        state.data?.splice(
          state.data.findIndex((sale) => sale.id === action.payload),
          1
        );
    },
  },
  extraReducers: (builder) => {
    // Get All Sales
    builder.addCase(getSales.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSales.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getSales.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });

    // Sale by ID
    builder.addCase(getSaleById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSaleById.fulfilled, (state, action) => {
      state.loading = false;
      state.singleSale = action.payload;
    });
    builder.addCase(getSaleById.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });

    // Create Sale
    builder.addCase(createSale.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createSale.fulfilled, (state, action) => {
      state.loading = false;
      state.isSuccess = true;
      state.errors = null;
    });
    builder.addCase(createSale.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
      state.isSuccess = false;
    });

    // Udpate
    builder.addCase(updateSale.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateSale.fulfilled, (state, action) => {
      state.loading = false;
      state.singleSale = action.payload;
    });
    builder.addCase(updateSale.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    });

    // Delete Sale
    builder.addCase(deleteSale.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteSale.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.isSuccess = true;
    });
    builder.addCase(deleteSale.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload;
      state.isSuccess = false;
    });
  },
});

export default saleSlice.reducer;
export const { setSales, filterSales } = saleSlice.actions;
