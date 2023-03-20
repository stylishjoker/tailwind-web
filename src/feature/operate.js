import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	index: 0,
	location: '',
};
export const Operate = createSlice({
	name: 'operate',
	initialState,
	reducers: {
		setScrollBtn: (state, action) => {
			state.index = action.payload;
		},
		setLocation: (state, action) => {
			state.location = action.payload;
		},
	},
});

export const { setScrollBtn, setLocation } = Operate.actions;
export default Operate.reducer;
