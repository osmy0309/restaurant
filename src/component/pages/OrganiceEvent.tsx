import BookingSection from "../banner/BookingSection";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { loadSettingData } from "../../features/settings/settingsSlice";
import { loadServiceData } from "../../features/services/servicesSlice";
import { loadChefSuggestionsData, loadDishesData } from "../../features/dishes/dishesSlice";
import { loadSpacesData } from "../../features/spaces/spacesSlice";
import ContactSection from "../banner/ContactSection";
import Banner from "../banner/BannerOrganizationEvent";
import OrganiceEventPage from "./servicespages/OrganiceEventPage";

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
			<Banner />
			<OrganiceEventPage />
			<BookingSection />
			<ContactSection />
		</>
	);
};
export default Home;
