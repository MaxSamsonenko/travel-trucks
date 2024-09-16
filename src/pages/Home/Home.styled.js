import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
	margin-top: 260px;
`;

export const Title = styled.h1`
	font-size: 48px;
	font-weight: 600;
	line-height: 1.5;
	color: #f7f7f7;
`;
export const Subtitle = styled.p`
	font-size: 24px;
	font-weight: 600;
	line-height: 0/75;
	color: #f7f7f7;
`;
export const Button = styled(NavLink)`
	display: block;
	text-decoration: none;
	width: 173px;
	color: #ffffff;
	padding: 16px 48.5px;
	margin-top: 40px;
	border-radius: 200px;
	background-color: #e44848;
	&:hover {
		background-color: #d84343;
	}
`;
