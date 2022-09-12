import {
  clearPersistLocalStorage,
  getPersistLocalStorage,
  setPersistLocalStorage,
} from "@/helpers/localStorage";
import { userEmptyState, User, UserKey } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: UserKey,
  initialState: getPersistLocalStorage(UserKey) || userEmptyState,
  reducers: {
    createUser: (state, action) => {
      setPersistLocalStorage<User>(UserKey, action.payload);
      return action.payload;
    },
    modifyUser: (state, action) => {
      const formattedData = { ...state, ...action.payload };
      return formattedData;
    },
    resetUser: () => {
      clearPersistLocalStorage(UserKey);
      return userEmptyState;
    },
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
