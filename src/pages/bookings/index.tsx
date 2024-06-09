import ContainerLayout from "../../component/layout/containerLayout";
import ContactSection from "../../component/banner/ContactSection";
import BookingSection from "../../component/banner/BookingSection";
import { useEffect } from "react";

const BookingsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	return (
		<>
			<ContainerLayout banner={false} key={`page-bookings`}>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] pb-[3rem] z-10">
				<div className="text-[64px] font-Sail_Regular pb-[3rem]">Mis reservas</div>	
				</div>
				<BookingSection />
				<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default BookingsPage;
