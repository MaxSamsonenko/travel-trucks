import CampersListItem from "./CampersListItem";

const CampersList = ({ openModal, campers }) => {
	return (
		<ul>
			{campers.map((advert) => {
				return (
					<CampersListItem
						openModal={() => openModal(advert)}
						key={advert.id}
						camper={advert}
					/>
				);
			})}
		</ul>
	);
};

export default CampersList;
