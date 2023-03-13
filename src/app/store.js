import { configureStore } from '@reduxjs/toolkit';

import scrollBtn from '../feature/scrollBtn';

export const store = configureStore({
	reducer: {
		scrollBtn,
	},
});

export const scrollBtnSelector = (state) => state.scrollBtn.index;
