import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Favorites = lazy(() => import("./pages/Favorites"));

function App() {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route index element={<Home />} />
						<Route path="catalog" element={<Catalog />} />
						<Route path="favorites" element={<Favorites />} />
						{/* <Route path="movies" element={<Movies />} /> */}
						{/* <Route path="movies/:movieId" element={<MovieDetails />}> */}
						{/* <Route path="cast" element={<Cast />} /> */}
						{/* <Route path="reviews" element={<MovieReviews />} /> */}
						{/* </Route> */}
						{/* <Route path="*" element={<NotFound />} /> */}
					</Route>
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
