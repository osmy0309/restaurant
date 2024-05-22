import CardMenu from "../cards/CardMenu";

function Dishes() {
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
		// Add more cardMenuData objects as needed
	];
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

				<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center px-[10%] pt-5  gap-9">
					{cardMenuData.map((data, index) => (
						<CardMenu
							key={index} // Add a unique key for each CardMenu component
							image={data.image}
							title={data.title}
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
