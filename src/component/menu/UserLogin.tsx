import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { logout } from "../../features/auth/authSlice";

function Menu() {
	const [out, setOut] = useState(false);

	const dispatch = useDispatch<AppDispatch>();
	let auth = useSelector((state: RootState) => state.auth.data);

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<>
			<div className="flex w-[60%] ">
				<div className=" flex relative rounded-full w-[45px] h-[45px] bg-white !items-center !justify-center p-6">
					<div className="absolute  w-[44px]  flex  h-[44px] rounded-full bg-[#E87C7C] items-center justify-center ">
						<p className="text-center text-white  text-[25px] justify-center items-center">{auth?.email.charAt(0).toUpperCase()}</p>
					</div>
				</div>

				<div />

				<div className="flex  pl-[5px] relative justify-center items-center font-bold md:max-w-[10rem] md:w-[10rem]">
					<p className="pr-[0.5rem] md:max-w-[10rem] md:w-[10rem] md:overflow-hidden">{auth?.email.split("@")[0]}</p>
					<div className="hidden md:flex hover:cursor-pointer" onClick={() => setOut(!out)}>
						<FontAwesomeIcon icon={faChevronDown} className="size-[0.6rem]" onClick={() => setOut(!out)} />
					</div>
					<div className={`hover:cursor-auto  ${out ? "opacity-100 animate-fade z-20" : "opacity-50 z-0 hidden "}`}>
						<div className="absolute w-5  border-[10px] border-[#FFFFFF] border-solid border-t-transparent border-r-transparent border-l-transparent -bottom-[15%] left-[95%]">
							<div
								//onMouseOut={() => setEspaciosSelected(false)}
								className=" hover:cursor-pointer absolute inset-0 -left-[190px] top-[10px] flex items-center !w-[200px] !h-[50px]  justify-center bg-[#FFFFFF] text-black border border-FF40 rounded-s-[5px] rounded-br-[5px]"
								style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", width: "80vw", height: "80vh" }}
							>
								<div className="!w-[200px] flex pt-8 pb-8 pl-[2rem]" onClick={() => handleLogout()}>
									Cerrar sesión
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
