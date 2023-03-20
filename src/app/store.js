import { configureStore } from '@reduxjs/toolkit';

import Operate from '../feature/operate';

export const store = configureStore({
	reducer: {
		Operate,
	},
});

export const scrollBtnSelector = (state) => state.Operate.index;
export const locationSelector = (state) => state.Operate.location;
