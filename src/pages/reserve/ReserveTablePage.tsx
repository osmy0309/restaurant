import ContainerLayout from "../../component/layout/containerLayout";
import ContactSection from "../../component/banner/ContactSection";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReserveForm from "../../component/form/ReserveForm";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ReserveTablePage = () => {
	const {spaceId} = useParams();
	let auth = useSelector((state: RootState) => state.auth.data);
	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [spaceId])
	return (
		<>
			<ContainerLayout banner={false} key={`page-bookings`}>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] pb-[3rem] z-10 mt-20">
			<img
							src="/images/reserve/IvánChefsJusto.png"
							className="w-[12rem] h-[2rem] hover:cursor-pointer"
						/>
			
				{/*<div className="text-[64px] font-Sail_Regular pb-[3rem]">Reserva una Mesa</div>	 */}
				</div>
				<ReserveForm email={auth?.email} spaceId={spaceId}/>
				<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default ReserveTablePage;
