import { configureStore } from '@reduxjs/toolkit';
import eventSlide from './eventSlice';

const store = configureStore({
  reducer: {
    event: eventSlide.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
