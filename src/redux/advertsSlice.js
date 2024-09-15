import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const advertsInitialState = {
	items: [],
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
			.addCase(fetchAdverts.rejected, handleRejected);
	},
});
export const advertsReducer = advertsSlice.reducer;
