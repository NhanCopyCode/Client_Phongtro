import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import reduxStore from "./redux.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { path } from "./utils/constants.js";
import {
	Home,
	RentalApartment,
	RentalHouse,
	RentalRoom,
	RentalSpace,
} from "./containers/Public/index.js";
import Homepage from "./containers/Public/Homepage.jsx";
import LoginForm from "./components/LoginForm.jsx";
import DetailPost from "./containers/Public/DetailPost.jsx";

const { store, persistor } = reduxStore();
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path={path.HOME} element={<Home />}>
							<Route path={"*"} element={<Homepage />} />
							<Route
								path={path.CHO_THUE_CAN_HO}
								element={<RentalApartment />}
							/>
							<Route
								path={path.CHO_THUE_MAT_BANG}
								element={<RentalSpace />}
							/>
							<Route
								path={path.CHO_THUE_PHONG_TRO}
								element={<RentalRoom />}
							/>
							<Route
								path={path.NHA_CHO_THUE}
								element={<RentalHouse />}
							/>
							<Route path={path.LOGIN} element={<LoginForm />} />
							<Route
								path={path.DETAIL_POST}
								element={<DetailPost />}
							/>
							<Route
								path={"chi-tiet/*"}
								element={<DetailPost />}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>
);
