import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import "./index.css";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";

function shouldForwardProp(propName, target) {
	if (typeof target === "string") {
		return isPropValid(propName);
	}
	return true;
}
createRoot(document.getElementById("root")).render(
	<StyleSheetManager shouldForwardProp={shouldForwardProp}>
		<StrictMode>
			<BrowserRouter basename="/">
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<App />
					</PersistGate>
				</Provider>
			</BrowserRouter>
		</StrictMode>
	</StyleSheetManager>
);
