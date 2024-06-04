import { createSlice } from "@reduxjs/toolkit";
import { ServiceDTO } from "../../shared/dtos/servicesDTO";
import { getAllServicesApi } from "../../services/sevicesApi";

export interface ServiceState {
  data: ServiceDTO | [];
  loading: boolean;
}

const initialState: ServiceState = {
  data: [],
  loading: false,
};

export const serviceSlice = createSlice({
  name: "service",
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
export const selectServices = (state: any) => state.Service.data;

export const loadServiceData =
  () =>async (dispatch: any) => {
    console.log("Buscar datos Services ...");
    
    dispatch(
      setLoading(true)
    );
    const response = await getAllServicesApi({});
    console.log("Respuesta en el slice Services :",response);    
    dispatch(
      setData(response)
    );
    dispatch(
      setLoading(false)
    );
  };


export default serviceSlice.reducer;
