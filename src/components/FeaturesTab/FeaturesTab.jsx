import {
	TabWrapper,
	CategoryList,
	Category,
	SubTitle,
	Stats,
	StatsDetails,
} from "./FeaturesTab.styled";

import {
	IconBtnCategoriesAutomatic,
	IconBtnCategoriesGas,
	IconBtnCategoriesKitchen,
	IconBtnCategoriesAc,
	IconBtnCategoriesRadio,
	IconBtnCategoriesMicrowave,
	IconBtnCategoriesWater,
	IconBtnCategoriesFreezer,
	IconEquipmentShower,
	IconEquipmentTv,
} from "../../assets/icons";

const FeaturesTab = ({ camper }) => {
	function capitalizeFirstLetter(str) {
		if (!str) return str;
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	return (
		<TabWrapper>
			<div>
				<CategoryList>
					<li>
						{camper?.transmission ? (
							<Category>
								<IconBtnCategoriesAutomatic width="20" height="20" />
								{camper.transmission}
							</Category>
						) : null}
					</li>
					<li>
						{camper?.gas ? (
							<Category>
								<IconBtnCategoriesGas width="20" height="20" />
								{camper.gas}Petrol
							</Category>
						) : null}
					</li>
					<li>
						{camper?.kitchen ? (
							<Category>
								<IconBtnCategoriesKitchen width="20" height="20" />
								{camper.kitchen}Kitchen
							</Category>
						) : null}
					</li>

					<li>
						{camper?.AC ? (
							<Category>
								<IconBtnCategoriesAc width="20" height="20" />
								{camper.AC}AC
							</Category>
						) : null}
					</li>
					<li>
						{camper?.radio ? (
							<Category>
								<IconBtnCategoriesRadio width="20" height="20" />
								{camper.radio}Radio
							</Category>
						) : null}
					</li>
					<li>
						{camper?.TV ? (
							<Category>
								<IconEquipmentTv width="20" height="20" />
								{camper.TV}TV
							</Category>
						) : null}
					</li>
					<li>
						{camper?.water ? (
							<Category>
								<IconBtnCategoriesWater width="20" height="20" />
								{camper.water}Water
							</Category>
						) : null}
					</li>
					<li>
						{camper?.microwave ? (
							<Category>
								<IconBtnCategoriesMicrowave width="20" height="20" />
								{camper.microwave}Microwave
							</Category>
						) : null}
					</li>
					<li>
						{camper?.bathroom ? (
							<Category>
								<IconEquipmentShower width="20" height="20" />
								{camper.bathroom}Bathroom
							</Category>
						) : null}
					</li>
					<li>
						{camper?.refrigerator ? (
							<Category>
								<IconBtnCategoriesFreezer width="20" height="20" />
								{camper.refrigerator}Refrigerator
							</Category>
						) : null}
					</li>
				</CategoryList>
			</div>
			<div>
				<SubTitle>Vehicle details</SubTitle>
				<Stats>
					<StatsDetails>Form</StatsDetails>
					<StatsDetails>{capitalizeFirstLetter(camper?.form)}</StatsDetails>
				</Stats>
				<Stats>
					<StatsDetails>Length</StatsDetails>
					<StatsDetails>{camper?.length}</StatsDetails>
				</Stats>
				<Stats>
					<StatsDetails>Width</StatsDetails>
					<StatsDetails>{camper?.width}</StatsDetails>
				</Stats>
				<Stats>
					<StatsDetails>Height</StatsDetails>
					<StatsDetails>{camper?.height}</StatsDetails>
				</Stats>
				<Stats>
					<StatsDetails>Tank</StatsDetails>
					<StatsDetails>{camper?.tank}</StatsDetails>
				</Stats>
				<Stats>
					<StatsDetails>Consumption</StatsDetails>
					<StatsDetails>{camper?.consumption}</StatsDetails>
				</Stats>
			</div>
		</TabWrapper>
	);
};
export default FeaturesTab;
