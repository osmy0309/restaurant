import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";

function Footer() {
	let setting = useSelector((state: RootState) => state.setting.data);
	return (
		<>
			<div className={`bg-bgmenu h-auto absolute  px-[5rem]  py-10 grid grid-cols-2 md:grid-cols-4 gap-5 w-100`}>
				<div className=" ">
					<h3 className="text-[18px] font-bold h-[2rem] text-[#E38A5D]">{setting?.footer?.aboutUs?.name}</h3>
					<div className=" text-[16px] font-Roboto text-[#fff] " dangerouslySetInnerHTML={{ __html: setting?.footer?.aboutUs?.description || "" }} />
				</div>
				<div className=" flex flex-col pl-[2rem]">
					<article className="text-wrap h-auto">
						<h3 className="text-[18px] font-bold h-[2rem] text-[#E38A5D]">Reserva</h3>
						{setting?.footer?.booking?.map((b, i) => (
							<div key={`footer-${i}`} className="hover:cursor-pointer hover:text-[20px] hover:text-[#fff]">
								<a className="text-[14px] text-[#888888] hover:text-[#fff]" href={b.url}>
									{b.name}
								</a>
							</div>
						))}
					</article>
				</div>
				<div>
					<h3 className="text-[18px] font-bold h-[2rem] text-[#E38A5D]">Contáctanos</h3>
					<article className="text-wrap flex flex-col gap-3 h-[200px]">
						<div className="flex gap-2">
							<img className="h-[20px] hover:cursor-pointer" alt="X" src={`/images/card/app.png`} />
							<p className="text-[14px] text-[#fff]">{setting?.footer?.contactData?.cellphone}</p>
						</div>
						<div className="flex gap-2">
							<img className="h-[16px] hover:cursor-pointer" alt="X" src={`/images/card/card.png`} />
							<p className="text-[14px] text-[#fff]">{setting?.footer?.contactData?.email}</p>
						</div>
						<div className="flex gap-2">
							<img className="h-[18px] hover:cursor-pointer" alt="X" src={`/images/card/call.png`} />
							<p className="text-[14px] text-[#fff]">{setting?.footer?.contactData?.phone}</p>
						</div>
					</article>
				</div>

				<div className="h-[5rem]">
					<h3 className="text-[18px] font-bold h-[2rem]  text-[#E38A5D]"> Sigue a:</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-7 justify-end items-end">
						{setting?.footer?.followUs?.map((f, i) => (
							<div key={`footer-follow-${i}`}>
								<p className="text-[14px] text-[#fff] font-bold pb-[0.3rem]">{`${f.name}`}</p>
								<div className="grid grid-cols-3 justify-start">
									{f.networks.map((n, j) => (
										<Link to={n.value || "/"}  target="_blank" rel="noopener noreferrer" >
										<img
											key={`follow-image-${i}-${j}`}
											className="h-[20px] hover:cursor-pointer  mb-2"
											alt="X"
											src={`/images/card/${n.name == "Facebook" ? "facebookgrim" : n.name == "Instagram" ? "instagramgrim" : "whatsappgrim"}.png`}
										/>
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="col-start-2 col-span-2">
					<img className="ml-[42%] h-[10rem] hover:cursor-pointer" alt="X" src={`/images/card/footerdown.png`} />
				</div>
			</div>
		</>
	);
}

export default Footer;
