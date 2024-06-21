import { TbArrowBigRightLines } from "react-icons/tb";

export const	UserGuide = () => {
	return (
		<div className="user-guide">
			<div className="step-1">
				<span>1</span>
				Select a character
			</div>
			<div className="step-2">
				<span>2</span>
				Click the button
			</div>
			<TbArrowBigRightLines className="arrow arrow-helper" />
		</div>
	);
}