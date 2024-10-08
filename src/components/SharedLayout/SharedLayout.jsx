import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../IconComponents/Logo";

import {
	Header,
	Container,
	MainContainer,
	Nav,
	NavWrapper,
	LinkWrapper,
	Link,
	LogoLink,
} from "./SharedLayout.styled";

import herobcg from "../../assets/hero/hero-background.png";

const SharedLayout = () => {
	const location = useLocation();
	return (
		<div>
			<Header>
				<Nav>
					<Container>
						<NavWrapper>
							<LogoLink to="/">
								<Logo />
							</LogoLink>
							<LinkWrapper>
								<Link to="/" end>
									Home
								</Link>
								<Link to="/catalog">Catalog</Link>
							</LinkWrapper>
						</NavWrapper>
					</Container>
				</Nav>
			</Header>
			<main>
				<MainContainer image={location.pathname === "/" ? herobcg : null}>
					<Outlet />
				</MainContainer>
			</main>
		</div>
	);
};
export default SharedLayout;
