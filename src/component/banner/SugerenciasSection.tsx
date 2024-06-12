import { Link } from "react-router-dom";
import CardMenu from "../cards/CardMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadChefSuggestionsData } from "../../features/dishes/dishesSlice";
import { AppDispatch, RootState } from "../../app/store";

function SugerenciasSection() {
	const dispatch = useDispatch<AppDispatch>();
	let dishes: any = useSelector((state: RootState) => state.dishes.chefSuggestions);
	useEffect(() => {
		dispatch(loadChefSuggestionsData());
	}, []);

	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[2rem] z-10">
				<div className="flex space-x-4 justify-items-center items-center   pb-[2rem]">
					<img src="/images/banner/Vector.png" className="w-[3rem] h-[3rem]  mr-3 ml-2 hover:cursor-pointer" />
					<p className="font-Sail_Regular text-[64px] flex text-[#1F0B01] ">Sugerencias del Chef</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center px-[10%] pt-5  gap-9 pb-[1rem]">
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
				<Link to="/dishes">
					<div className="rounded-[5px] flex justify-center items-center bg-[#E38A5D] h-[3rem] p-2 px-8 tracking-[5%] leading-[16px]  hover:cursor-pointer hover:bg-[#e4743c] transition-colors duration-300">
						<p className="text-white text-[16px] font-bold font-Roboto">Ver todo el Menú</p>
					</div>
				</Link>
			</div>
		</>
	);
}

export default SugerenciasSection;
