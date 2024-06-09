import { useDispatch, useSelector } from "react-redux";
import CardMenu from "../../component/cards/CardMenu";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../app/store";
import { loadDishesData } from "../../features/dishes/dishesSlice";
import { loadSpacesData } from "../../features/spaces/spacesSlice";
import { DishDTO } from "../../shared/dtos/dishesDTO";
import { SpaceDTO } from "../../shared/dtos/spacesDTO";
import ContainerLayout from "../../component/layout/containerLayout";

function Dishes() {
	const dispatch = useDispatch<AppDispatch>();
	let dishes = useSelector((state: RootState) => state.dishes.data);
	let spaces = useSelector((state: RootState) => state.spaces.data);
	const [data,setData] = useState<DishDTO[]>([]);
	const [spaceId, setSpaceId] = useState<number>(0);
	useEffect(() => {
		window.scrollTo(0, 0)
		dispatch(loadDishesData());
		dispatch(loadSpacesData())
	}, []);

	useEffect(() => {
		spaceId != 0 ? setData(dishes.filter(d=>d.idSpace==spaceId)) : setData(dishes);
		
	}, [spaceId,dishes])

	const handleSpaceSelect = (id: number): void => {
		spaceId != id ? setSpaceId(id) : setSpaceId(0);
	}

	return (
		<>
			<ContainerLayout banner={false} key={"page-home"}>
				<div className="bg-top bg-no-repeat flex flex-col items-center justify-center bg-black pt-[2rem] mt-[80px] z-10 bg-[url('/images/fondo_menu.png')]">{/*images/dish/font.png */}
					<div className="flex space-x-4  pb-[2rem] mt-20">
						{
							spaces.length > 0 && spaces.map((data: SpaceDTO) => (
								<div key={`space-filter-dishes-${data.id}`} onClick={() => handleSpaceSelect(data.id)} className={`${spaceId == data.id ? 'bg-[#E38A5D]' : 'bg-[#ffebe1]'} rounded-[5px] flex justify-center items-center p-2 px-8 tracking-[5%] leading-[16px] text-[14px] font-normal font-Roboto hover:cursor-pointer hover:bg-[#e0c5b8] transition-colors duration-300`}>
									{
										data.chortName
									}
								</div>
							))
						}

					</div>
					<div className="text-[40px] font-Sail_Regular pb-[3rem] text-[#fff] mt-5 flex">
						<img
							src="/images/dish/icon.png"
							className="text-white w-[30px] h-[40px] mt-2 mr-2 hover:cursor-pointer"
						/>
						Menús</div>

					<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center px-[10%] pt-5 pb-10  gap-9">
						{data.length > 0 && data.map((data: DishDTO) => (
							<CardMenu
								key={`dish-${data.id}`}
								image={data.image}
								title={data.name}
								description={data.description}
								id={data.id}
								price={data.price}
							/>
						))}
					</div>
				</div>
			</ContainerLayout>
		</>
	);
}

export default Dishes;
