import React from "react";
import { TbSquareRoundedChevronsDownFilled, TbSquareRoundedChevronsUpFilled } from "react-icons/tb";

export const	ScrollToSection = ({idx, type, setMuted}) => {
	if (type === 'UP')
		return (
	<TbSquareRoundedChevronsUpFilled className="arrow arrow-up" onClick={() => {
		const	element = document.getElementById(`section-${idx}`);
		element.scrollIntoView({behavior: 'smooth'});
	}}/>
	)
	else
		return (
			<TbSquareRoundedChevronsDownFilled className="arrow arrow-bottom" onClick={() => {
				setMuted(true);
				const	element = document.getElementById(`section-${idx}`);
				element.scrollIntoView({behavior: 'smooth'});
			}}/>
		)
}
