import Dishes from "./pages/dishes";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import ServicesPage from "./pages/services";
import SpacesPage from "./pages/spaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { useEffect } from "react";
import { loadSettingData } from "./features/settings/settingsSlice";
import { loadServiceData } from "./features/services/servicesSlice";
import { loadDishesData } from "./features/dishes/dishesSlice";
import { autoLogin } from "./features/auth/authSlice";
import BookingsPage from "./pages/bookings";
import TermsPage from "./pages/terms";
import ReserveTablePage from "./pages/reserve/ReserveTablePage";

function App() {
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(loadSettingData());
		dispatch(loadServiceData());
		dispatch(loadDishesData());
		dispatch(autoLogin());
		//dispatch(logout());
	}, []);
	return (
		<BrowserRouter>
			<div className="overflow-auto">
				<Routes>
					<>
						<Route path="/" element={<Home />} />
					</>
				</Routes>
			</div>
			<div className="overflow-auto">
				<Routes>
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
			<div className="overflow-auto">
				<Routes>
					<Route path="/register/:type" element={<Login />} />
				</Routes>
			</div>
			<div className="overflow-auto">
				<Routes>
					<Route path="/dishes" element={<Dishes />} />
				</Routes>
			</div>
			<div className="overflow-auto">
				<Routes>
					<>
						<Route path="/services/:id" element={<ServicesPage />} />
					</>
				</Routes>
			</div>
			<div className="overflow-auto">
				<Routes>
					<>
						<Route path="/spaces/:id" element={<SpacesPage />} />
					</>
				</Routes>
			</div>
			<div className="overflow-auto">
				<Routes>
					<>
						<Route path="/reserve/table/:spaceId" element={<ReserveTablePage />} />
					</>
				</Routes>
			</div>
			<div className="overflow-auto">
				<Routes>
					<>
						<Route path="/bookings" element={<BookingsPage />} />
					</>
				</Routes>
			</div>
			<div className="overflow-auto">
				<Routes>
					<>
						<Route path="/terms" element={<TermsPage />} />
					</>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
