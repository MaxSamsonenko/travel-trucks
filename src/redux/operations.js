import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { equipmentFilter } from "./helpers";
import { equipmentIcons } from "../assets/icons/icons";

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

export const fetchAdvertsBasedOnFilters = createAsyncThunk(
	"adverts/fetchBasedOnFilters",
	async (_, { getState, rejectWithValue }) => {
		const { filters } = getState();
		try {
			const response = await axios.get(
				`?location=${filters.location}&form=${filters.form}&${equipmentFilter(
					equipmentIcons,
					filters.equipment
				)}`
			);
			if (response.data === "Not found") {
				return {
					items: [],
					total: 0,
				};
			}

			return response.data;
		} catch (error) {
			if (error.status === 404) {
				return {
					items: [],
					total: 0,
				};
			}
			if (error.response && error.response.status === 404) {
				// Return an appropriate message or empty data for 404
				return rejectWithValue("No adverts found. Please adjust your filters.");
			}
			return rejectWithValue(error.message);
		}
	}
);
