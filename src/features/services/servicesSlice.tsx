import { createSlice } from "@reduxjs/toolkit";
import { ServiceDTO } from "../../shared/dtos/servicesDTO";
import { getAllServicesApi } from "../../services/sevicesApi";

export interface ServiceState {
  data: ServiceDTO[] | [];
  loading: boolean;
}

const initialState: ServiceState = {
  data: [],
  loading: false,
};

export const serviceSlice = createSlice({
  name: "services",
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
    },
  },
});

export const {
  setData,
  setLoading,
  reset,
} = serviceSlice.actions;
export const selectServices = (state: any) => state.services.data;

export const loadServiceData =
  () => async (dispatch: any, getState: any) => {
    if (selectServices(getState()).length === 0 && !getState().services.loading) {      
      dispatch(
        setLoading(true)
      );
      const response = await getAllServicesApi({});
      response && dispatch(
        setData(response)
      );
      dispatch(
        setLoading(false)
      );
    }
  };


export default serviceSlice.reducer;
