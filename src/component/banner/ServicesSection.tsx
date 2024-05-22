import { useState } from "react";
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
	const [length, setLength] = useState(cardMenuData.length);
	const dismLength = () => {
		setLength(length - 1);
	};
	return (
		<>
			<div className="flex flex-col items-center justify-center bg-white pt-[2rem] z-10">
				<div className="text-[64px] font-Sail_Regular">Nuestros Servicios</div>
				<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center mx-auto px-[10%] pt-5 gap-9">
					{" "}
					{cardMenuData.map((data, index) => (
						<CardService
							key={index} // Add a unique key for each CardMenu component
							image={data.image}
							title={data.title}
							description={data.description}
							id={data.id}
							index={length + 1}
							dismLength={dismLength}
							length={length}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default ServicesSection;
