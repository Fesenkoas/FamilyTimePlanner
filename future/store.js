import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    // Other reducers go here
  },
});

export default store;