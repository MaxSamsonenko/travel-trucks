import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectError,
	selectIsLoading,
	selectAdverts,
	selectTotalAdverts,
} from "../../redux/selectors";

import { fetchAdverts } from "../../redux/operations";
import Modal from "../../components/Modal";
import FilterForm from "../../components/FilterForm";
import CampersList from "../../components/CampersList";

import {
	CatalogWrapper,
	FilerFormWrapper,
	CamperListWrapper,
	LoadMoreBtn,
} from "./Catalog.styled";

const Catalog = () => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedCamper, setSelectedCamper] = useState(null);
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const adverts = useSelector(selectAdverts);
	const total = useSelector(selectTotalAdverts);
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	const isInitialMount = useRef(true);
	const fetchedPages = useRef(new Set());

	useEffect(() => {
		if (isInitialMount.current && adverts.length === 0) {
			isInitialMount.current = false;
			dispatch(fetchAdverts({ page: 1 }));
			fetchedPages.current.add(1);
		}
	}, [dispatch, adverts.length]);

	useEffect(() => {
		if (!fetchedPages.current.has(page) && page > 1) {
			dispatch(fetchAdverts({ page }));
			fetchedPages.current.add(page);
		}
	}, [dispatch, page]);

	const handleOpenModal = (camper) => {
		setSelectedCamper(camper);
		setModalOpen(true);
	};
	const handleCloseModal = () => {
		setModalOpen(false);
	};

	const hadleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};
	return (
		<CatalogWrapper>
			<FilerFormWrapper>
				<FilterForm />
			</FilerFormWrapper>
			<CamperListWrapper>
				{isLoading && !error && <b>Request in progress...</b>}
				<CampersList openModal={handleOpenModal} campers={adverts} />
				{total <= adverts.length
					? null
					: isLoading || (
							<LoadMoreBtn onClick={hadleLoadMore}>Load more</LoadMoreBtn>
					  )}

				{isModalOpen && (
					<Modal closeModal={handleCloseModal} camper={selectedCamper} />
				)}
			</CamperListWrapper>
		</CatalogWrapper>
	);
};

export default Catalog;
