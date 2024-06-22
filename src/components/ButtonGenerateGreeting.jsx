import useGreetingStore from "../stores/greetingStore";
import { ButtonGenerate } from "./ButtonGenerate";

export const	ButtonGenerateGreeting = ({ name, greetText, language, setDotIndex, setVideoUrl, setResponseText }) => {

	const loading = useGreetingStore(state => state.loading);
	const setLoading = useGreetingStore(state => state.setLoading);

	const	generateGreeting = (name, language) => {
		const	requestData2 = {
			"model": "llama3",
			"messages": [
				{
					"role": "system",
					"content": `Reply as ${name} from cartoon movie, use only ${language} language for reply, If you find name talk to this person, be friendly, say Hello and who you are first, use less than 50 words for answer, do not use emojies or hashtags.`
				},
				{
					"role": "user",
					"content": greetText
				}
			],
			"stream": false,
			"options": {
			// "max_tokens": 100,
			"temperature": 0.7,
			"stop": ["#", "(", "*"],
			"num_predict": 99,
			"top_p": 0.5,
			"top_k": 45,
			"presence_penalty": 1.1,}
		};

		// fetch('http://localhost:11434/api/chat', {
		fetch('https://choice-goose-loved.ngrok-free.app/infer_text', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', },
			body: JSON.stringify(requestData2)
		})
		.then(response => response.json())
		.then(responseJson => {
			setLoading(false);
			// const	text = responseJson.message.content.trim();
			const	text = responseJson.text.trim();
			const	words = text.split(' ');
			let displayText = "";
			words.forEach((word, index) => {
				setTimeout(() => {
					displayText += (index > 0 ? ' ' : '') + word;
					setResponseText(displayText);
				}, index * 25);
			});
		})
		.catch(error => {
			 console.error('Error fetching or parsing data:', error);
			setResponseText("Error fetching or parsing data from server. Please try again.");
		});
	};

	const handleGenerateButtonClick = (event) => {
		event.preventDefault();
		setDotIndex(0);
		setLoading(true);
		setVideoUrl("");
		generateGreeting(name, language);

		// emulate waiting from backend
		// DELETE/COMMENT from HERE
		/*setTimeout(() => {
			setResponseText("Super Duper Greeting from super hero!");
			setLoading(false);
		}, 7000);*/
		// Til HERE */
	};

	return (
		<ButtonGenerate
			caption="Generate Greeting"
			loading={loading}
			handleOnClick={handleGenerateButtonClick}
		/>
	);
}