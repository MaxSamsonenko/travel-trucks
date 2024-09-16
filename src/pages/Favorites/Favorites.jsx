import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors.js";

import CampersList from "../../components/CampersList/CampersList.jsx";
import {
	Wrapper,
	NoFavsWrapper,
	NoFavorites,
	NoFavsText,
	GoBackBtn,
} from "./Favorites.styled.js";

const Favorites = () => {
	const favorites = useSelector(selectFavorites);

	return (
		<Wrapper>
			{favorites.length === 0 ? (
				<NoFavsWrapper>
					<NoFavorites image="src/assets/think.png"></NoFavorites>
					<NoFavsText>
						Hmm... Wierd... I guess you haven&apos;t added any favorites yet
					</NoFavsText>
					<GoBackBtn to="/catalog">Back to Catalog</GoBackBtn>
				</NoFavsWrapper>
			) : (
				<CampersList campers={favorites} />
			)}
		</Wrapper>
	);
};

export default Favorites;
