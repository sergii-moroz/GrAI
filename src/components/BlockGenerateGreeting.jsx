import { ButtonGenerateGreeting } from "./ButtonGenerateGreeting";

export const	BlockGenerateGreeting = ({name, greetText, language, setGreetText, setDotIndex, setResponseLoading, setVideoUrl, setResponseText}) => {
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
				setResponseLoading={setResponseLoading}
				setVideoUrl={setVideoUrl}
				setResponseText={setResponseText}
			/>
		</>
	);
}