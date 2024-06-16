import { ButtonGenerate } from "./ButtonGenerate";

export const	ButtonGenerateVideo = ({phrase, persona, lang, setVideoUrl, setResponseLoading, tempVideo}) => {

	const	handleGetVideoButtonClick = (event) => {
		event.preventDefault();

		fetch('https://choice-goose-loved.ngrok-free.app/infer_image', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': "*/*"
			},
			body: JSON.stringify({
				"text": phrase,
				"persona": persona,
				"language": lang,
				"face_restorer": "None",
			})
		})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.blob();
		})
		.then(blob => {
			setVideoUrl(URL.createObjectURL(blob));
		})
		.catch(error => {
			console.error('Error:', error);
		});
	};

	return (
		<ButtonGenerate
			caption="Generate Video"
			// handleOnClick={handleGetVideoButtonClick}

			// emulate waiting from backend
			// DELETE/COMMENT from HERE
			handleOnClick={() => {
				setResponseLoading(true);
				setTimeout(() => {
					setResponseLoading(false);
					setVideoUrl(tempVideo);
				}, 7000);
			}}
			// Til HERE */

		/>
	);
}