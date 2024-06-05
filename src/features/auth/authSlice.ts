import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "../../services/authApi";
import LoginDTO from "../../shared/dtos/loginDTO";
import ModelState from "../../shared/states/modelState";

const initialState: ModelState<any> = {
  value: {} as any,
  status: "idle",
};
export const authAsync = createAsyncThunk(
  "auth/admin/",
  async (credentials: LoginDTO) => {
    const response = await adminLogin(credentials);
    const validLogin = true//HandleLoginHelper(token);

    if (validLogin) {
      return response;
    }

    return null;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeAuth: (state) => {
      state.value = {} as any;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.value = action.payload;
      })
      .addCase(authAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { removeAuth } = authSlice.actions;

export default authSlice.reducer;
