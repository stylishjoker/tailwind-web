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
export const userSelector = (state) => state.User.user;
