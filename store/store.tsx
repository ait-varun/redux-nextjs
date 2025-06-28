import { moviesSlice } from "@/features/movies/movies-slice";
import crewReducer from "@/features/shows/crew-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [moviesSlice.reducerPath]: moviesSlice.reducer,
    crew: crewReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
