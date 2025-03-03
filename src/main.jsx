import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import reduxStore from "./redux.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { path } from "./utils/constants.js";
import Login from "./containers/Public/Login.jsx";
import { Home } from "./containers/Public/index.js";

const { store, persistor } = reduxStore();
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path={path.HOME} element={<Home />}>
							<Route path={path.LOGIN} element={<Login />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>
);
