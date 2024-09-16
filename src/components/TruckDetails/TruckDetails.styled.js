import styled from "styled-components";

export const NamePriceWrapper = styled.div`
	margin-bottom: 28px;
`;

export const NameText = styled.p`
	font-size: 24px;
	font-weight: 600;
	line-height: 1.25;
	margin-bottom: 8px;
`;
export const ReviewLocationWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: 16px;
	margin-bottom: 16px;
`;
export const VanNamePrice = styled.p`
	font-size: 24px;
	font-weight: 600;
	line-height: 1.25;
	margin-bottom: 28px;
`;
export const VehicleImgList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 48px;
	margin-bottom: 24px;
`;
export const VehicleImgListItem = styled.li`
	border-radius: 10px;
	overflow: hidden;
`;
export const VehicleImg = styled.img`
	width: 292px;
	height: 312px;
	object-fit: cover;
`;
export const VehicleDescr = styled.p`
	color: #475467;
	margin-bottom: 44px;
`;
export const BtnList = styled.ul`
	display: flex;
	justify-content: flex-start;
	gap: 40px;
	position: relative;
	margin-bottom: 68px;
	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -24px;
		width: 100%;
		height: 1px;
		background-color: rgba(16, 24, 40, 0.2);
		transition: background-color 0.3s ease;
	}
`;
export const BtnListItem = styled.li.attrs((props) => ({}))`
	position: relative;
	&::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: -24px;
		width: 100%;
		height: 5px;
		background-color: transparent;
		background-color: ${(props) =>
			props.isActive ? "#e44848" : "transparent"};
		transition: background-color 0.3s ease;
	}
`;
export const Btn = styled.button`
	background-color: transparent;
	font-size: 20px;
	font-weight: 600;
	line-height: 1.2;
`;

export const TabWrapper = styled.div`
	display: flex;
	gap: 24px;
`;
