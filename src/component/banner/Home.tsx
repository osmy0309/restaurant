import IntermedialSection from "./IntermedialSection";
import BookingSection from "./BookingSection";
import ServicesSection from "./ServicesSection";
import SugerenciasSection from "./SugerenciasSection";
import SpaceSection from "./SpaceSection";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { loadSettingData } from "../../features/settings/settingsSlice";
import { loadServiceData } from "../../features/services/servicesSlice";
import { loadChefSuggestionsData, loadDishesData } from "../../features/dishes/dishesSlice";
import { loadSpacesData } from "../../features/spaces/spacesSlice";
import ContactSection from "./ContactSection";

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(loadSettingData());
		dispatch(loadServiceData());
		dispatch(loadDishesData());
		dispatch(loadSpacesData());
		dispatch(loadChefSuggestionsData());
	}, []);
	
	return (
		<>
			<ServicesSection />
			<IntermedialSection />
			<SugerenciasSection />
			<SpaceSection />
			<BookingSection />
			<ContactSection />
		</>
	);
};
export default Home;
