import { createSlice } from "@reduxjs/toolkit";
import { getAllChefSuggestionsApi, getAllDishesApi } from "../../services/dishesApi";
import { DishDTO } from "../../shared/dtos/dishesDTO";

export interface DishesState {
  data: DishDTO[] | [];
  chefSuggestions: DishDTO[] | [];
  loading: boolean;
}

const initialState: DishesState = {
  data: [],
  chefSuggestions: [],
  loading: false,
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setChefSuggestions: (state, action) => {
      state.chefSuggestions = action.payload;
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
  setChefSuggestions,
} = dishesSlice.actions;
export const selectDishes = (state: any) => state.dishes.data;
export const selectChefSuggestions = (state: any) => state.dishes.chefSuggestions;

export const loadDishesData =
  (spaceId?: number) => async (dispatch: any, getState: any) => {
    if (selectDishes(getState()).length === 0 && !getState().dishes.loading) {
      dispatch(
        setLoading(true)
      );
      const response = await getAllDishesApi({ id_espacio: spaceId });
      response && dispatch(
        setData(response)
      );
      dispatch(
        setLoading(false)
      );
    }
  };

export const loadChefSuggestionsData =
  () => async (dispatch: any, getState: any) => {
    if (selectChefSuggestions(getState()).length === 0) {
      dispatch(
        setLoading(true)
      );
      const response = await getAllChefSuggestionsApi();
      response && dispatch(
        setChefSuggestions(response)
      );
      dispatch(
        setLoading(false)
      );
    }
  };



export default dishesSlice.reducer;
