import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Oval } from "react-loader-spinner";
import {
	selectError,
	selectIsLoading,
	selectAdverts,
	selectTotalAdverts,
	selectTotalFilteredAdverts,
	selectFilteredAdverts,
} from "../../redux/selectors";

import { fetchAdverts } from "../../redux/operations";
import FilterForm from "../../components/FilterForm";
import CampersList from "../../components/CampersList";

import {
	CatalogWrapper,
	FilerFormWrapper,
	CamperListWrapper,
	LoadMoreBtn,
} from "./Catalog.styled";

import { Notify } from "notiflix/build/notiflix-notify-aio";

const Catalog = () => {
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const adverts = useSelector(selectAdverts);
	const filteredAdverts = useSelector(selectFilteredAdverts);
	const [isFiltered, setIsFiltered] = useState(false);
	const total = useSelector(selectTotalAdverts);
	const totalFiltered = useSelector(selectTotalFilteredAdverts);
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

	useEffect(() => {
		if (total > 0) {
			Notify.success(`${total} adverts found!`);
		}
	}, [total]);

	useEffect(() => {
		if (totalFiltered > 0) {
			Notify.success(`${totalFiltered} filtered adverts found!`);
		}
	}, [totalFiltered]);

	const handleFilteredSubmit = () => {
		setIsFiltered(true);
	};

	const hadleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
	};

	const advertsToShow = isFiltered ? filteredAdverts : adverts;
	const totalToShow = isFiltered ? totalFiltered : total;

	return (
		<CatalogWrapper>
			<FilerFormWrapper>
				<FilterForm onSubmit={handleFilteredSubmit} />
			</FilerFormWrapper>
			<CamperListWrapper>
				{isLoading && !error && (
					<Oval
						height="200"
						width="200"
						color="#e44848"
						secondaryColor="#e44848"
					/>
				)}
				{advertsToShow.length === 0 ? null : (
					<CampersList campers={advertsToShow} />
				)}

				{totalToShow <= adverts.length
					? null
					: isLoading ||
					  isFiltered || (
							<LoadMoreBtn onClick={hadleLoadMore}>Load more</LoadMoreBtn>
					  )}
			</CamperListWrapper>
		</CatalogWrapper>
	);
};

export default Catalog;
