import CardService from "../cards/CardService";

function ServicesSection() {
	const cardMenuData = [
		{
			image: "/images/banner/Banners.png",
			title: "Arroz con pollo a la chorrera",
			description:
				"500g. Se elabora un fricasé de pollo con el que se adoba el arroz y se le agregan otros ingredientes. Se sirve con plátanos maduros fritos, huevo hervido, guisantes, maíz dulce, etc",
			id: 1,
			price: 6,
		},
		{
			image: "/images/banner/Banners.png",
			title: "Arroz con pollo a la chorrera",
			description:
				"500g. Se elabora un fricasé de pollo con el que se adoba el arroz y se le agregan otros ingredientes. Se sirve con plátanos maduros fritos, huevo hervido, guisantes, maíz dulce, etc",
			id: 1,
			price: 6.5,
		},
		{
			image: "/images/banner/Banners.png",
			title: "Arroz con pollo a la chorrera",
			description:
				"500g. Se elabora un fricasé de pollo con el que se adoba el arroz y se le agregan otros ingredientes. Se sirve con plátanos maduros fritos, huevo hervido, guisantes, maíz dulce, etc",
			id: 1,
			price: 6,
		},
		{
			image: "/images/banner/Banners.png",
			title: "Arroz con pollo a la chorrera",
			description:
				"500g. Se elabora un fricasé de pollo con el que se adoba el arroz y se le agregan otros ingredientes. Se sirve con plátanos maduros fritos, huevo hervido, guisantes, maíz dulce, etc",
			id: 1,
			price: 6,
		},
		{
			image: "/images/banner/Banners.png",
			title: "Arroz con pollo a la chorrera",
			description:
				"500g. Se elabora un fricasé de pollo con el que se adoba el arroz y se le agregan otros ingredientes. Se sirve con plátanos maduros fritos, huevo hervido, guisantes, maíz dulce, etc",
			id: 1,
			price: 6,
		},

		// Add more cardMenuData objects as needed
	];

	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[5rem] pb-[3rem] z-10">
				<div className="text-[64px] font-Sail_Regular pb-[3rem]">Nuestros Servicios</div>
				<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center mx-auto px-[15%] pt-5 gap-9">
					{" "}
					{cardMenuData.map((data, index) => (
						<CardService
							key={index} // Add a unique key for each CardMenu component
							image={data.image}
							title={data.title}
							description={data.description}
							id={data.id}
							index={index + 1}
							length={cardMenuData.length}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default ServicesSection;
