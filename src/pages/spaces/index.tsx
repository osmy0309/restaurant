import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
//import { loadServiceData } from "../../features/services/servicesSlice";
import { useEffect, useState } from "react";
import ContainerLayout from "../../component/layout/containerLayout";
import ContactSection from "../../component/banner/ContactSection";
import BookingSection from "../../component/banner/BookingSection";
import BannerSpaces from "../../component/banner/BannerSpaces";
import { useParams } from "react-router-dom";
import SpacesSection from "../../component/servicespages/SpacesSection";
import { SpaceDTO } from "../../shared/dtos/spacesDTO";
import { loadSpacesData } from "../../features/spaces/spacesSlice";

const SpacesPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const [space, setSpace] = useState<SpaceDTO | undefined>(undefined);
	let spaces = useSelector((state: RootState) => state.spaces.data);
	useEffect(() => {
		dispatch(loadSpacesData());
	}, []);
	useEffect(() => {
		spaces.length > 0 && id && setSpace(spaces.find((s) => s.id == parseInt(id)));
	}, [id, spaces]);

	return (
		<>
			<ContainerLayout banner={false} key={`page-service-details-${id}`}>
				{space && (
					<>
						<BannerSpaces image={space.detailedImage} title={space.chortName} description={space.largeName} />
						<SpacesSection list={space} />
					</>
				)}
				<BookingSection />
				<ContactSection />
			</ContainerLayout>
		</>
	);
};
export default SpacesPage;
