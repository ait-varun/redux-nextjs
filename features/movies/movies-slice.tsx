import { MoviesList } from "@/types/movies-list";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    // The `getMovies` endpoint is a "query" operation that returns data
    getShows: builder.query<MoviesList[], void>({
      query: () => "/shows",
    }),
    getShow: builder.query<MoviesList, string | number>({
      query: (id) => `/shows/${id}`,
    }),
  }),
});

export const { useGetShowsQuery, useGetShowQuery } = moviesSlice;
