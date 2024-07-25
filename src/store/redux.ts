import { combineReducers, configureStore } from "@reduxjs/toolkit";
import calc from "./store";

const reducers = combineReducers({
  calc,
});

export default configureStore({
  reducer: reducers,
});
