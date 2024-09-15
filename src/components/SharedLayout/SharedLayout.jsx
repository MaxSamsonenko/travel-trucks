import { Outlet } from "react-router-dom";
import Logo from "../IconComponents/Logo/Logo.jsx";

import {
	Header,
	Container,
	MainContainer,
	Nav,
	NavWrapper,
	LinkWrapper,
	Link,
	LogoLink,
	LogoText,
} from "./SharedLayout.styled";

const SharedLayout = () => {
	return (
		<div>
			<Header>
				<Nav>
					<Container>
						<NavWrapper>
							<LogoLink to="/">
								<LogoText>Travel</LogoText>
								<Logo width={"30"} height={"30"} />
								<LogoText>Trucks</LogoText>
							</LogoLink>
							<LinkWrapper>
								<Link to="/" end>
									Home
								</Link>
								<Link to="/catalog">Catalog</Link>
								<Link to="/favorites">Favorites</Link>
							</LinkWrapper>
						</NavWrapper>
					</Container>
				</Nav>
			</Header>
			<main>
				<MainContainer>
					<Outlet />
				</MainContainer>
			</main>
		</div>
	);
};
export default SharedLayout;
