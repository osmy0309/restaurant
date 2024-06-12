import { Link } from "react-router-dom";
import { DishDTO } from "../../shared/dtos/dishesDTO";

interface CardDishDetailProps {
	dish: DishDTO;
}

function CardDishDetail({ dish }: CardDishDetailProps) {
	return (
		<>
			<div className={`w-full flex  bg-transparent border-0 gap-2`}>
				<div className=" w-[50%] h-[400px] bg-transparent hover:cursor-pointer">
					<img className="rounded-[8px] w-full h-[400px]" src={dish.image} alt={dish.name} />
				</div>
				<div className=" w-[50%] flex flex-col p-[36px] bg-white gap-3 rounded-[8px]">
					<div className="auto text-[40px] font-bold font-Roboto ">{dish.name}</div>
					<div className="text-[36px] text-[#D16733] font-bold font-Roboto">{dish.price} USD</div>
					<div className="h-[50%] max-h-[50%] overflow-none text-[16px] font-Roboto" dangerouslySetInnerHTML={{ __html: dish.description }} />
					<div className="text-[16px] text-[#88604B] font-Roboto">Lo encuentras en :</div>
					<div className="text-[16px] bg-[#FFEBE1] w-[100px] text-center rounded">{dish.chortNameSpace}</div>
					<Link to="/reserve/table/selection">
						
						<div className="text-[15px] rounded-[10px] border-[1px] border-[#BFA598] text-[#D16733] p-3 w-[65%] font-bold flex items-center justify-center gap-2 hover:bg-[#ffebe1] transition-colors duration-300 cursor-pointer">
							<img className="h-[25px]" src="/images/card/cart.png" alt="Add to cart" /> Añadir al carrito
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}

export default CardDishDetail;
