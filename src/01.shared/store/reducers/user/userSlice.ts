import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  profile: {
    username: "bogdasafronov",
    email: "bogdasafronov@gmail.com",
    id: 1,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuth = true;
    },
    logout(state, action) {
      state.isAuth = false;
    },
  },
});

export default userSlice.reducer;
