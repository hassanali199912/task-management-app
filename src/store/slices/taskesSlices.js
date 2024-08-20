import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTaskes = createAsyncThunk("taskes/fetchTaskes", async () => {
  try {
    const url = `http://localhost:8080/taskes`;
    const request = await axios.get(url, { withCredentials: true });
    return request.data.data;
  } catch (error) {
    console.log(error);
  }
});

const taskesSlices = createSlice({
  name: "taskes",
  initialState: {
    loading: true,
    taskes: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTaskes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTaskes.fulfilled, (state, action) => {
      state.loading = false;
      state.taskes = action.payload;
    });
    builder.addCase(fetchTaskes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default taskesSlices.reducer;
