import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
