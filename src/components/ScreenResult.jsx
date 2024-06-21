import React, { useEffect, useState } from "react";
import { ScrollToSection } from "./ScrollToSection";
import { MyQRCode } from "./MyQRCode";
import { ButtonGenerateGreeting } from "./ButtonGenerateGreeting";
import { ButtonGenerateVideo } from "./ButtonGenerateVideo";
import { VideoResult } from "./VideoResult";
import { PannelBottom } from "./PanelBottom";
import { ChooseLanguage } from "./ChooseLanguage";
import { BlockGenerateGreeting } from "./BlockGenerateGreeting";

export const	ScreenResult = ({ heroes, heroIdx, videoUrl, setVideoUrl, responseText, setResponseText }) => {
	const [greetText, setGreetText] = useState("");
	const [language, setLanguage] = useState({ full: 'English', code: 'en' });
	const [showResponseLoading, setResponseLoading] = useState(false);
	const [showPhraseLoading, setPhraseLoading] = useState(false);
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

/*
    const videoPlayerDiv = document.getElementById("videoPlayerDiv");
	function createVideoPlayer(videoUrl) {
        let video = document.createElement("video");
        video.src = videoUrl;
        video.controls = true;
        video.autoplay = true;
        video.id = "heroVideo";
        videoPlayerDiv.innerHTML = ""; // Clear the video player div
        videoPlayerDiv.appendChild(video);
    }
*/

	useEffect(() => {
		const dotInterval = setInterval(() => {
			if (showResponseLoading) {
				setDotIndex((dotIndex + 1) % 4);
				setResponseText("Loading" + ".".repeat(dotIndex));
			}
		}, 333);
		return () => clearInterval(dotInterval);
	}, [showResponseLoading, dotIndex]);

	useEffect(() => {
		const	phraseInterval = setInterval(() => {
			if (showPhraseLoading) {
				setRandomPhrase("is " + getRandomPhrase(phrases));
			} else {
				setRandomPhrase("");
			}
		}, 2500);
		return () => clearInterval(phraseInterval);
	}, [showPhraseLoading]);

    // const handleGenerateButtonClick = (e) => {
    //     e.preventDefault();
	// 	setDotIndex(0);
	// 	setResponseLoading(true);
	// 	setVideoUrl("");
    //     // generateGreeting();
	// 	setTimeout(() => {
	// 		setResponseLoading(false);
	// 		setResponseText("OK");
	// 		setVideoUrl(heroes[heroIdx].video);
	// 	}, 7000);

    // };

    // const handleGetVideoButtonClick = (e) => {
    //     e.preventDefault();
    //     const phrase = responseText;
    //     const persona = heroes[heroIdx].name;
    //     const lang = language.code;

    //     fetch('https://choice-goose-loved.ngrok-free.app/infer_image', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': "*/*"
    //         },
    //         body: JSON.stringify({
    //             "text": phrase,
    //             "persona": persona,
    //             "language": lang,
    //             "face_restorer": "None",
    //         })
    //     })
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         return response.blob();
    //     })
    //     .then(blob => {
    //         // const heroImg = document.getElementById("heroImage");
    //         // if (heroImg) {
    //         //     heroImg.remove();
    //         // }
    //         // const videoUrl = URL.createObjectURL(blob);
    //         // createVideoPlayer(videoUrl);
    //         setVideoUrl(URL.createObjectURL(blob));
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // };

	return (
		<div className="screen-result">
			<div className="img-hero">

				<VideoResult
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
						setResponseLoading={setResponseLoading}
						setVideoUrl={setVideoUrl}
						setResponseText={setResponseText}
					/>

					{/* <h2 className="textarea-title">Ask {heroes[heroIdx].name}:</h2>
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
					/> */}

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
						setPhraseLoading={setPhraseLoading}
						tempVideo={heroes[heroIdx].video}
					/>

					<MyQRCode
						persona={heroes[heroIdx].name}
						// setVideoUrl={setVideoUrl}
						value="https://we.tl/t-BzcXCcNkC1"
						videoUrl={videoUrl}
					/>
				</div>

				<ScrollToSection idx={1} type={'UP'} />

			</div>
		</div>
	);
};
