import Menu from "./component/menu/Menu";
import Banner from "./component/banner/Banner";
import Dishes from "./component/dishes/Dishes";
import ServicesSection from "./component/banner/ServicesSection";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="bg-white">
				<Menu />
				<Banner />

				<div className="overflow-auto">
					<Routes>
						<Route path="/dishes" element={<Dishes />} />
					</Routes>
				</div>
				<div className="overflow-auto">
					<Routes>
						<Route path="/" element={<ServicesSection />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
