import { createSlice } from "@reduxjs/toolkit";
import { getAllDishesApi } from "../../services/dishesApi";
import { DishDTO } from "../../shared/dtos/dishesDTO";

export interface DishesState {
  data: DishDTO | [];
  loading: boolean;
}

const initialState: DishesState = {
  data: [],
  loading: false,
};

export const dishesSlice = createSlice({
  name: "dishes",
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
} = dishesSlice.actions;
export const selectDishes = (state: any) => state.Service.data;

export const loadDishesData =
  () =>async (dispatch: any) => {
    console.log("Buscar datos Dishes ...");
    
    dispatch(
      setLoading(true)
    );
    const response = await getAllDishesApi({});
    console.log("Respuesta en el slice Dishes :",response);    
    dispatch(
      setData(response)
    );
    dispatch(
      setLoading(false)
    );
  };


export default dishesSlice.reducer;
