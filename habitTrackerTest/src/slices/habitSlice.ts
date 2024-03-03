import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import habitService from "../services/habitService";
import Summary from "../components/Summary";

interface HabitsState {
  habits: any[];
  error: boolean;
  loading: boolean;
}

const initialState: HabitsState = {
  habits: [],
  error: false,
  loading: false,
};

export const getSummary = createAsyncThunk<Summary[]>(
  "habits/getSummary",
  async (_, thunkAPI) => {
    try {
      const habits = await habitService.getSummary();
      return habits;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSummary.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(
        getSummary.fulfilled,
        (state, action: PayloadAction<Summary[]>) => {
          state.loading = false;
          state.error = false;
          state.habits = action.payload;
        }
      );
  },
});

export default habitSlice.reducer;
