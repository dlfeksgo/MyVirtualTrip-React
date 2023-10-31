import { configureStore } from "@reduxjs/toolkit";
import sectionSlice from "../reducers/sectionSlice";

const store = configureStore({
  reducer: {
    section: sectionSlice.reducer,
  },
});

export default store;
