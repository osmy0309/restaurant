import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Menu() {
	const [servicesSelected, setServicesSelected] = useState(false);
	const [espaciosSelected, setEspaciosSelected] = useState(false);
	const location = useLocation();
	const handleClickServices = () => {
		setServicesSelected(!servicesSelected);
	};

	return (
		<>
			<div className={`fixed top-0 left-0 right-0 bg-transparent md:bg-bgmenu h-[83px] flex items-center justify-between z-50`}>
				<div>
					<section className="text-[#FFFFFF] text-[32px] flex md:px-6  items-center">
						<img
							src="/images/menu/iconamoon_menu-burger-horizontal-bold.png"
							className="w-[2rem] h-[2rem] md:hidden mr-3 ml-2 hover:cursor-pointer"
						/>
						<p className="font-Roboto">Iván</p> <p className="font-Jaini_Purva">ChefsJusto </p>
					</section>
				</div>
				<div className="hidden md:text-[#FFFFFF] md:flex md:gap-5 md:mx-auto md:font-bold">
					<Link to="/">
						<div
							className={`hover:cursor-pointer hover:text-[#E38A5D] ${location.pathname === "/" ? "text-[#E38A5D]" : "text-[#FFFFFF]"}`}
							onMouseEnter={() => {
								setEspaciosSelected(false);
								setServicesSelected(false);
							}}
						>
							Inicio
						</div>
					</Link>
					<div className=" flex relative hover:cursor-pointer ">
						<div
							className="  flex items-center gap-2  hover:text-[#E38A5D]"
							onMouseEnter={() => {
								setEspaciosSelected(false);
								setServicesSelected(true);
							}}
						>
							Servicios
							<FontAwesomeIcon
								icon={faChevronDown}
								className="size-[0.6rem]"
								onMouseEnter={() => setServicesSelected(true)}
								onClick={handleClickServices}
							/>
						</div>

						<div className={`hover:cursor-auto  ${servicesSelected ? "opacity-100 animate-fade z-20" : "opacity-50 z-0 hidden "}`}>
							<div className="absolute w-5  border-[10px] border-[#FFFFFF] border-solid border-t-transparent border-r-transparent border-l-transparent -bottom-[78%] left-[30%]"></div>{" "}
							<div
								onMouseOut={() => setServicesSelected(false)}
								className="fixed inset-0 top-[70px] flex items-center !w-[90%] justify-center bg-[#FFFFFF] text-black border border-FF40 rounded-[1px]"
								style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", width: "80vw", height: "80vh" }}
							>
								Sevicios
							</div>
						</div>
					</div>
					<div className=" flex relative hover:cursor-pointer ">
						<div
							className="  flex items-center gap-2  hover:text-[#E38A5D]"
							onMouseEnter={() => {
								setEspaciosSelected(true);
								setServicesSelected(false);
							}}
						>
							Espacios
							<FontAwesomeIcon
								icon={faChevronDown}
								className="size-[0.6rem]"
								onMouseEnter={() => setServicesSelected(true)}
								onClick={handleClickServices}
							/>
						</div>

						<div className={`hover:cursor-auto  ${espaciosSelected ? "opacity-100 animate-fade z-20" : "opacity-50 z-0 hidden "}`}>
							<div className="absolute w-5  border-[10px] border-[#FFFFFF] border-solid border-t-transparent border-r-transparent border-l-transparent -bottom-[78%] left-[30%]"></div>{" "}
							<div
								onMouseOut={() => setEspaciosSelected(false)}
								className="fixed inset-0 top-[70px] flex items-center !w-[90%] justify-center bg-[#FFFFFF] text-black border border-FF40 rounded-[1px]"
								style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", width: "80vw", height: "80vh" }}
							>
								Espacios
							</div>
						</div>
					</div>

					<div
						className="hover:cursor-pointer hover:text-[#E38A5D]"
						onMouseEnter={() => {
							setEspaciosSelected(false);
							setServicesSelected(false);
						}}
					>
						Contact
					</div>
					<Link to="/dishes">
						<div
							className={`hover:cursor-pointer hover:text-[#E38A5D] ${location.pathname === "/dishes" ? "text-[#E38A5D]" : "text-[#FFFFFF]"}`}
							onMouseEnter={() => {
								setEspaciosSelected(false);
								setServicesSelected(false);
							}}
						>
							Menús
						</div>
					</Link>
				</div>
				<div className=" text-[#FFFFFF] flex gap-6 items-center mr-5 right-0">
					<img src="/images/menu/iconamoon_search-bold.png" className="w-[1.5rem] h-[1.5rem] hidden md:inline-block" />
					<img src="/images/menu/solar_user-broken.png" className="w-[2.5rem] h-[2.5rem] " />

					<div className=" hover:cursor-pointer text-[16px]  px-3 py-2 hidden md:inline-block">
						<p className=" font-bold">Inicial</p>
					</div>
					<div className="hover:cursor-pointer text-FF80 text-[16px] border border-FF40 rounded px-3 py-2 hidden md:inline-block">
						<p className=" font-bold">Registrarse</p>
					</div>
					<div className="hover:cursor-pointer text-[16px] border border-FF40 rounded-[8px] px-5 py-3 flex items-center justify-center text-center bg-[#E38A5D] w-[10rem]">
						<p className=" font-bold">Reserva</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
