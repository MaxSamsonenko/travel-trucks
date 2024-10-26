import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
	name: "filters",
	initialState: {
		location: "",
		equipment: new Array(5).fill(false),
		form: "",
	},
	reducers: {
		setLocation: (state, action) => {
			state.location = action.payload;
		},
		toggleEquipment: (state, action) => {
			state.equipment[action.payload] = !state.equipment[action.payload];
		},
		setVehicleType: (state, action) => {
			state.form = action.payload;
		},
		resetFilters: (state) => {
			state.location = "";
			state.vehicleType = "";
			state.equipment = new Array(5).fill(false);
		},
	},
});

export const { setLocation, toggleEquipment, setVehicleType, resetFilters } =
	filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
