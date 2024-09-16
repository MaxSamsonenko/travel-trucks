import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchAdverts = createAsyncThunk(
	"adverts/fetchPage",
	async ({ page = 1, limit = 4 }, thunkAPI) => {
		try {
			const response = await axios.get(`?page=${page}&limit=${limit}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const fetchAdvertById = createAsyncThunk(
	"adverts/fetchTruck",
	async (id, thunkAPI) => {
		try {
			const response = await axios.get(`${id}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
