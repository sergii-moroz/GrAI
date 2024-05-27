import React from "react";
import { ScrollToSection } from "./ScrollToSection";

export const	ResultScreen = () => {
	return (
		<div className="result-screen-container">
			<video src="https://videocdn.cdnpk.net/harmony/content/video/premium/video0009/large_watermarked/matterhorn_stars4k004_preview.mp4" autoPlay loop muted></video>
			<div className="scroll-container">
				<ScrollToSection idx={2} type={'UP'} />
			</div>
		</div>
	)
}
