import { createSlice } from "@reduxjs/toolkit";
import { getAllChefSuggestionsApi, getAllDishesApi } from "../../services/dishesApi";
import { DishDTO } from "../../shared/dtos/dishesDTO";

export interface DishesState {
  data: DishDTO[] | [];
  chefSuggestions: DishDTO[] | [];
  loadingDish: boolean;
  loadingSuggestions:boolean;
}

const initialState: DishesState = {
  data: [],
  chefSuggestions: [],
  loadingDish: false,
  loadingSuggestions:false
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
      state.loadingDish = action.payload;
    },
    setLoadingSuggestions: (state, action) => {
      state.loadingSuggestions = action.payload;
    },
  },
});

export const {
  setData,
  setLoading,
  reset,
  setChefSuggestions,
  setLoadingSuggestions,
} = dishesSlice.actions;
export const selectDishes = (state: any) => state.dishes.data;
export const selectChefSuggestions = (state: any) => state.dishes.chefSuggestions;

export const loadDishesData =
  (spaceId?: number) => async (dispatch: any, getState: any) => {
    if (selectDishes(getState()).length === 0 && !getState().dishes.loadingDish) {      
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
        setLoadingSuggestions(true)
      );
      const response = await getAllChefSuggestionsApi();
      response && dispatch(
        setChefSuggestions(response)
      );
      dispatch(
        setLoadingSuggestions(false)
      );
    }
  };



export default dishesSlice.reducer;
