import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999;
`;

export const Nav = styled.nav`
	background-color: #f7f7f7;
`;

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 24px 64px;
`;

export const NavWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const LinkWrapper = styled.div`
	display: flex;
	gap: 30px;
	width: 100%;
	margin-right: auto;
`;
export const Link = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
 
  text-decoration: none;
  color: #101828;
  }
`;
export const LogoLink = styled(NavLink)`
	position: relative;
	display: flex;
	align-items: center;
	gap: 5px;
	text-decoration: none;
	color: #101828;
	margin-right: 450px;
`;
export const LogoText = styled.span`
	color: #475467;
`;
export const MainContainer = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding-left: 64px;
	padding-right: 64px;
	padding-top: 120px;
	background-image: url(${(props) => props.image});
	background-position: top 72px left 0;
	background-repeat: no-repeat;
	height: 100vh;
`;
