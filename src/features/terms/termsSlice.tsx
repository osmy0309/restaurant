import { createSlice } from "@reduxjs/toolkit";
import { getAllTermsApi } from "../../services/termsApi";

export interface TermsState {
  data: string;
  loading: boolean;
}

const initialState: TermsState = {
  data: "",
  loading: false,
};

export const termsSlice = createSlice({
  name: "terms",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    reset: (state) => {
      state.data = "";
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
} = termsSlice.actions;
export const selectTerms = (state: any) => state.terms.data;

export const loadTermsData =
  () => async (dispatch: any, getState: any) => {
    if (selectTerms(getState()) == "") {
      dispatch(
        setLoading(true)
      );
      const response = await getAllTermsApi();      
      response && dispatch(
        setData(response.data.data[0].descripcion)
      );
      dispatch(
        setLoading(false)
      );
    }
  };


export default termsSlice.reducer;
