import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/users/userSlice";
import { apiSlice } from "@/features/shows/shows-slice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  // user: userReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(apiSlice.middleware);
    },
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
