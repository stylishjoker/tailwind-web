import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	index: 0,
};
export const ScrollBtn = createSlice({
	name: 'scrollbtn',
	initialState,
	reducers: {
		setScrollBtn: (state, action) => {
			state.index = action.payload;
		},
	},
});
export const { setScrollBtn } = ScrollBtn.actions;
export default ScrollBtn.reducer;
