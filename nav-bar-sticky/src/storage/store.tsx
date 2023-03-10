import { configureStore } from '@reduxjs/toolkit';
import changePageReducer from '../components/nav-bar/pageSlice';

const store = configureStore({
  reducer: {
    changer: changePageReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { RootState, AppDispatch };
