import { commetsDTO } from "../../shared/dtos/spacesDTO";

interface CommentsProps {
	data: commetsDTO;
}
function Comments(props: CommentsProps) {
	const ratingNumber = props.data.rating;
	const stars = [];
	for (let i = 0; i < ratingNumber; i++) {
		stars.push(<img key={i} src="ruta-de-la-imagen" alt="rating-star" />);
	}
	const date = new Date(props.data.createAt);

	// Opciones de formato para el método Intl.DateTimeFormat
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const dateFormatter = new Intl.DateTimeFormat("es-ES", options);

	// Formatear la fecha
	const formattedDate = dateFormatter.format(date);
	return (
		<div className="w-full  !h-[80px] max-h-[80px] bg-transparent  flex">
			<img className=" w-[60px] rounded-full mr-2  !h-[60px] " src={props.data.image} alt={"imagecomments"} />
			<div className="w-[80%] flex flex-col">
				<p className="text-[14px] text-[#F9FAFB] font-bold">{props.data.name}</p>
				<p className="text-[10px] text-[#919EAB]">{formattedDate.toString()}</p>
				<div className="flex h-3 w-3">
					{Array.from({ length: ratingNumber }, (_, index) => (
						<img key={index} src="/images/banner/raitinicon.png" alt="rating-star" />
					))}
				</div>
				<p className="text-[15px] text-[#FFFFFF]">{props.data.comment}</p>
			</div>
		</div>
	);
}

export default Comments;
