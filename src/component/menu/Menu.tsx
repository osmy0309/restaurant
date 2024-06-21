import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import CardServiceMenu from "../cards/CardServiceMenu";
import CardSpaceMenu from "../cards/CardSpaceMenu";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { loadServiceData, selectServices } from "../../features/services/servicesSlice";
import { loadSpacesData } from "../../features/spaces/spacesSlice";
import { logout, setOpenReserve } from "../../features/auth/authSlice";
import Reservation from "../reservation/Reservation";
import UserLogin from "./UserLogin";

function Menu() {
	const [servicesSelected, setServicesSelected] = useState(false);
	const [espaciosSelected, setEspaciosSelected] = useState(false);
	const [out, setOut] = useState(false);
	const [menumovil, setMenuMovil] = useState(false);
	const location = useLocation();
	const handleClickServices = () => {
		setServicesSelected(!servicesSelected);
	};
	let menuRef = useRef();
	useEffect(() => {
		let handler = (e: any) => {
			if (menuRef.current) {
				// @ts-ignore
				if (!menuRef.current.contains(e.target)) {
					setEspaciosSelected(false);
					setServicesSelected(false);
					setOut(false);
				}
			}
		};
		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
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
	const openReserve = useSelector((state: RootState) => state.auth.openReserve);
	let spaces = useSelector((state: RootState) => state.spaces.data);
	useEffect(() => {
		dispatch(loadServiceData());
		dispatch(loadSpacesData());
	}, []);

	const handleLogout = () => {
		dispatch(logout());
	};

	useEffect(() => {
		console.log("Open :", openReserve);
	}, [openReserve]);

	const setModalOpen = (value: boolean) => {
		dispatch(setOpenReserve(value));
	};
	return (
		<>
			{
				// @ts-ignore

				<div className={`fixed top-0 left-0 right-0  bg-bgmenu md:bg-bgmenu h-[83px] flex items-center justify-between z-50`} ref={menuRef}>
					<div className="w-full md:w-auto relative">
						<div className="w-[10%]">
							<section className="text-[#FFFFFF] text-[32px] flex md:px-6  items-center ">
								<img
									src="/images/menu/iconamoon_menu-burger-horizontal-bold.png"
									className={`${
										menumovil && "rotate-90 transition-transform transform ease-in-out duration-300"
									} transition-transform transform ease-in-out duration-300 w-[2rem] h-[2rem] md:hidden mr-3 ml-2 hover:cursor-pointer`}
									onClick={() => setMenuMovil(!menumovil)}
								/>
								<Link to="/">
									<img src="/images/menu/icon.png" className="w-[12rem] h-[2rem] mr-[12rem] hover:cursor-pointer" />
								</Link>
							</section>
						</div>
						{/*Dropdawn cuando el menu este en modo Movile*/}
						<div
							className={`bg-bgmenu md:hidden absolute top-[120px] w-[200%] ${
								!menumovil ? "backdrop-blur-sm md:hidden -translate-x-[100rem]" : ""
							}  transition-transform transform ease-in-out duration-300 text-white z-10  -mt-16`}
						>
							<div className="space-y-1 px-2 pb-3 pt-2 items-center justify-center">
								{auth?.email && <UserLogin />}

								<p
									className="block rounded-md px-3 py-2 text-base items-center justify-center hover:cursor-pointer"
									onClick={handleClickServices}
									aria-current="page"
								>
									Servicios
									<FontAwesomeIcon icon={faChevronDown} className="size-[0.6rem] pl-1" />
								</p>
								{services.length > 0 && (
									<span
										className={`hover:cursor-auto  ${
											servicesSelected
												? "opacity-100 animate-fade-down z-20 "
												: "opacity-50 z-0 hidden transition-transform transform ease-in-out duration-300 animate-fade-up"
										}`}
									>
										{services.map((data: any) => (
											<Link to={`/services/${data.id}`}>
												<p
													className={`flex text-white  rounded-md px-3 py-2 text-base items-start justify-start pl-[50px] `}
													onClick={handleClickServices}
													aria-current="page"
												>
													{data.chortName}
												</p>
											</Link>
										))}
									</span>
								)}

								<p
									className="block rounded-md px-3 py-2 text-base items-center justify-center hover:cursor-pointer"
									onClick={handleClickSpaces}
									aria-current="page"
								>
									Espacios
									<FontAwesomeIcon icon={faChevronDown} className="size-[0.6rem] pl-1" />
								</p>
								{spaces.length > 0 && (
									<span
										className={`hover:cursor-auto  ${
											espaciosSelected
												? "opacity-100 animate-fade-down z-20 "
												: "opacity-50 z-0 hidden transition-transform transform ease-in-out duration-300 animate-fade-up"
										}`}
									>
										{spaces.map((data: any) => (
											<Link to={`/spaces/${data.id}`}>
												<p
													className={`flex text-white  rounded-md px-3 py-2 text-base items-center justify-start pl-[50px] `}
													onClick={handleClickSpaces}
													aria-current="page"
												>
													{data.chortName}
												</p>
											</Link>
										))}
									</span>
								)}
								<Link to="/terms">
									<p className="block rounded-md px-3 py-2 text-base" aria-current="page">
										Términos
									</p>
								</Link>
								<Link to="/dishes">
									<p className="block rounded-md px-3 py-2 text-base" aria-current="page">
										Menús
									</p>
								</Link>

								{auth ? (
									<p onClick={handleLogout} className="block rounded-full px-3 py-2 text-base font-medium bg-info text-white hover:cursor-pointer">
										Cerrar sesión
									</p>
								) : (
									<Link to="/register/login">
										<p className="block rounded-full px-3 py-2 text-base font-medium bg-info text-white hover:cursor-pointer">Iniciar sesión</p>
									</Link>
								)}
							</div>
						</div>
					</div>
					<div className="w-[80%] hidden md:text-[#FFFFFF] md:flex md:gap-5 md:mx-auto md:font-bold">
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
								className={`flex items-center gap-2 hover:text-[#E38A5D] ${
									location.pathname === "/organizationevent" ? "text-[#E38A5D]" : "text-[#FFFFFF]"
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
									className="max-h-[600px] overflow-auto fixed  inset-0 top-[70px] flex items-center !w-[100%] !h-[450px] xl:!h-[450px] 2xl:!h-[500px] justify-center bg-[#FFFFFF] text-black border border-FF40 rounded-[1px]"
									style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", width: "80vw", height: "80vh" }}
								>
									<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center px-[2rem]  gap-[1rem]">
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
									className="fixed inset-0 top-[70px] flex  !w-[100%] !h-[55%] xl:!h-[65%] 2xl:!h-[55%]  bg-[#FFFFFF] text-black border border-FF40 rounded-[1px]"
									style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", width: "80vw", height: "80vh" }}
								>
									<div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center xl:px-[5rem] 2xl:px-[20rem]  pb-8  gap-[1rem] ">
										{spaces.length > 0 &&
											spaces.map((data) => (
												<CardSpaceMenu
													key={`menu-space-${data.id}`} // Add a unique key for each CardMenu component
													image={data.coverImage}
													title={data.chortName}
													description={data.largeName}
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
						{auth?.email && (
							<Link to="/perfil">
								<div
									className={`hover:cursor-pointer hover:text-[#E38A5D] ${location.pathname === "/perfil" ? "text-[#E38A5D]" : "text-[#FFFFFF]"}`}
									onMouseEnter={() => {
										setEspaciosSelected(false);
										setServicesSelected(false);
									}}
								>
									Perfil
								</div>
							</Link>
						)}
					</div>
					<div className=" w-[40%] text-[#FFFFFF] flex gap-3 items-center mr-5 right-0">
						<img src="/images/menu/iconamoon_search-bold.png" className="w-[1.5rem] h-[1.5rem]  hidden md:inline-block" />
						<img src="/images/menu/solar_user-broken.png" className="w-[2.5rem] h-[2.5rem] " />
						<div className="hidden md:flex">{auth && <UserLogin />}</div>

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

						<div
							onClick={() => setModalOpen(true)}
							className=" hover:cursor-pointer text-[16px] border border-FF40 rounded-[8px] px-5 py-3 flex items-center justify-center text-center bg-[#E38A5D] w-[10rem]"
						>
							<p className=" font-bold">Reserva</p>
						</div>
					</div>
				</div>
			}

			{openReserve && (
				<Reservation
					style={`${openReserve ? "opacity-100 animate-fade z-20" : "opacity-0 z-0 hidden "}`}
					modalopen={openReserve}
					setModalOpen={setModalOpen}
				/>
			)}
		</>
	);
}

export default Menu;
