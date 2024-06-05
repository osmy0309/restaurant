import IntermedialSection from "../../component/banner/IntermedialSection";
import BookingSection from "../../component/banner/BookingSection";
import ServicesSection from "../../component/banner/ServicesSection";
import SugerenciasSection from "../../component/banner/SugerenciasSection";
import SpaceSection from "../../component/banner/SpaceSection";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { loadSettingData } from "../../features/settings/settingsSlice";
import { loadServiceData } from "../../features/services/servicesSlice";
import { loadChefSuggestionsData, loadDishesData } from "../../features/dishes/dishesSlice";
import { loadSpacesData } from "../../features/spaces/spacesSlice";
import ContactSection from "../../component/banner/ContactSection";
import ContainerLayout from "../../component/layout/containerLayout";

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
			<ContainerLayout banner={true} key={"page-home"}>
				<ServicesSection />
				<IntermedialSection />
				<SugerenciasSection />
				<SpaceSection />
				<BookingSection />
				<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default Home;
