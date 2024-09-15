export const saveFavoritesToLocalStorage = (favorites) => {
	localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const loadFavoritesFromLocalStorage = () => {
	const savedFavorites = localStorage.getItem("favorites");
	return savedFavorites ? JSON.parse(savedFavorites) : [];
};
