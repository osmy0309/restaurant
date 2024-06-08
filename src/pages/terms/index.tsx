import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import ContainerLayout from "../../component/layout/containerLayout";
import ContactSection from "../../component/banner/ContactSection";
import BookingSection from "../../component/banner/BookingSection";
import { loadTermsData } from "../../features/terms/termsSlice";

const TermsPage = () => {
	const dispatch = useDispatch<AppDispatch>();
	let terms = useSelector((state: RootState) => state.terms.data);
	useEffect(() => {
		dispatch(loadTermsData());
	}, []);

	return (
		<>
			<ContainerLayout banner={false} key={`page-terms`}>
				<div className="flex flex-col items-center justify-center bg-white pt-[5rem] pb-[3rem] z-10">
					<div className="text-[64px] font-Sail_Regular pb-[3rem]">Términos y condiciones</div>
					<div className="grid grid-cols-4 gap-4">
						<div className="col-start-2 col-span-2"><span className=" text-[16px] font-Roboto" dangerouslySetInnerHTML={{ __html: terms || "" }} /></div>
					</div>

				</div>
				<BookingSection />
				<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default TermsPage;
