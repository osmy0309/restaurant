import { useSelector } from "react-redux";
import CardSpace from "../cards/CardSpace";
import { RootState } from "../../app/store";

function SpaceSection() {
	let spaces = useSelector((state: RootState) => state.spaces.data);
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] z-10">
				<div className="flex space-x-4 justify-items-center items-center   pb-[2rem]">
					<p className="font-Sail_Regular text-[64px] flex text-[#1F0B01] ">Nuestros Espacios</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center px-[10%] pt-5  gap-[1rem] pb-[1rem]">
					{spaces.length > 0 &&
						spaces.map((data) => (
							<CardSpace
								key={`home-space-${data.id}`} // Add a unique key for each CardMenu component
								image={data.coverImage}
								title={data.chortName}
								description={data.largeName}
								id={data.id}
								category={data.category}
								networks={data.networks}
							/>
						))}
				</div>
			</div>
		</>
	);
}

export default SpaceSection;
