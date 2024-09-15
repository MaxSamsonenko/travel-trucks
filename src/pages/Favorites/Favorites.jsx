import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors.js";

import CampersList from "../../components/CampersList/CampersList.jsx";
import { Wrapper } from "./Favorites.styled.js";

const Favorites = () => {
	const favorites = useSelector(selectFavorites);

	return (
		<Wrapper>
			<CampersList campers={favorites} />;
		</Wrapper>
	);
};

export default Favorites;
