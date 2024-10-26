import {
	TabWrapper,
	NameStarWrapper,
	Avatar,
	AvatarLetter,
	Name,
	StarList,
} from "./ReviewsTab.styled";
import { IconReviewStarIcon } from "../../assets/icons";

const ReviewsTab = ({ reviews }) => {
	console.log(reviews);
	function capitalizeAndTrimFirstLetter(str) {
		if (!str) return str;
		return str.charAt(0).toUpperCase();
	}
	return reviews.length === 0 ? (
		<p>There are no reviews for this truck</p>
	) : (
		<TabWrapper>
			{reviews.map((item, index) => {
				return (
					<li key={index}>
						<NameStarWrapper>
							<Avatar>
								<AvatarLetter>
									{capitalizeAndTrimFirstLetter(item.reviewer_name)}
								</AvatarLetter>
							</Avatar>

							<div>
								<Name>{item.reviewer_name}</Name>
								<StarList>
									{[...Array(5)].map((_, index) => {
										if (item.reviewer_rating >= index + 1) {
											return (
												<li key={index}>
													<IconReviewStarIcon />
												</li>
											);
										} else {
											return (
												<li key={index}>
													<IconReviewStarIcon fill="#f2f4f7" stroke="none" />
												</li>
											);
										}
									})}
								</StarList>
							</div>
						</NameStarWrapper>
						<div>
							<p>{item.comment}</p>
						</div>
					</li>
				);
			})}
		</TabWrapper>
	);
};
export default ReviewsTab;
