import IntermedialSection from "./IntermedialSection";
import BookingSection from "./BookingSection";
import ServicesSection from "./ServicesSection";
import SugerenciasSection from "./SugerenciasSection";
import SpaceSection from "./SpaceSection";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { loadSettingData } from "../../features/settings/settingsSlice";
import { loadServiceData } from "../../features/services/servicesSlice";
import { loadDishesData } from "../../features/dishes/dishesSlice";

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();
	let settings = useSelector(
		(state: RootState) => state.setting.data
	  );
	  let services = useSelector(
		(state: RootState) => state.services.data
	  );
	  let dishes = useSelector(
		(state: RootState) => state.dishes.data
	  );
	  useEffect(()=>{
		dispatch(loadSettingData())
		dispatch(loadServiceData())
		dispatch(loadDishesData())
	  },[])
	  useEffect(()=>{
		console.log("Settings en el estado :",settings);
		console.log("Services en el estado :",services);
		console.log("Dishes en el estado :",dishes);
		
	  },[settings,services,dishes])
	
	return (
		<>
			<ServicesSection />
			<IntermedialSection />
			<SugerenciasSection />
			<SpaceSection />
			<BookingSection />
		</>
	);
};
export default Home;
