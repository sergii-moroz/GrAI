import useGenerateVideoStore from "../stores/generateVideoStore";
import { ButtonGenerate } from "./ButtonGenerate";

export const	ButtonGenerateVideo = ({phrase, persona, lang, setVideoUrl, setPhraseLoading, tempVideo}) => {

	const	loading = useGenerateVideoStore(state => state.loading);
	const	setLoading = useGenerateVideoStore(state => state.setLoading);

	const	handleGetVideoButtonClick = (event) => {
		event.preventDefault();
		setLoading(true);
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
			setLoading(false);
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

	const	emulator = (event) => {
		event.preventDefault();
		// setPhraseLoading(true); //del
		setLoading(true);
		setVideoUrl('');

		setTimeout(() => {
			setLoading(false);
			// setPhraseLoading(false);
			setVideoUrl(tempVideo);
		}, 7000);
	}

	return (
		<ButtonGenerate
			caption="Generate Video"
			loading={loading}
			handleOnClick={handleGetVideoButtonClick}
			// handleOnClick={emulator}
		/>
	);
}