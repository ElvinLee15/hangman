import { configureStore } from "@reduxjs/toolkit";
import hangmanReducers from "./hangmanReducers";

export default configureStore({
  reducer: {
    hangman: hangmanReducers,
  },
});
