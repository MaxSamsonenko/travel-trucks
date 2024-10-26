import { useDispatch, useSelector } from "react-redux";
import { fetchAdvertsBasedOnFilters } from "../../redux/operations";
import {
	setLocation,
	toggleEquipment,
	setVehicleType,
	resetFilters,
} from "../../redux/filterSlice";
import { selectFilters } from "../../redux/selectors";
import Checkbox from "./Checkbox";
import { IconMapLocationIcon } from "../../assets/icons";

import { equipmentIcons, vehicleTypeIcons } from "../../assets/icons/icons";

import {
	Form,
	LocationLabel,
	IconWrapper,
	InputWrapper,
	LocationInput,
	Filters,
	SubTitle,
	CheckBoxList,
	CheckBoxListItem,
	Label,
	SubmitBtn,
} from "./FilterForm.styled";

const FilterForm = ({ onSubmit }) => {
	const dispatch = useDispatch();
	const filters = useSelector(selectFilters);

	const handleCheckboxChange = (index) => {
		dispatch(toggleEquipment(index));
	};
	const handleRadioChange = (event) => {
		const vehicle = vehicleTypeIcons.find((item) => {
			if (item.name === event.target.value) {
				return item;
			}
		});
		if (vehicle) {
			dispatch(setVehicleType(vehicle.value));
		}
	};
	const handleLocationChange = (event) => {
		dispatch(setLocation(event.target.value));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(fetchAdvertsBasedOnFilters());
		onSubmit();
		dispatch(resetFilters());
	};
	return (
		<Form onSubmit={handleSubmit}>
			<LocationLabel name="location">Location</LocationLabel>
			<InputWrapper>
				<IconWrapper>
					<IconMapLocationIcon />
				</IconWrapper>
				<LocationInput
					type="text"
					placeholder="Kyiv, Ukraine"
					onChange={handleLocationChange}
				/>
			</InputWrapper>

			<Filters>Filters</Filters>
			<div>
				<SubTitle>Vehicle equipment</SubTitle>
				<CheckBoxList>
					{equipmentIcons.map((item, index) => (
						<CheckBoxListItem key={index}>
							<Checkbox
								name={item.name}
								type="checkbox"
								value={item.name}
								checked={filters.equipment[index]}
								onChange={() => {
									handleCheckboxChange(index);
								}}
								IconComponent={item.iconComponent}
							/>
						</CheckBoxListItem>
					))}
				</CheckBoxList>
			</div>
			<div>
				<SubTitle>Vehicle Type</SubTitle>
				<CheckBoxList>
					{vehicleTypeIcons.map((item, index) => (
						<CheckBoxListItem key={index}>
							<Label>
								<Checkbox
									id={item.value}
									type="radio"
									name="vehicleType"
									value={item.name}
									checked={filters.form === item.value}
									onChange={handleRadioChange}
									IconComponent={item.iconComponent}
								/>
							</Label>
						</CheckBoxListItem>
					))}
				</CheckBoxList>
			</div>
			<SubmitBtn type="submit">Search</SubmitBtn>
		</Form>
	);
};

export default FilterForm;
