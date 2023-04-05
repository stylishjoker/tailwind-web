import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../firebase/firebase';
const initialState = {
	product: [],
};

export const Products = createSlice({
	name: 'Products',
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.product = action.payload;
		},
		setInfoProduct: (state, action) => {
			state.product = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(postProduct.fulfilled, (state, action) => {
				state.product.push(action.payload);
			})
			.addCase(getProducts.fulfilled, (state, action) => {
				state.product = action.payload;
			})
			.addCase(remoteProduct.fulfilled, (state, action) => {
				state.product.pop(action.payload);
			});
	},
});

export const { setProducts, setInfoProduct } = Products.actions;
export default Products.reducer;
export const postProduct = createAsyncThunk(
	'order/postProduct',
	async (data) => {
		const res = await axios.post(BASE_URL + '/product.json', data);
		return res.data;
	}
);
export const getProducts = createAsyncThunk('order/getproducts', async () => {
	const res = await axios.get(BASE_URL + '/product.json');
	const result = await res.data;
	const newResults = [];
	for (const key in result) {
		const item = {
			id: key,
			...result[key],
		};
		newResults.push(item);
	}
	return newResults;
});
export const remoteProduct = createAsyncThunk(
	'order/remoteproduct',
	async (id) => {
		const res = await axios.delete(BASE_URL + '/product.json' + id);
		return res.data;
	}
);
