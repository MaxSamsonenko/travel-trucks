export const selectAdverts = (state) => state.adverts.items;
export const selectFilteredAdverts = (state) => state.adverts.filteredAdverts;
export const selectTotalAdverts = (state) => state.adverts.totalItems;
export const selectTotalFilteredAdverts = (state) =>
	state.adverts.totalFilteredItems;
export const selectIsLoading = (state) => state.adverts.isLoading;
export const selectError = (state) => state.adverts.error;
export const selectFavorites = (state) => state.favorites;
export const selectCurrentAdvert = (state) => state.adverts.currentAdvert;
export const selectFilters = (state) => state.filters;
