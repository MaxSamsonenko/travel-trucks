import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { advertsReducer } from "./advertsSlice";
import { favoritesReducer } from "./favoritesSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["favorites"],
};

const rootReducer = combineReducers({
	adverts: advertsReducer,
	favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
