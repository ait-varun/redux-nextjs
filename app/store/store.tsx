import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "../features/movies/movies-slice";

export const store = configureStore({
  reducer: {
    [moviesSlice.reducerPath]: moviesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
