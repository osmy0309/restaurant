import { createSlice } from "@reduxjs/toolkit";
import { ReserveDTO } from "../../shared/dtos/bookingDTO";
import { getAllBookingsApi } from "../../services/bookingApi";

export interface BookingsState {
  data: ReserveDTO[] | [];
  loading: boolean;
}

const initialState: BookingsState = {
  data: [],
  loading:false
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    reset: (state) => {
      state.data = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const {
  setData,
  setLoading,
  reset,
} = bookingsSlice.actions;
export const selectBookings = (state: any) => state.bookings.data;

export const loadDishesData =
  (email: string) => async (dispatch: any, getState: any) => {
    if (selectBookings(getState()).length === 0 && !getState().bookings.loading) {      
      dispatch(
        setLoading(true)
      );
      const response = await getAllBookingsApi({ email });
      response && dispatch(
        setData(response)
      );
      dispatch(
        setLoading(false)
      );
    }
  };



export default bookingsSlice.reducer;
