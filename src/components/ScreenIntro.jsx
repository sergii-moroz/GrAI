import React, { useState } from "react";
import { VideoIntro } from "./VideoIntro";
import { NavOverlay } from "./NavOverlay";
import { Cards } from "./Cards";

export const	ScreenIntro = ({ heroes, heroIdx, setHeroIdx, setVideoUrl }) => {

	const	[muted, setMuted] = useState(false);

	return (
		<div className="screen-intro">
			<VideoIntro
				poster={heroes[heroIdx].image}
				src={heroes[heroIdx].video}
				muted={muted}
				setMuted={setMuted}
			/>

			<h1 className="greeter-ai">Greeter AI</h1>
			<h2 className="hero-name">{heroes[heroIdx].name}</h2>

			<Cards
				heroes={heroes}
				heroIdx={heroIdx}
				setHeroIdx={setHeroIdx}
				setVideoUrl={setVideoUrl}
				setMuted={setMuted}
			/>

			<NavOverlay
				heroes={heroes}
				heroIdx={heroIdx}
				setHeroIdx={setHeroIdx}
				setVideoUrl={setVideoUrl}
				setMuted={setMuted}
			/>

		</div>
	)
}
