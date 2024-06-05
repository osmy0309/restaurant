interface CardMenuProps {
	image: string;
	title: string;
	description: string;
	price: number | string;
	id: number;
}

function CardMenu({ image, title, description, price }: CardMenuProps) {
	return (
		<div
			className={`h-auto flex flex-col rounded-[20px] bg-transparent border  z-10 hover:hover:shadow-left-bottom transition-shadow duration-300 border-bordermenu  cursor-pointer`}
		>
			<div className="w-[100%] h-[300px] bg-transparent hover:cursor-pointer">
				<img className="w-[100%] h-full rounded-t-[20px]" src={image} alt={title} />
			</div>
			<div className="flex flex-col p-[36px] bg-white gap-3 font-Roboto rounded-b-[20px]">
				<div className="text-[18px] font-bold h-[4rem]">{title}</div>
				<div className="h-[10rem] text-[14px]" dangerouslySetInnerHTML={{ __html: description }} />
				<div className="text-[16px] text-[#D16733] font-bold">{price} USD</div>
				<div className="text-[15px] rounded-[10px] border-[1px] border-[#BFA598] text-[#D16733] p-3 w-[65%] font-bold flex items-center justify-center gap-2 hover:bg-[#ffebe1] transition-colors duration-300 cursor-pointer">
					<img className="h-[25px]" src="/images/card/cart.png" alt="Add to cart" /> Añadir al carrito
				</div>
			</div>
		</div>
	);
}

export default CardMenu;
