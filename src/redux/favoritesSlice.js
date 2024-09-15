import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = [];

const favoriteSlice = createSlice({
	name: "favorites",
	initialState: favoritesInitialState,
	reducers: {
		addFavorite(state, action) {
			const advert = action.payload;
			console.log(advert);
			// Check for duplicates
			if (!state.some((item) => item.id === advert.id)) {
				state.push(advert);
			}
		},
		removeFavorite(state, action) {
			const advertId = action.payload;
			return state.filter((item) => item.id !== advertId);
		},
	},
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export const favoritesReducer = favoriteSlice.reducer;
