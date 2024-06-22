import { ButtonGenerateGreeting } from "./ButtonGenerateGreeting";

export const	BlockGenerateGreeting = ({name, greetText, language, setGreetText, setDotIndex, setVideoUrl, setResponseText}) => {
	return (
		<>
			<h2 className="textarea-title">Ask {name}:</h2>

			<textarea
				className="textarea-prompt"
				placeholder="greet my son (his name is Steven) with 7th birthday"
				value={greetText}
				onChange={(e) => setGreetText(e.target.value)}
			/>

			<ButtonGenerateGreeting
				name={name}
				greetText={greetText}
				language={language}
				setDotIndex={setDotIndex}
				setVideoUrl={setVideoUrl}
				setResponseText={setResponseText}
			/>
		</>
	);
}