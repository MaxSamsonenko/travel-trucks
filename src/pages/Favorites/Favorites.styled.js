import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
	max-width: 888px;
	padding-top: 30px;
	margin: 0 auto;
`;
export const NoFavsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
`;
export const NoFavorites = styled.div`
	width: 500px;
	height: 500px;
	flex-shrink: 0;
	flex-basis: auto;
	border-radius: 10px;
	overflow: hidden;
	background-image: ${(props) => `url(${props.image})`};
	background-position: center;
	background-size: 100% 100%;
`;
export const NoFavsText = styled.p`
	font-size: 24px;
	font-weight: 700;
`;

export const GoBackBtn = styled(NavLink)`
	border: none;
	text-decoration: none;
	outline: none;
	border-radius: 200px;
	background-color: #e44848;
	padding: 16px 40px;
	color: #ffffff;
	font-weight: 500;
	width: 200px;
	&:hover {
		background-color: #d84343;
	}
`;
