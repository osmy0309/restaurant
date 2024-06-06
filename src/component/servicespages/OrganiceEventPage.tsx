import { useSelector } from "react-redux";
import CardEventsService from "../cards/CardEventsService";
import { RootState } from "../../app/store";

function ServicesSection() {
	let services = useSelector((state: RootState) => state.services.data);
	let dishes: any = useSelector((state: RootState) => state.dishes.chefSuggestions);

	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] pb-[3rem] z-10">
				<div className="grid grid-cols-1 md:grid-cols- items-center justify-items-center mx-auto  px-[15%] gap-[100px] ">
					{" "}
					{services.length > 0 &&
						dishes.map((data: any, index: any) => (
							<CardEventsService
								key={`home-service-${data.id}`} // Add a unique key for each CardMenu component
								image={data.image}
								title={data.name}
								description={data.description}
								id={data.id}
								index={index}
							/>
						))}
				</div>
			</div>
		</>
	);
}

export default ServicesSection;
