import ContainerLayout from "../../component/layout/containerLayout";
import ContactSection from "../../component/banner/ContactSection";
import BookingSection from "../../component/banner/BookingSection";
import ReservationCard from "../../component/cards/ReservationCard";
import { useEffect } from "react";

interface Data {
	image: string;
	title: string;
	description: string;
	id: number;
	date: Date;
	persons: number;
	price: 14;
}
const BookingsPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	let data: Data = {
		image: "/images/banner/Banners.png",
		title: "Titulo",
		description: "description",
		id: 1,
		date: new Date(),
		persons: 2,
		price: 14,
	};
	return (
		<>
			<ContainerLayout banner={false} key={`page-bookings`}>
				<div className="flex flex-col items-center justify-center  pt-[5rem]  z-10 bg-[#F1F1F1]">
					<div className="text-[64px] font-Sail_Regular pb-[3rem]">Mis reservas</div>
				</div>
				<div className="!w-[100%] flex flex-col justify-center items-center h-auto bg-[#F1F1F1] pb-[3rem] gap-5">
					<ReservationCard
						date={data.date}
						description={data.description}
						id={data.id}
						image={data.image}
						persons={data.persons}
						title={data.title}
						price={data.price}
					/>
					<ReservationCard
						date={data.date}
						description={data.description}
						id={data.id}
						image={data.image}
						persons={data.persons}
						title={data.title}
						price={data.price}
					/>
					<ReservationCard
						date={data.date}
						description={data.description}
						id={data.id}
						image={data.image}
						persons={data.persons}
						title={data.title}
						price={data.price}
					/>
				</div>
				<BookingSection />
				<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default BookingsPage;
