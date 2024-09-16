import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts, fetchAdvertById } from "./operations";

const advertsInitialState = {
	items: [],
	currentAdvert: null,
	totalItems: 0,
	isLoading: false,
	error: null,
};

const handlePending = (state) => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const advertsSlice = createSlice({
	name: "adverts",
	initialState: advertsInitialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchAdverts.pending, handlePending)
			.addCase(fetchAdverts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = [...state.items, ...action.payload.items];
				state.totalItems = action.payload.total;
			})
			.addCase(fetchAdverts.rejected, handleRejected)
			.addCase(fetchAdvertById.pending, handlePending)
			.addCase(fetchAdvertById.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.currentAdvert = action.payload;
			})
			.addCase(fetchAdvertById.rejected, handleRejected);
	},
});
export const advertsReducer = advertsSlice.reducer;
