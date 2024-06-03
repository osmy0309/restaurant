import IntermedialSection from "./IntermedialSection";
import BookingSection from "./BookingSection";
import ServicesSection from "./ServicesSection";
import SugerenciasSection from "./SugerenciasSection";
import SpaceSection from "./SpaceSection";

const Home = () => {
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
