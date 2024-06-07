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
import authSlice from "../features/auth/authSlice";
import termsSlice from "../features/terms/termsSlice";

const rootReducer = combineReducers({
  auth:authSlice,
  setting:settingSlice,
  services:servicesSlice,
  dishes:dishesSlice,
  spaces:spacesSlice,
  terms:termsSlice,
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
