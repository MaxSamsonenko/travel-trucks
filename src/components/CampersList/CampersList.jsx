import CampersListItem from "./CampersListItem";

const CampersList = ({ campers }) => {
	return (
		<>
			{campers.length === 0 ? (
				<p>No results</p>
			) : (
				<ul>
					{campers.map((advert) => {
						return <CampersListItem key={advert.id} camper={advert} />;
					})}
				</ul>
			)}
		</>
	);
};

export default CampersList;
