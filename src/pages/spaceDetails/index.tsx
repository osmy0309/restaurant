import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState } from "react";
import ContainerLayout from "../../component/layout/containerLayout";
import { useParams } from "react-router-dom";
import { SpaceDTO } from "../../shared/dtos/spacesDTO";
import { loadSpacesData } from "../../features/spaces/spacesSlice";
import SugerenciasSection from "../../component/banner/SugerenciasSection";

const SpaceDetailPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	const [space, setSpace] = useState<SpaceDTO | undefined>(undefined);
	let spaces = useSelector((state: RootState) => state.spaces.data);
	useEffect(() => {
		dispatch(loadSpacesData());
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);
	useEffect(() => {
		spaces.length > 0 && id && setSpace(spaces.find((s) => s.id == parseInt(id)));
		console.log(space);
		
	}, [id, spaces]);

	return (
		<>
			<ContainerLayout banner={false} key={`page-space-detail-${id}`}>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] pb-[3rem] z-10">
				<div className="text-[64px] font-Sail_Regular pb-[3rem]">Detalles del espacio</div>	
				</div>
				<SugerenciasSection />
			</ContainerLayout>
		</>
	);
};
export default SpaceDetailPage;
