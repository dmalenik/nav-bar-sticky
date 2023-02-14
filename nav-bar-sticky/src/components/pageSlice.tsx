import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

interface holderState {
  value: string;
}

const initialState: holderState = {
  value: '/',
};
const pageSlice = createSlice({
  name: 'page',
  initialState,
  // action object as the parameter will be passed implicitly
  reducers: {
    changer: (state, action: PayloadAction<string>) => {
      state.value = `/${action.payload}`;
    },
  },
});
// action creator
const { changer } = pageSlice.actions;
const displayPage = (state: RootState) => state.changer.value;

export { pageSlice, changer, displayPage };
export default pageSlice.reducer;
