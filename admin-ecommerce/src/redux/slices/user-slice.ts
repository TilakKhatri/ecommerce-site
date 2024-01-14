import { IUserState } from "@/types/user";
import { getUserData, isUserLogin, setUserLogin } from "@/utils/user-utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IUserState = {
  user: getUserData() || {},
  loginStatus: isUserLogin() || false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      setUserLogin({ ...action.payload });
      state.user = action.payload;
      state.loginStatus = true;
    },

    setUser: (state, action) => {
      // setUserData({ ...state.user, ...action.payload });
      state.user = { ...state.user, ...action.payload };
    },

    resetLogin: (state) => {
      // resetLoginData();
      state.user = null;
      state.loginStatus = false;
    },
  },
});

export const { setLogin, setUser, resetLogin } = userSlice.actions;
export default userSlice.reducer;
