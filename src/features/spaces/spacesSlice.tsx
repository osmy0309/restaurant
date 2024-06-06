import { createSlice } from "@reduxjs/toolkit";
import { SpaceDTO } from "../../shared/dtos/spacesDTO";
import { getAllSpacesApi } from "../../services/spacesApi";

export interface SpacesState {
  data: SpaceDTO[] | [];
  loading: boolean;
}

const initialState: SpacesState = {
  data: [],
  loading: false,
};

export const spacesSlice = createSlice({
  name: "spaces",
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
} = spacesSlice.actions;
export const selectSpaces = (state: any) => state.spaces.data;

export const loadSpacesData =
  () => async (dispatch: any, getState: any) => {
    if (selectSpaces(getState()).length === 0) {
      dispatch(
        setLoading(true)
      );
      const response = await getAllSpacesApi({});
      response && dispatch(
        setData(response)
      );
      dispatch(
        setLoading(false)
      );
    }
  };


export default spacesSlice.reducer;
