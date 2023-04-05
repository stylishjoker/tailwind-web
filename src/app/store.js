import { configureStore } from '@reduxjs/toolkit';

import Operate from '../feature/operate';
import User from '../feature/user';
import Products from '../feature/product';

export const store = configureStore({
	reducer: {
		Operate,
		User,
		Products,
	},
});

// Operate
export const scrollBtnSelector = (state) => state.Operate.index;
export const locationSelector = (state) => state.Operate.location;
export const toastSelector = (state) => state.Operate.toastMessage;
// user
export const userSelector = (state) => state.User.user;
//product
export const productsSelector = (state) => state.Products.product;
