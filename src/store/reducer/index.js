import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./buttonSlice";
import emailReducer from "./emailSlice";

const store = configureStore({
  reducer: { button: buttonReducer, email: emailReducer },
});

export default store;
