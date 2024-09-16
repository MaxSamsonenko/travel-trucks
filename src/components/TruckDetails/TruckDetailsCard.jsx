import { useState } from "react";
import { IconReviewStarIcon, IconMap } from "../../assets/icons";
import FeaturesTab from "../FeaturesTab";
import ReviewsTab from "../ReviewsTab";
import BookForm from "../BookForm";

import {
	NamePriceWrapper,
	NameText,
	ReviewLocationWrapper,
	VanNamePrice,
	VehicleImgList,
	VehicleImgListItem,
	VehicleImg,
	VehicleDescr,
	BtnList,
	BtnListItem,
	Btn,
	TabWrapper,
} from "./TruckDetails.styled";

const TruckDetailsCard = ({ truck }) => {
	const [activeTab, setActiveTab] = useState("features");
	console.log("details", truck);
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const { name, rating, reviews, location, price, gallery, description } =
		truck;

	return (
		<div>
			<NamePriceWrapper>
				<NameText>{name}</NameText>
				<ReviewLocationWrapper>
					<span>
						<IconReviewStarIcon />
						{rating}
						&#40;{reviews.length}reviews&#41;
					</span>
					<span>
						<IconMap />
						{location}
					</span>
				</ReviewLocationWrapper>
				<VanNamePrice>&euro;{price}</VanNamePrice>
			</NamePriceWrapper>
			<VehicleImgList>
				{gallery.map((item, index) => {
					return (
						<VehicleImgListItem key={index}>
							<VehicleImg src={item.thumb} alt="truck picture" />
						</VehicleImgListItem>
					);
				})}
			</VehicleImgList>
			<VehicleDescr>{description}</VehicleDescr>
			<BtnList>
				<BtnListItem isActive={activeTab === "features"}>
					<Btn type="button" onClick={() => handleTabClick("features")}>
						Features
					</Btn>
				</BtnListItem>
				<BtnListItem isActive={activeTab === "reviews"}>
					<Btn type="button" onClick={() => handleTabClick("reviews")}>
						Reviews
					</Btn>
				</BtnListItem>
			</BtnList>
			<TabWrapper>
				{activeTab === "features" ? (
					<FeaturesTab camper={truck} />
				) : (
					<ReviewsTab />
				)}
				<BookForm />
			</TabWrapper>
		</div>
	);
};
export default TruckDetailsCard;
