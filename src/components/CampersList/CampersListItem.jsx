import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favoritesSlice";
import {
	IconHeart,
	IconReviewStarIcon,
	IconMapLocationIcon,
	IconBtnCategoriesUsers,
	IconBtnCategoriesAutomatic,
	IconEquipmentGas,
	IconBtnCategoriesKitchen,
	IconBtnCategoriesAc,
} from "../../assets/icons";

import {
	ListItem,
	ImgWrapper,
	NamePriceWrapper,
	VanNamePrice,
	PriceWrapper,
	LikeBtn,
	ReviewLocationWrapper,
	Descr,
	CategoryList,
	Category,
	ShowMoreBtn,
} from "./CampersList.styled";
import { selectFavorites } from "../../redux/selectors";

const CampersListItem = ({ openModal, camper }) => {
	const favorites = useSelector(selectFavorites);
	const dispatch = useDispatch();
	const {
		id,
		gallery,
		name,
		price,
		rating,
		reviews,
		location,
		description,
		adults,
		transmission,
		engine,
	} = camper;

	const isFavorite = (id) => {
		return favorites.some((item) => item.id === id);
	};

	function truncateString(str, maxLength) {
		if (str.length > maxLength) {
			return str.substring(0, maxLength - 3) + "...";
		}
		return str;
	}
	function capitalizeFirstLetter(str) {
		if (!str) return str;
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	const handleToggleFavorite = (id) => {
		const isFavorite = favorites.find((item) => item.id === id);

		if (isFavorite) {
			dispatch(removeFavorite(id));
		} else {
			dispatch(addFavorite(camper));
		}
	};

	return (
		<ListItem>
			<ImgWrapper image={gallery[0].original}></ImgWrapper>
			<div>
				<NamePriceWrapper>
					<VanNamePrice>{name}</VanNamePrice>
					<PriceWrapper>
						<VanNamePrice>&#x24; {price}</VanNamePrice>
						<LikeBtn
							type="button"
							onClick={() => {
								handleToggleFavorite(id);
							}}
						>
							<IconHeart
								width="24"
								height="24"
								fill={isFavorite(id) ? "#E44848" : "transparent"}
								stroke={isFavorite(id) ? "#E44848" : "#101828"}
							/>
						</LikeBtn>
					</PriceWrapper>
				</NamePriceWrapper>
				<ReviewLocationWrapper>
					<span>
						<IconReviewStarIcon />
						{rating}({reviews.length} Reviews)
					</span>
					<span>
						<IconMapLocationIcon />
						{location}
					</span>
				</ReviewLocationWrapper>
				<Descr>{truncateString(description, 60)}</Descr>

				<CategoryList>
					<Category>
						<IconBtnCategoriesUsers width="20" height="20" />
						<span>{adults} adults</span>
					</Category>
					<Category>
						<IconBtnCategoriesAutomatic width="20" height="20" />{" "}
						<span>{capitalizeFirstLetter(transmission)}</span>
					</Category>
					<Category>
						<IconEquipmentGas width="20" height="20" />
						<span>{capitalizeFirstLetter(engine)}</span>
					</Category>
					<Category>
						<IconBtnCategoriesKitchen width="20" height="20" />
						<span>Kitchen</span>
					</Category>
					<Category>
						<IconBtnCategoriesAc width="20" height="20" />
						<span>AC</span>
					</Category>
				</CategoryList>
				<ShowMoreBtn type="button" onClick={() => openModal(camper)}>
					Show more
				</ShowMoreBtn>
			</div>
		</ListItem>
	);
};
export default CampersListItem;
