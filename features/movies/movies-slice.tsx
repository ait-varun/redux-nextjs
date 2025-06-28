import { MoviesList } from "@/types/movies-list";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.tvmaze.com",
  }),
  endpoints: (builder) => ({
    // The `getMovies` endpoint is a "query" operation that returns data
    getMovies: builder.query<MoviesList[], void>({
      query: () => "/shows",
    }),
    getMovie: builder.query<MoviesList, string | number>({
      query: (id) => `/shows/${id}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = moviesSlice;
