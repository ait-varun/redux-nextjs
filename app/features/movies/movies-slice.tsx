import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesList } from "@/app/types/movies-list";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.tvmaze.com",
  }),
  endpoints: (builder) => ({
    // The `getMovies` endpoint is a "query" operation that returns data
    getMovies: builder.query<MoviesList[], void>({
      query: () => "/shows",
    }),
  }),
});

export const { useGetMoviesQuery } = apiSlice;
