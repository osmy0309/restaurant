import { SpaceDTO } from "../../shared/dtos/spacesDTO";
import CardEventsService from "../cards/CardEventsService";
interface ServiceSectionProps {
	list: SpaceDTO;
}

function ServicesSections({ list }: ServiceSectionProps) {
	console.log("espacios a mostrar", list);
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] pb-[3rem] z-10">
				<div className="grid grid-cols-1 md:grid-cols- items-center justify-items-center mx-auto  px-[15%] gap-[100px] ">
					{" "}
					{list ? (
						<CardEventsService
							key={`service-section-${list.id}`}
							image={list.coverImage}
							title={list.chortName}
							description={list.description}
							id={list.id}
							index={0}
						/>
					) : (
						<div className="h-auto text-[40px] font-bold font-Sail_Regular ">No tiene espacios</div>
					)}
				</div>
			</div>
		</>
	);
}

export default ServicesSections;
