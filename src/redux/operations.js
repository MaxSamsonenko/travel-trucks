import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { saveFavoritesToLocalStorage } from "./local-storage/localStorage";

// axios.defaults.baseURL = "https://662baedade35f91de1592414.mockapi.io/api/v1";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchAdverts = createAsyncThunk(
	"adverts/fetchPage",
	async ({ page = 1, limit = 4 }, thunkAPI) => {
		try {
			// const response = await axios.get(`/adverts?page=${page}&limit=${limit}`);
			const response = await axios.get(`?page=${page}&limit=${limit}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
