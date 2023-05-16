import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { bayutApi } from "./services/bayut";
import { firebaseAPI } from "./services/firebase";

const store = configureStore({
  reducer: {
    [bayutApi.reducerPath]: bayutApi.reducer,
    [firebaseAPI.reducerPath]: firebaseAPI.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      bayutApi.middleware,
      firebaseAPI.middleware
    ),
});

export default store;
