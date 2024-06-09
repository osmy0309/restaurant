import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import CardServiceMenu from "../cards/CardServiceMenu";
import CardSpaceMenu from "../cards/CardSpaceMenu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { loadServiceData } from "../../features/services/servicesSlice";
import { loadSpacesData } from "../../features/spaces/spacesSlice";
import { logout } from "../../features/auth/authSlice";

function Menu() {
	const [servicesSelected, setServicesSelected] = useState(false);
	const [espaciosSelected, setEspaciosSelected] = useState(false);
	const [out, setOut] = useState(false);
	const location = useLocation();
	const handleClickServices = () => {
		setServicesSelected(!servicesSelected);
	};
	useEffect(() => {
		let handler = () => {
			setEspaciosSelected(false);
			setServicesSelected(false);
		};
		document.addEventListener("mousedown", handler);
	});

	const handleClickSpaces = () => {
		setEspaciosSelected(!espaciosSelected);
	};
	const handleCloseMenuSelect = () => {
		setEspaciosSelected(false);
		setServicesSelected(false);
	};
	const dispatch = useDispatch<AppDispatch>();
	let services = useSelector((state: RootState) => state.services.data);
	let auth = useSelector((state: RootState) => state.auth.data);
	let spaces = useSelector((state: RootState) => state.spaces.data);
	useEffect(() => {
		dispatch(loadServiceData());
		dispatch(loadSpacesData());
	}, []);

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<>
			<div className={`fixed top-0 left-0 right-0 bg-transparent md:bg-bgmenu h-[83px] flex items-center justify-between z-50`}>
				<div className="w-[20%]">
					<section className="text-[#FFFFFF] text-[32px] flex md:px-6  items-center">
						<img
							src="/images/menu/iconamoon_menu-burger-horizontal-bold.png"
							className="w-[2rem] h-[2rem] md:hidden mr-3 ml-2 hover:cursor-pointer"
						/>
						<Link to="/">
						<img
							src="/images/menu/IvánChefs Justo.png"
							className="w-[12rem] h-[2rem] mr-[12rem] hover:cursor-pointer"
						/>
						</Link>
						{/*<p className="font-Roboto">Iván </p> <p className="font-Jaini_Purva"> Chefs Justo </p>*/}
					</section>
				</div>
				<div className="w-[60%] hidden md:text-[#FFFFFF] md:flex md:gap-5 md:mx-auto md:font-bold">
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
							className={`flex items-center gap-2 hover:text-[#E38A5D] ${location.pathname === "/organizationevent" ? "text-[#E38A5D]" : "text-[#FFFFFF]"
								}`}
							onMouseEnter={() => {
								setEspaciosSelected(false);
								setServicesSelected(true);
							}}
							onClick={() => {
								setServicesSelected(false);
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
								//onMouseOut={() => setServicesSelected(false)}
								className="max-h-[40rem] overflow-auto fixed  inset-0 top-[70px] flex items-center !w-[100%] !h-[55%] xl:!h-auto 2xl:!h-[40rem] justify-center bg-[#FFFFFF] text-black border border-FF40 rounded-[1px]"
								style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", width: "80vw", height: "80vh" }}
							>
								<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center px-[8rem]  gap-9">
									{services.length > 0 &&
										services.map((data: any, index: any) => (
											<CardServiceMenu
												key={index} // Add a unique key for each CardMenu component
												image={data.coverImage}
												title={data.chortName}
												description={data.largeName}
												id={data.id}
												handleCloseMenuSelect={handleCloseMenuSelect}
											/>
										))}
								</div>
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
							onClick={handleClickSpaces}
						>
							Espacios
							<FontAwesomeIcon
								icon={faChevronDown}
								className="size-[0.6rem]"
								onMouseEnter={() => setEspaciosSelected(true)}
								onClick={handleClickSpaces}
							/>
						</div>

						<div className={`hover:cursor-auto  ${espaciosSelected ? "opacity-100 animate-fade z-20" : "opacity-50 z-0 hidden "}`}>
							<div className="absolute w-5  border-[10px] border-[#FFFFFF] border-solid border-t-transparent border-r-transparent border-l-transparent -bottom-[78%] left-[30%]"></div>{" "}
							<div
								//onMouseOut={() => setEspaciosSelected(false)}
								className="fixed inset-0 top-[70px] flex items-center !w-[100%] !h-[55%] xl:!h-[86%] 2xl:!h-[65%] justify-center bg-[#FFFFFF] text-black border border-FF40 rounded-[1px]"
								style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", width: "80vw", height: "80vh" }}
							>
								<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center xl:px-[10rem] 2xl:px-[20rem] pt-8 pb-8  gap-5 ">
									{spaces.length > 0 &&
										spaces.map((data) => (
											<CardSpaceMenu
												key={`menu-space-${data.id}`} // Add a unique key for each CardMenu component
												image={data.coverImage}
												title={data.chortName}
												description={data.description}
												id={data.id}
												category={data.category}
											/>
										))}
								</div>
							</div>
						</div>
					</div>
					<Link to="/terms">
						<div
							className={`hover:cursor-pointer hover:text-[#E38A5D] ${location.pathname === "/terms" ? "text-[#E38A5D]" : "text-[#FFFFFF]"}`}
							onMouseEnter={() => {
								setEspaciosSelected(false);
								setServicesSelected(false);
							}}
						>
							Términos
						</div>
					</Link>
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
					{auth?.email && (
						<Link to="/bookings">
							<div
								className={`hover:cursor-pointer hover:text-[#E38A5D] ${location.pathname === "/bookings" ? "text-[#E38A5D]" : "text-[#FFFFFF]"}`}
								onMouseEnter={() => {
									setEspaciosSelected(false);
									setServicesSelected(false);
								}}
							>
								Mis reservas
							</div>
						</Link>
					)}
				</div>
				<div className=" w-[40%] text-[#FFFFFF] flex gap-3 items-center mr-5 right-0">
					<img src="/images/menu/iconamoon_search-bold.png" className="w-[1.5rem] h-[1.5rem]  hidden md:inline-block" />
					<img src="/images/menu/solar_user-broken.png" className="w-[2.5rem] h-[2.5rem] " />
					{auth && (
						<div className="flex w-[60%] ">
							<div className=" flex relative rounded-full w-[45px] h-[45px] bg-white !items-center !justify-center">
								<div className="absolute  w-[90%]  flex  h-[90%] rounded-full bg-[#E87C7C] items-center justify-center ">
									<p className="text-center text-white  text-[25px] justify-center items-center">{auth?.email.charAt(0).toUpperCase()}</p>
								</div>
							</div>

							<div />

							<div className="flex  pl-[1rem] relative justify-center items-center font-bold">
								<p className="pr-[0.5rem]">{auth?.email}</p>
								<div className="hover:cursor-pointer" onClick={() => setOut(!out)}>
									<FontAwesomeIcon icon={faChevronDown} className="size-[0.6rem]" onClick={() => setOut(!out)} />
								</div>
								<div className={`hover:cursor-auto  ${out ? "opacity-100 animate-fade z-20" : "opacity-50 z-0 hidden "}`}>
									<div className="absolute w-5  border-[10px] border-[#FFFFFF] border-solid border-t-transparent border-r-transparent border-l-transparent -bottom-[15%] left-[95%]">
										<div
											//onMouseOut={() => setEspaciosSelected(false)}
											className=" hover:cursor-pointer absolute inset-0 -left-[190px] top-[10px] flex items-center !w-[200px] !h-[50px]  justify-center bg-[#FFFFFF] text-black border border-FF40 rounded-s-[5px] rounded-br-[5px]"
											style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", width: "80vw", height: "80vh" }}
										>
											<div className="!w-[200px] flex pt-8 pb-8 pl-[2rem]" onClick={() => handleLogout()}>Cerrar sesión</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
					{!auth && (
						<Link to="/register/login">
							<div className=" hover:cursor-pointer text-[16px]  px-3 py-2 hidden md:inline-block">
								<p className=" font-bold">Iniciar</p>
							</div>
						</Link>
					)}
					{!auth && (
						<Link to="/register/register">
							<div className="hover:cursor-pointer text-FF80 text-[16px] border border-FF40 rounded px-3 py-2 hidden md:inline-block">
								<p className=" font-bold">Registrarse</p>
							</div>
						</Link>
					)}
					<div className=" hover:cursor-pointer text-[16px] border border-FF40 rounded-[8px] px-5 py-3 flex items-center justify-center text-center bg-[#E38A5D] w-[10rem]">
						<p className=" font-bold">Reserva</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
