import { sectionsDTO } from "../../shared/dtos/servicesDTO";
import CardEventsService from "../cards/CardEventsService";
interface ServiceSectionProps {
	list: sectionsDTO[];
}

function ServicesSections({ list }: ServiceSectionProps) {
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] pb-[3rem] z-10">
				<div className="grid grid-cols-1 md:grid-cols- items-center justify-items-center mx-auto  px-[15%] gap-[100px] ">
					{" "}
					{list.length > 0 ?
						list.map((data: any, index: number) => (
							<CardEventsService
								key={`service-section-${index}`}
								image={data.image}
								title={data.name}
								description={data.largeName}
								id={index}
								index={index}
							/>

						)) : <div className="h-auto text-[40px] font-bold font-Sail_Regular ">No tiene secciones</div>}
				</div>
			</div>
		</>
	);
}

export default ServicesSections;
