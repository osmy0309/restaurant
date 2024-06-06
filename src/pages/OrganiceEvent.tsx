import BookingSection from "../component/banner/BookingSection";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { useEffect } from "react";
import { loadSettingData } from "../features/settings/settingsSlice";
import { loadServiceData } from "../features/services/servicesSlice";
import { loadChefSuggestionsData, loadDishesData } from "../features/dishes/dishesSlice";
import { loadSpacesData } from "../features/spaces/spacesSlice";
import ContactSection from "../component/banner/ContactSection";
import Banner from "../component/banner/BannerOrganizationEvent";
import OrganiceEventPage from "../component/servicespages/OrganiceEventPage";
import ContainerLayout from "../component/layout/containerLayout";

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
			
			<ContainerLayout banner={false} key={"page-home"}>
			<Banner />
			<OrganiceEventPage />
			<BookingSection />
			<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default Home;
