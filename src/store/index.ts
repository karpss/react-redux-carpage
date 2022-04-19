import {configureStore} from '@reduxjs/toolkit';
import offersSlice from './offers.slice';

const store = configureStore({
  reducer: {offers: offersSlice.reducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
