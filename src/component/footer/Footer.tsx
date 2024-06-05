import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function Footer() {
	let setting = useSelector((state: RootState) => state.setting.data);
	return (
		<div className={`bg-bgmenu h-[400px] flex items-center flex-row justify-between px-8 py-10`}>
			<div className="basis-1/5"/>
			<div className="basis-2/5">
			<article className="text-wrap h-[200px]">
  <h3 className="text-[18px] font-bold h-[2rem] text-[#E38A5D]">{setting?.footer?.aboutUs?.name}</h3>
  <p className="text-[14px] text-[#fff]">{setting?.footer?.aboutUs?.description.substring(0, 500)}</p>
</article>
			</div>
  			<div className="basis-3/10 columns-2">
			  <article className="text-wrap h-[200px]">
  <h3 className="text-[18px] font-bold h-[2rem] text-[#E38A5D]">Reserva</h3>
  {setting?.footer?.booking?.map(b=>(
	<div className="hover:cursor-pointer hover:text-[20px]">
		<a className="text-[14px] text-[#fff]" href={b.url}>{b.name}</a>
	</div>	
  ))}
</article>

<article className="text-wrap h-[200px]">
  <h3 className="text-[18px] font-bold h-[2rem] text-[#E38A5D]">Contáctanos</h3>
  <p className="text-[14px] text-[#fff]">qweqwe</p>
  <p className="text-[14px] text-[#fff]">qweqwe</p>
  <p className="text-[14px] text-[#fff]">qweqwe</p>
</article>
			 

			  
			</div>
			  <div className="basis-2/10">
			  <article className="text-wrap h-[200px]">
  <h3 className="text-[18px] font-bold h-[2rem] text-[#E38A5D]"> Sigue a:</h3>
  <div className="columns-3">
  {
	setting?.footer?.followUs?.map(f=>(
		<div>
			<p className="text-[14px] text-[#fff]">{`${f.name}`}</p>
			<div className="columns-3">
			{
				f.networks.map(n=>(
					<img className="h-[30px] hover:cursor-pointer" alt="X" src={`/images/card/${n.name.toLocaleLowerCase()}.png`} />
					
				))
			}
			</div>
		</div>
	))
  }
  </div>
 
</article>
			 
			  </div>
			  <div className="basis-1/10"/>
  
		</div>
	);
}

export default Footer;
