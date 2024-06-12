import { useSelector } from "react-redux";
import CardService from "../cards/CardService";
import { RootState } from "../../app/store";

function ServicesSection() {
	let services = useSelector((state: RootState) => state.services.data);
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] pb-[3rem] z-10">
				<div className="text-[64px] font-Sail_Regular pb-[3rem]">Nuestros Servicios</div>
				<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center mx-auto px-[15%] pt-5 gap-9">
					{" "}
					{services.length > 0 &&
						services.map((data, index) => (
							<CardService
								key={`home-service-${data.id}`} // Add a unique key for each CardMenu component
								image={data.coverImage}
								title={data.chortName}
								description={data.largeName}
								id={data.id}
								index={index + 1}
								length={services.length}
							/>
						))}
				</div>
			</div>
		</>
	);
}

export default ServicesSection;
