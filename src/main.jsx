import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import reduxStore from "./redux.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { path } from "./utils/constants.js";
import { Home } from "./containers/Public/index.js";
import Homepage from "./containers/Public/Homepage.jsx";
import LoginForm from "./components/LoginForm.jsx";
import DetailPost from "./containers/Public/DetailPost.jsx";
import React from "react";
import NewSaved from "./containers/Public/NewsSaved.jsx";
import AdminPage from "./containers/System/AdminPage.jsx";
import CreatePost from "./components/Admin/CreatePost.jsx";
import ListNewPost from "./containers/System/ListNewPost.jsx";

const { store, persistor } = reduxStore();
createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path={path.HOME} element={<Home />}>
							<Route path={"*"} element={<Homepage />} />
							<Route
								path={path.CHO_THUE_CAN_HO}
								element={<Homepage />}
							/>
							<Route
								path={path.CHO_THUE_MAT_BANG}
								element={<Homepage />}
							/>
							<Route
								path={path.CHO_THUE_PHONG_TRO}
								element={<Homepage />}
							/>
							<Route
								path={path.NHA_CHO_THUE}
								element={<Homepage />}
							/>
							<Route path={path.LOGIN} element={<LoginForm />} />
							<Route
								path={path.THE_NEWS_SAVED}
								element={<NewSaved />}
							/>
							<Route
								path={path.DETAIL_POST}
								element={<DetailPost />}
							/>
							<Route
								path={"chi-tiet/*"}
								element={<DetailPost />}
							/>
						</Route>
						<Route path={path.QUAN_LY} element={<AdminPage />}>
							<Route
								path={path.DANG_TIN_MOI}
								element={<CreatePost />}
							/>

							<Route
								path={path.DANH_SACH_TIN_MOI}
								element={<ListNewPost />}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
