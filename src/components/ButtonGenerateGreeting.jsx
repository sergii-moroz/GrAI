import { ButtonGenerate } from "./ButtonGenerate";

export const	ButtonGenerateGreeting = ({ setDotIndex, setResponseLoading, setVideoUrl, setResponseText }) => {

	const	generateGreeting = () => {
		const	requestData2 = {
			"model": "llama3",
			"messages": [
				{
					"role": "system",
					"content": `Reply as ${heroes[heroIdx].name} from Cartoon movie, use only ${language.full} language for reply, If you find name talk to this person, be friendly, say who you are first, use less than 50 words for answer, do not use emojies or hashtags.`
				},
				{
					"role": "user",
					"content": greetText
				}
			],
			"stream": false,
			"options": {
			"max_tokens": 100,
			"temperature": 0.7,
			"stop": ["#", "("],
			"num_predict": 99,
			"top_p": 0.5,
			"top_k": 45,
			"presence_penalty": 1.2,}
		};

		fetch('http://localhost:11434/api/chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', },
			body: JSON.stringify(requestData2)
		})
		.then(response => response.json())
		.then(responseJson => {
			const	text = responseJson.message.content.trim();
			const	words = text.split(' ');
			let displayText = "";
			words.forEach((word, index) => {
				setTimeout(() => {
					displayText += (index > 0 ? ' ' : '') + word;
					setResponseText(displayText);
				}, index * 15);
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
		setResponseLoading(true);
		setVideoUrl("");
		// generateGreeting();

		// emulate waiting from backend
		// DELETE/COMMENT from HERE
		setTimeout(() => {
			setResponseLoading(false);
			setResponseText("Super Duper Greeting from super hero!");
		}, 7000);
		// Til HERE */
	};

	return (
		<ButtonGenerate
			caption="Generate Greeting"
			handleOnClick={handleGenerateButtonClick}
		/>
	);
}