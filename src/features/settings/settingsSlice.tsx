import { createSlice } from "@reduxjs/toolkit";
import { SettingsDTO } from "../../shared/dtos/settingsDTO";
import promiseExecution from "../../services/settingsApi";

export interface SettingState {
  data: SettingsDTO;
  loading: boolean;
}

const initialState: SettingState = {
  data: {},
  loading: false,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    reset: (state) => {
      state.data = {};
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
} = settingSlice.actions;
export const selectSettings = (state: any) => state.setting.data;

export const loadSettingData =
  () => async (dispatch: any, getState: any) => {
    if (!selectSettings(getState())?.homeImages && !getState().setting.loading) {
      dispatch(
        setLoading(true)
      );
      const response = await promiseExecution();
      dispatch(
        setData(response)
      );
      dispatch(
        setLoading(false)
      );
    }
  };


export default settingSlice.reducer;
