import { Container, Title, Subtitle, Button } from "./Home.styled";
const Home = () => {
	return (
		<Container>
			<Title>Campers of your dreams</Title>
			<Subtitle>You can find everything you want in our catalog</Subtitle>
			<Button to="/catalog">View Now</Button>
		</Container>
	);
};
export default Home;
