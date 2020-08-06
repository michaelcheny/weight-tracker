import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./rootReducers";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: rootReducers,
  middleware: [...getDefaultMiddleware()],
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
