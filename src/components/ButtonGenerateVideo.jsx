import { ButtonGenerate } from "./ButtonGenerate";

export const	ButtonGenerateVideo = ({phrase, persona, lang, setVideoUrl, setPhraseLoading, tempVideo}) => {
	
	const	handleGetVideoButtonClick = (event) => {
		event.preventDefault();
		setPhraseLoading(true);
		setVideoUrl('');

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
			setPhraseLoading(false);
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
			handleOnClick={handleGetVideoButtonClick}
		/>
	);
}