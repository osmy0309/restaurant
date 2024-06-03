import CardSpace from "../cards/CardSpace";

function SpaceSection() {
	const cardMenuData = [
		{
			image: "/images/banner/carbon.png",
			title: "Al Carbón",
			description:
				"500g. Se elabora un fricasé de pollo con el que se adoba el arroz y se le agregan otros ingredientes. Se sirve con plátanos maduros fritos, huevo hervido, guisantes, maíz dulce, etc",
			id: 1,
		},
		{
			image: "/images/banner/ivanchef.png",
			title: "IvanChefjusto",
			description:
				"500g. Se elabora un fricasé de pollo con el que se adoba el arroz y se le agregan otros ingredientes. Se sirve con plátanos maduros fritos, huevo hervido, guisantes, maíz dulce, etc",
			id: 1,
		},
		{
			image: "/images/banner/dulceria.png",
			title: "Dulcería",
			description:
				"500g. Se elabora un fricasé de pollo con el que se adoba el arroz y se le agregan otros ingredientes. Se sirve con plátanos maduros fritos, huevo hervido, guisantes, maíz dulce, etc",
			id: 1,
		},
		// Add more cardMenuData objects as needed
	];
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] z-10">
				<div className="flex space-x-4 justify-items-center items-center   pb-[2rem]">
					<p className="font-Sail_Regular text-[64px] flex text-[#1F0B01] ">Nuestros Espacios</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center px-[10%] pt-5  gap-[1rem] pb-[1rem]">
					{cardMenuData.map((data, index) => (
						<CardSpace
							key={index} // Add a unique key for each CardMenu component
							image={data.image}
							title={data.title}
							description={data.description}
							id={data.id}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default SpaceSection;
