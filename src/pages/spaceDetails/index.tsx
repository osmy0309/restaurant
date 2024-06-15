import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState } from "react";
import ContainerLayout from "../../component/layout/containerLayout";
import { useParams } from "react-router-dom";
import SugerenciasSection from "../../component/banner/SugerenciasSection";
import { SpaceDTO } from "../../shared/dtos/spacesDTO";
import { loadSpacesData } from "../../features/spaces/spacesSlice";
import CardSpaceDetail from "../../component/cards/CardSpaceDetail";

const SpaceDetailPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	let spaces = useSelector((state: RootState) => state.spaces.data);
	const [space,setSpace] = useState<SpaceDTO | undefined>(undefined)

	useEffect(() => {		
		dispatch(loadSpacesData());
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	useEffect(() => {
		spaces.length > 0 && id && setSpace(spaces.find((s) => s.id == parseInt(id)));
	}, [id, spaces]);

	return (
		<>
			<ContainerLayout banner={false} key={`page-dish-details-${id}`}>
			<div className="flex flex-col items-center justify-center bg-[#F1F1F1] pt-10 mt-20 z-10 p-10">
				<div className="w-[70%] bg-transparent">
				{space && <CardSpaceDetail space={space}/>}
				</div>
			</div>				
				<SugerenciasSection />		
			</ContainerLayout>
		</>
	);
};
export default SpaceDetailPage;
