function BookingSection() {
	return (
		<div className="pb-[2rem] pt-[5rem]">
			<div className="bg-[url('/images/banner/Banners.png')] bg-cover bg-center w-full !h-[800px] flex gap-5 pl-[10%]">
				<div className=" flex flex-col p-[5rem]  w-[60%]">
					<p className="font-Sail_Regular text-[#FED053] text-[96px]">Reserva</p>
					<p className="font-Roboto text-[20px]  text-[#FFFFFF] pb-[1rem]">
						Disfruta la experiencia de nuestros ambientes o regala y envía una comida especial a tus seres queridos.
					</p>
					<p className="font-Roboto text-[16px] text-[#FFFFFF] pb-[2rem]">
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con
					</p>

					<div className=" w-[30%] rounded-[5px] flex justify-center items-center bg-[#E38A5D] h-[3rem] p-2 px-8 tracking-[5%] leading-[16px]  hover:cursor-pointer hover:bg-[#e4743c] transition-colors duration-300">
						<p className="text-white text-[16px] font-bold font-Roboto">Reserva</p>
					</div>
				</div>
				<div className=" w-full flex pl-[5rem] ">
					<img src="/images/banner/reserva.png" className="h-full w-[70%]" />
				</div>
			</div>
		</div>
	);
}

export default BookingSection;
