import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";

const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const TruckDetails = lazy(() => import("./components/TruckDetails"));

function App() {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route index element={<Home />} />
						<Route path="catalog" element={<Catalog />} />
						<Route path="catalog/:id" element={<TruckDetails />} />
					</Route>
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
