import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../firebase/firebase';

const initialState = {
	idUser: '',
	listProduct: [],
};
const Cart = createSlice({
	name: 'Cart',
	initialState,
	extraReducers: (builder) => {
		builder.addCase;
	},
});

export const getCart = createAsyncThunk('order/getproducts', async () => {
	const res = await axios.get(BASE_URL + '/cart');
	return res.data;
});
