import { useDispatch, useSelector } from "react-redux";
import CardMenu from "../cards/CardMenu";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../app/store";
import { loadDishesData } from "../../features/dishes/dishesSlice";
import { loadSpacesData } from "../../features/spaces/spacesSlice";
import { DishDTO } from "../../shared/dtos/dishesDTO";
import { SpaceDTO } from "../../shared/dtos/spacesDTO";

function Dishes() {
	const dispatch = useDispatch<AppDispatch>();
	let dishes = useSelector((state: RootState) => state.dishes.data);
	let spaces = useSelector((state: RootState) => state.spaces.data);
	const [spaceId,setSpaceId] = useState<number>(0);
	useEffect(() => {
		dispatch(loadDishesData());
		dispatch(loadSpacesData())
	}, []);

	useEffect(()=>{
		spaceId != 0 ? dispatch(loadDishesData(spaceId)):dispatch(loadDishesData());;
	},[spaceId])

	const handleSpaceSelect = (id:number):void =>{
		spaceId != id ? setSpaceId(id) : setSpaceId(0);
	}

	return (
		<>
			<div className="flex flex-col items-center justify-center bg-black pt-[2rem] z-10">
				<div className="flex space-x-4  pb-[2rem]">
					{
						spaces.length > 0 && spaces.map((data: SpaceDTO) => (
							<div onClick={()=>handleSpaceSelect(data.id)} className={`${spaceId == data.id ? 'bg-[#E38A5D]' : 'bg-[#ffebe1]'} rounded-[5px] flex justify-center items-center p-2 px-8 tracking-[5%] leading-[16px] text-[14px] font-normal font-Roboto hover:cursor-pointer hover:bg-[#e0c5b8] transition-colors duration-300`}>
								{
									data.chortName
								}
							</div>
						))
					}
					
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center px-[10%] pt-5 pb-10  gap-9">
					{dishes.length > 0 && dishes.map((data: DishDTO) => (
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
		</>
	);
}

export default Dishes;
