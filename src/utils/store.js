import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./personalSlice";

export default configureStore({
  reducer: {
    personalInfo: personalInfoReducer,
  },
});
