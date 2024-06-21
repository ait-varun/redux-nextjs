import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ShowsList, SearchList } from "@/types/shows-list";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.tvmaze.com",
  }),
  endpoints: (builder) => ({
    // The `getShows` endpoint is a "query" operation that returns data
    getShows: builder.query<ShowsList[], void>({
      query: () => "/shows",
    }),
    getShow: builder.query<ShowsList, any>({
      query: (id) => `/shows/${id}`,
    }),
    searchShow: builder.query<SearchList[], any>({
      query: (query) => `/search/shows?q=${query}`,
    }),
  }),
});

export const { useGetShowsQuery, useGetShowQuery, useSearchShowQuery } =
  apiSlice;
