import { configureStore } from '@reduxjs/toolkit';
import modeReducer from "./Features/modeSlice";

export default configureStore({
  reducer: {
      mode: modeReducer
  },
})