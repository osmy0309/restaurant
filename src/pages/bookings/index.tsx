import ContainerLayout from "../../component/layout/containerLayout";
import ContactSection from "../../component/banner/ContactSection";
import BookingSection from "../../component/banner/BookingSection";
import ReservationCard from "../../component/cards/ReservationCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { loadBookingsData } from "../../features/bookings/bookingsSlice";
import { useNavigate } from "react-router-dom";
import { loadSpacesData } from "../../features/spaces/spacesSlice";

const BookingsPage = () => {
	const navigate = useNavigate();
	let bookings = useSelector((state: RootState) => state.bookings.data);
	let auth = useSelector((state: RootState) => state.auth.data);
	let spaces = useSelector((state: RootState) => state.spaces.data);
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		window.scrollTo(0, 0);
		dispatch(loadSpacesData());
	}, []);

	useEffect(() => {
		auth?.email ? dispatch(loadBookingsData(auth?.email)) : navigate("/");
	}, [auth])

	useEffect(() => {
		console.log("Bookings :", bookings);
	}, [bookings])

	return (
		<>
			<ContainerLayout banner={false} key={`page-bookings`}>
				<div className="flex flex-col items-center justify-center  pt-[5rem]  z-10 bg-[#F1F1F1]">
					<div className="text-[64px] font-Sail_Regular pb-[3rem]">Mis reservas</div>
				</div>
				<div className="!w-[100%] flex flex-col justify-center items-center h-auto bg-[#F1F1F1] pb-[3rem] gap-5">
					{bookings?.length > 0 && bookings.map(b => (<ReservationCard
						key={`booking-${b.id}`}
						date={b.date}
						time={b.schedule || "8:00"}
						description={b.description || "Sin descripción"}
						id={b.id || "1"}
						image={spaces?.find(s=>s.chortName == b.spaceName)?.coverImage || ""}
						persons={b.pax}
						title={`${b.fullName} - ${b.spaceName}`}
						status={b.status || ""}
						price={0}
					/>))}
				</div>
				<BookingSection />
				<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default BookingsPage;
