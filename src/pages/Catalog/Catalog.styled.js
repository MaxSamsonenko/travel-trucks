import styled from "styled-components";

export const CatalogWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	gap: 64px;
	padding-bottom: 30px;
`;

export const FilerFormWrapper = styled.div`
	// position: fixed;
	// top: 60px;
	// left: 142px;
	top: 5vh; /* 5% from the top of the viewport */
	// right: 10vw;
`;
export const CamperListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 888px;
`;

export const LoadMoreBtn = styled.button`
	border: none;
	outline: none;
	border-radius: 200px;
	background-color: transparent;
	border: 1px solid rgba(71, 84, 103, 0.2);
	padding: 16px 32px;
	color: #000000;
	font-weight: 500;
	width: 145px;
	&:hover {
		border: 1px solid #e44848;
	}
`;
