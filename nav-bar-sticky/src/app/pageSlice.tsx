import { createSlice } from '@reduxjs/toolkit';

interface pageHolderState {
  value: string;
}

const initialState: pageHolderState = {
  value: '',
};
const pageHolderSlice = createSlice({
  name: 'pageHolder',
  initialState,
  reducers: {
    replace: (state) => {},
    turnBackToRoot: (state) => {
      state.value = '';
    },
  },
});
const { replace, turnBackToRoot } = pageHolderSlice.actions;

export { pageHolderSlice, replace, turnBackToRoot };
export default pageHolderSlice.reducer;
