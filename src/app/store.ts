import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import settingSlice from "../features/settings/settingsSlice";
import servicesSlice from "../features/services/servicesSlice";
import dishesSlice from "../features/dishes/dishesSlice";
import spacesSlice from "../features/spaces/spacesSlice";

const rootReducer = combineReducers({
  setting:settingSlice,
  services:servicesSlice,
  dishes:dishesSlice,
  spaces:spacesSlice,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
        serializableCheck: false,
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
