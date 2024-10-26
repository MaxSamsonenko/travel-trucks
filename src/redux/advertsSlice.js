import { createSlice } from "@reduxjs/toolkit";
import {
	fetchAdverts,
	fetchAdvertById,
	fetchAdvertsBasedOnFilters,
} from "./operations";

const advertsInitialState = {
	items: [],
	filteredAdverts: [],
	currentAdvert: null,
	totalItems: 0,
	totalFilteredItems: 0,
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
			.addCase(fetchAdvertById.rejected, handleRejected)
			.addCase(fetchAdvertsBasedOnFilters.pending, handlePending)
			.addCase(fetchAdvertsBasedOnFilters.fulfilled, (state, action) => {
				console.log(action);
				state.isLoading = false;
				state.error = null;
				state.filteredAdverts = action.payload.items;
				state.totalFilteredItems = action.payload.total;
			})
			.addCase(fetchAdvertsBasedOnFilters.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload || "No content";
			});
	},
});
export const advertsReducer = advertsSlice.reducer;
