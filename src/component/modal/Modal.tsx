import React from "react";

import { createPortal } from "react-dom";

interface ModalProps {
	onCloseModal: () => void;
	children?: React.ReactNode;
	hideCloseButton?: boolean;
	type?: string;
	style?: string;
}

export default function Modal(props: ModalProps) {
	return createPortal(
		<>
			<div className=" will-change-transform modal-overlay w-screen h-screen bg-black/20 fixed top-0 left-0"></div>

			<div
				className={`${props.style} will-change-transform bg-white max-h-[80%]  shadow-lg w-[50%] h-auto overflow-y-auto overflow-x-hidden modal-component fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  min-w-[10%]  py-4 px-4 md:px-10 rounded-[20px] `}
			>
				<header className="h-[50%] max-h-[60%] w-full flex flex-col pb-4 relative top-0">
					<button onClick={props.onCloseModal} className="z-20 absolute top-[-10px] md:-right-6 right-4 rounded-full hover:brightness-95 bg-white">
						X
					</button>
				</header>

				{props.children}

				<div className="will-change-transform flex items-center justify-end "></div>
			</div>
		</>,
		document.getElementById("modal-root") || document.body
	);
}
