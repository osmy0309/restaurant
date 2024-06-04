import { useDispatch, useSelector } from "react-redux";
import CardMenu from "../cards/CardMenu";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../app/store";
import { loadDishesData } from "../../features/dishes/dishesSlice";

function Dishes() {
	const dispatch = useDispatch<AppDispatch>();
	let dishes: any = useSelector((state: RootState) => state.dishes.data);
	useEffect(() => {
		dispatch(loadDishesData());
	}, []);
	useEffect(() => {
		console.log("Dishes en el estado :", dishes);
	}, [dishes]);

	return (
		<>
			<div className="flex flex-col items-center justify-center bg-black pt-[2rem] z-10">
				<div className="flex space-x-4  pb-[2rem]">
					<div className="rounded-[5px] flex justify-center items-center bg-[#ffebe1] p-2 px-8 tracking-[5%] leading-[16px] text-[14px] font-normal font-Roboto hover:cursor-pointer hover:bg-[#e0c5b8] transition-colors duration-300">
						Al Carbón
					</div>
					<div className="rounded-[5px] flex justify-center items-center bg-[#ffebe1] p-2 px-8 tracking-[5%] leading-[16px] text-[14px] font-normal font-Roboto hover:cursor-pointer hover:bg-[#e0c5b8] transition-colors duration-300">
						Ivan Chef Justo
					</div>
					<div className="rounded-[5px] flex justify-center items-center bg-[#ffebe1] p-2 px-8 tracking-[5%] leading-[16px] text-[14px] font-normal font-Roboto hover:cursor-pointer hover:bg-[#e0c5b8] transition-colors duration-300">
						Dulcería
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center px-[10%] pt-5 pb-10  gap-9">
					{dishes.map((data: any, index: any) => (
						<CardMenu
							key={index} // Add a unique key for each CardMenu component
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
