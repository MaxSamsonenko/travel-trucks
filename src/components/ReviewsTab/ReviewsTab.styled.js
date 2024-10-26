import styled from "styled-components";

export const TabWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 44px;
	max-width: 631px;
	border-radius: 10px;
`;

export const NameStarWrapper = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
	margin-bottom: 16px;
`;
export const Avatar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: #f2f4f7;
`;
export const AvatarLetter = styled.span`
	font-size: 24px;
	font-weight: 600;
	color: #e44848;
`;
export const NameStarWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;
export const Name = styled.span`
	font-size: 16px;
	font-weight: 500;
	color: #101828;
`;

export const StarList = styled.ul`
	display: flex;
`;
