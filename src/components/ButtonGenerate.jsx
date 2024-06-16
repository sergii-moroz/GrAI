export const	ButtonGenerate = ({caption, handleOnClick}) => {
	return (
		<button
			className="button-generate"
			type="button"
			onClick={handleOnClick}
		>
			{caption}
		</button>
	);
}
