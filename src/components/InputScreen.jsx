import React from "react";
import { ScrollToSection } from "./ScrollToSection";

export const	InputScreen = ({ data, heroIdx }) => {

	return (
		<div className="screen-2-container">
			<div className="img-hero">
				<video src={data[heroIdx].src} autoPlay loop muted></video>
				<div className="hero-details">
					<div className="titel-container">
						<h1 className="hero-name">{data[heroIdx].alt}</h1>
					</div>
					<div className="hero-description">{data[heroIdx].description}</div>
				</div>
			</div>
			<div className="form">
				<form>
					<textarea placeholder="prompt"></textarea>
					<button>Generate Greeting</button>
					<textarea />
					<button>Get Video</button>
				</form>
				<div className="scroll-container">
					<ScrollToSection idx={1} type={'UP'} />
					<ScrollToSection idx={3} type={'DOWN'} />
				</div>
			</div>
		</div>
	)
}
