import { configureStore } from '@reduxjs/toolkit';

import Operate from '../feature/operate';
import User from '../feature/user';

export const store = configureStore({
	reducer: {
		Operate,
		User,
	},
});

// Operate
export const scrollBtnSelector = (state) => state.Operate.index;
export const locationSelector = (state) => state.Operate.location;
// user
export const idSelector = (state) => state.User.id;
export const tokenSelector = (state) => state.User.token;
export const nameSelector = (state) => state.User.name;
export const adressSelector = (state) => state.User.adress;
export const emailSelector = (state) => state.User.email;
export const numberPhoneSelector = (state) => state.User.numberPhone;
export const passwordSelector = (state) => state.User.password;
