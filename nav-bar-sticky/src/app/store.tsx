import { configureStore } from '@reduxjs/toolkit';
import pageHolderReducer from './pageSlice';

const store = configureStore({
  reducer: {
    pageHolder: pageHolderReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { RootState, AppDispatch };
