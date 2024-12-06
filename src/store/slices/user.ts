import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: number;
};

type State = { value: User | null };

const initialState: State = { value: null };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: State, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
  },
});

export const { setUser: setUserActionCreator } = userSlice.actions;

export const userReducer = userSlice.reducer;
