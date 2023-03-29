import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	index: 0,
	location: '',
	toastMessage: '',
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
		setToastMessage: (state, action) => {
			state.toastMessage = action.payload;
		},
	},
});

export const { setScrollBtn, setLocation, setToastMessage } = Operate.actions;
export default Operate.reducer;
