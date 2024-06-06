import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { loadServiceData } from "../../features/services/servicesSlice";
import { useEffect, useState } from "react";
import ContainerLayout from "../../component/layout/containerLayout";
import ContactSection from "../../component/banner/ContactSection";
import BookingSection from "../../component/banner/BookingSection";
import BannerServices from "../../component/banner/BannerServices";
import { useParams } from "react-router-dom";
import ServicesSections from "../../component/servicespages/ServicesSections";
import { ServiceDTO } from "../../shared/dtos/servicesDTO";

const ServicesPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const [service, setService] = useState<ServiceDTO | undefined>(undefined);
	let services = useSelector((state: RootState) => state.services.data);
	useEffect(() => {
		dispatch(loadServiceData());
	}, []);
	useEffect(() => {
		services.length > 0 && id && setService(services.find((s) => s.id == parseInt(id)));
	}, [id, services]);

	return (
		<>
			<ContainerLayout banner={false} key={`page-service-details-${id}`}>
				{service && (
					<>
						<BannerServices image={service.detailedImage} title={service.chortName} description={service.largeName} />
						<ServicesSections list={service.sections} />
					</>
				)}
				<BookingSection />
				<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default ServicesPage;
