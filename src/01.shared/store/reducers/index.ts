import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import userReducer from "./user/userSlice";
import postFormReducer from "./postForm/postFormSlice";

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  postForm: postFormReducer,
});

export default rootReducer;
