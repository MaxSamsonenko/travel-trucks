import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdvertById } from "../../redux/operations";
import { selectCurrentAdvert } from "../../redux/selectors";

import TruckDetailsCard from "./TruckDetailsCard";

import { Oval } from "react-loader-spinner";

const TruckDetails = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const current = useSelector(selectCurrentAdvert);

	useEffect(() => {
		dispatch(fetchAdvertById(id));
	}, [dispatch, id]);

	return (
		<div>
			{current === null ? (
				<Oval
					height="200"
					width="200"
					color="#e44848"
					secondaryColor="#e44848"
				/>
			) : (
				<TruckDetailsCard truck={current} />
			)}
		</div>
	);
};

export default TruckDetails;
