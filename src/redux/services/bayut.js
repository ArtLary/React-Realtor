import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bayutApi = createApi({
  reducerPath: "bayutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bayut.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "db5881c0ddmshc3a33b61c0fdf36p119379jsn2b45c9900b22"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProperyList: builder.query({
      query: () => `/properties/list/?locationExternalIDs=${(5002, 6020)}`,
    }),
    getProperyDetails: builder.query({
      query: (id) => `/properties/detail?externalID=${id}`,
    }),
    getAgencyList: builder.query({
      query: (phrase) => `/agencies/list?query=${phrase}`,
    }),
  }),
});

export const {
  useGetProperyListQuery,
  useGetProperyDetailsQuery,
  useGetAgencyListQuery,
} = bayutApi;
