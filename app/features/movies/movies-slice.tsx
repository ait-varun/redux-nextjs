import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesList, SearchList } from "@/app/types/movies-list";

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
    getMovie: builder.query<MoviesList, any>({
      query: (id) => `/shows/${id}`,
    }),
    searchMovies: builder.query<SearchList[], any>({
      query: (query) => `/search/shows?q=${query}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useSearchMoviesQuery } =
  apiSlice;
