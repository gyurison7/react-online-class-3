import todos from "../modules/todosSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos,
  }
});

export default store;
