import React, { useEffect, useState } from "react";
import { ScrollToSection } from "./ScrollToSection";
import { MyQRCode } from "./MyQRCode";
import { ButtonGenerateGreeting } from "./ButtonGenerateGreeting";
import { ButtonGenerateVideo } from "./ButtonGenerateVideo";
import { VideoResult } from "./VideoResult";
import { PannelBottom } from "./PanelBottom";
import { ChooseLanguage } from "./ChooseLanguage";
import { BlockGenerateGreeting } from "./BlockGenerateGreeting";

export const	ScreenResult = ({ heroes, heroIdx, videoUrl, setVideoUrl }) => {
	const [greetText, setGreetText] = useState("");
	const [responseText, setResponseText] = useState("");
	const [language, setLanguage] = useState({ full: 'English', code: 'en' });
	const [showResponseLoading, setResponseLoading] = useState(false);
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

    // const generateGreeting = () => {
    //     const requestData2 = {
    //         "model": "llama3",
    //         "messages": [
    //             {
    //                 "role": "system",
    //                 "content": `Reply as ${heroes[heroIdx].name} from Cartoon movie, use only ${language.full} language for reply, If you find name talk to this person, be friendly, say who you are first, use less than 50 words for answer, do not use emojies or hashtags.`
    //             },
    //             {
    //                 "role": "user",
    //                 "content": greetText
    //             }
    //         ],
    //         "stream": false,
    //         "options": {
    //         "max_tokens": 100,
    //         "temperature": 0.7,
    //         "stop": ["#", "("],
    //         "num_predict": 99,
    //         "top_p": 0.5,
    //         "top_k": 45,
    //         "presence_penalty": 1.2,}
    //     };

    //     fetch('http://localhost:11434/api/chat', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(requestData2)
    //     })
    //     .then(response => response.json())
    //     .then(responseJson => {
    //         // console.log('Success:', responseJson);
    //         const text = responseJson.message.content.trim();
    //         const words = text.split(' ');
    //         let displayText = "";
    //         words.forEach((word, index) => {
    //             setTimeout(() => {
    //                 displayText += (index > 0 ? ' ' : '') + word;
    //                 setResponseText(displayText);
    //             }, index * 15);
    //         });
    //     })
    //     .catch(error => {
    //         console.error('Error fetching or parsing data:', error);
    //         setResponseText("Error fetching or parsing data from server. Please try again.");
    //     });
    // };

	useEffect(() => {
		const dotInterval = setInterval(() => {
			if (showResponseLoading) {
				setDotIndex((dotIndex + 1) % 5);
				setResponseText("Loading " + ".".repeat(dotIndex));
				setRandomPhrase("is " + getRandomPhrase(phrases));
			} else {
				setRandomPhrase("");
			}
		}, 1500);
		return () => clearInterval(dotInterval);
	}, [showResponseLoading, dotIndex]);

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
						setResponseLoading={setResponseLoading}
						tempVideo={heroes[heroIdx].video}
					/>

					<MyQRCode
						value="https://we.tl/t-BzcXCcNkC1"
						videoUrl={videoUrl}
					/>
				</div>

				<ScrollToSection idx={1} type={'UP'} />

			</div>
		</div>
	);
};
