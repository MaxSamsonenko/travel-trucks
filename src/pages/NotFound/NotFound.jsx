import {
	Wrapper,
	NotFoundWrappers,
	NotFoundImage,
	NotFoundText,
	GoBackBtn,
} from "./NotFound.styled.js";

const NotFound = () => {
	return (
		<Wrapper>
			<NotFoundWrappers>
				<NotFoundImage image="src/assets/think.png"></NotFoundImage>
				<NotFoundText>Hmm... Wierd... Something went wrong</NotFoundText>
				<GoBackBtn to="/catalog">Back to Catalog</GoBackBtn>
			</NotFoundWrappers>
		</Wrapper>
	);
};

export default NotFound;
