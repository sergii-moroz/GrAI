import { ButtonGenerateGreeting } from "./ButtonGenerateGreeting";

export const	BlockGenerateGreeting = ({name, greetText, setGreetText, setDotIndex, setResponseLoading, setVideoUrl, setResponseText}) => {
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
				setDotIndex={setDotIndex}
				setResponseLoading={setResponseLoading}
				setVideoUrl={setVideoUrl}
				setResponseText={setResponseText}
			/>
		</>
	);
}