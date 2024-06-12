import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
//import { loadServiceData } from "../../features/services/servicesSlice";
import { useEffect, useState } from "react";
import ContainerLayout from "../../component/layout/containerLayout";
import { useParams } from "react-router-dom";
import { loadDishesData } from "../../features/dishes/dishesSlice";
import { DishDTO } from "../../shared/dtos/dishesDTO";
import CardDishDetail from "../../component/cards/CardDishDetail";
import SugerenciasSection from "../../component/banner/SugerenciasSection";

const DishDetailPage = () => {
	const { id } = useParams();
	const dispatch = useDispatch<AppDispatch>();
	let dishes = useSelector((state: RootState) => state.dishes.data);
	const [dish,setDish] = useState<DishDTO | undefined>(undefined)

	useEffect(() => {		
		dispatch(loadDishesData());
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	useEffect(() => {
		dishes.length > 0 && id && setDish(dishes.find((s) => s.id == parseInt(id)));
	}, [id, dishes]);

	return (
		<>
			<ContainerLayout banner={false} key={`page-dish-details-${id}`}>
			<div className="flex flex-col items-center justify-center bg-[#F1F1F1] pt-10 mt-20 z-10 p-10">
				<div className="w-[70%] bg-transparent">
				{dish && <CardDishDetail dish={dish}/>}
				</div>
			</div>
				
				<SugerenciasSection />
		
			</ContainerLayout>
		</>
	);
};
export default DishDetailPage;
