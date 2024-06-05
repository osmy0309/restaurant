import Dishes from "./pages/dishes";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";

function App() {
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
					<Route path="/login" element={<Login/>} />
				</Routes>
			</div>
			<div className="overflow-auto">
				<Routes>
					<Route path="/dishes" element={<Dishes />} />
				</Routes>
			</div>

		</BrowserRouter>
	);
}

export default App;
