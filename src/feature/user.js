import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	token: '',
	name: '',
	adress: '',
	email: '',
	numberPhone: '',
	password: '',
};
export const User = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setID: (state, action) => {
			state.id = action.payload;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		setName: (state, action) => {
			state.name = action.payload;
		},
		setAdress: (state, action) => {
			state.adress = action.payload;
		},
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setNumberPhone: (state, action) => {
			state.numberPhone = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
	},
});

export const {
	setAdress,
	setEmail,
	setID,
	setName,
	setNumberPhone,
	setPassword,
	setToken,
} = User.actions;

export default User.reducer;
