import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: rootReducers,
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
