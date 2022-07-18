import {configureStore} from "@reduxjs/toolkit";
import {samuraiApi} from "./samurai/samurai.api";

export const store = configureStore({
  reducer: {
    [samuraiApi.reducerPath]: samuraiApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(samuraiApi.middleware)
})