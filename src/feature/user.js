import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: {},
};
export const User = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = User.actions;

export default User.reducer;
