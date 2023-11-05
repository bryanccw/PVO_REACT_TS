import { configureStore } from '@reduxjs/toolkit';
import frameworkSlide from './frameworkSlice';
import userSlide from './userSlice';

const store = configureStore({
  reducer: {
    framework: frameworkSlide.reducer,
    user: userSlide.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
