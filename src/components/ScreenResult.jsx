import React, { useEffect, useState } from "react";
import { ScrollToSection } from "./ScrollToSection";
import { MyQRCode } from "./MyQRCode";
import { ButtonGenerateVideo } from "./ButtonGenerateVideo";
import { VideoResult2 } from "./VideoResult2";
import { PannelBottom } from "./PanelBottom";
import { ChooseLanguage } from "./ChooseLanguage";
import { BlockGenerateGreeting } from "./BlockGenerateGreeting";

import useGreetingStore from "../stores/greetingStore";
import useGenerateVideoStore from "../stores/generateVideoStore";

export const	ScreenResult = ({ heroes, heroIdx, videoUrl, setVideoUrl, responseText, setResponseText }) => {
	const [greetText, setGreetText] = useState("greet my son (his name is Steven) with 7th birthday");
	const [language, setLanguage] = useState({ full: 'English', code: 'en' });
	const [dotIndex, setDotIndex] = useState(0);
	const [randomPhrase, setRandomPhrase] = useState("");
	const phrases = [
		"adjusting the lighting",
		"positioning the camera",
		"tidying the background",
		"choosing the outfit",
		"practicing posture and body language",
		"calming the nerves",
		"setting up the microphone",
		"applying the makeup",
		"doing the hair"
	];

	const getRandomPhrase = (phrases) => {
		const randomIndex = Math.floor(Math.random() * phrases.length);
		return phrases[randomIndex];
	}

	const	loading = useGreetingStore(state => state.loading);
	useEffect(() => {
		const dotInterval = setInterval(() => {
			if (loading) {
				setDotIndex((dotIndex + 1) % 4);
				setResponseText("Loading" + ".".repeat(dotIndex));
			}
		}, 333);
		return () => clearInterval(dotInterval);
	}, [loading, dotIndex]);

	const	phraseLoading = useGenerateVideoStore(state => state.loading);
	useEffect(() => {
		const	phraseInterval = setInterval(() => {
			if (phraseLoading) {
				setRandomPhrase("is " + getRandomPhrase(phrases));
			} else {
				setRandomPhrase("");
			}
		}, 2500);
		return () => clearInterval(phraseInterval);
	}, [phraseLoading]);

	return (
		<div className="screen-result">
			<div className="img-hero">

				<VideoResult2
					poster={heroes[heroIdx].image}
					videoUrl={videoUrl}
				/>

				<PannelBottom
					name={heroes[heroIdx].name}
					randomPhrase={randomPhrase}
				/>
			</div>

			<div className="side-panel">
				<div className="communication-with-user">

					<ChooseLanguage
						name={heroes[heroIdx].name}
						setLanguage={setLanguage}
					/>

					<BlockGenerateGreeting
						name={heroes[heroIdx].name}
						greetText={greetText}
						language={language.full}
						setGreetText={setGreetText}
						setDotIndex={setDotIndex}
						setVideoUrl={setVideoUrl}
						setResponseText={setResponseText}
					/>

					<h2 className="textarea-title">{heroes[heroIdx].name} will say:</h2>
					<textarea
						id="responseText"
						className="textarea-prompt"
						value={responseText}
						onChange={(event) => setResponseText(event.target.value)}
					/>

					<ButtonGenerateVideo
						phrase={responseText}
						persona={heroes[heroIdx].name}
						lang={language.code}
						setVideoUrl={setVideoUrl}
						tempVideo={heroes[heroIdx].video} // del
					/>

					<MyQRCode
						persona={heroes[heroIdx].name}
						videoUrl={videoUrl}
					/>
				</div>

				<ScrollToSection idx={1} type={'UP'} />

			</div>
		</div>
	);
};
