import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "./slices/taskesSlices";
const store = configureStore({
  reducer: {
    taskReducers,
  },
});

export default store;
