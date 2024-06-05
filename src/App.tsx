import Menu from "./component/menu/Menu";
import Banner from "./component/banner/Banner";
import Dishes from "./component/dishes/Dishes";
import Home from "./component/banner/Home";
import OrganiceEvent from "./component/pages/OrganiceEvent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<div className="bg-white">
				<Menu />

				<div className="overflow-auto">
					<Routes>
						<Route path="/dishes" element={<Dishes />} />
					</Routes>
				</div>
				<div className="overflow-auto pb-[2rem]">
					<Routes>
						<>
							<Route path="/" element={<Home />} />
						</>
					</Routes>
				</div>
				<div className="overflow-auto pb-[2rem]">
					<Routes>
						<>
							<Route path="/organizationevent" element={<OrganiceEvent />} />
						</>
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
