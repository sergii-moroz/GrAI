import React, { useState } from "react";
import { TbSquareRoundedChevronLeftFilled, TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { ScrollToSection } from './ScrollToSection'

export const	Carousel = ({ data, heroIdx, setHeroIdx }) => {
	//const	[slide, setSlide] = useState(0);
	const	nextSlide = () => {
		setHeroIdx(heroIdx === data.length - 1 ? 0 : heroIdx + 1);
	};
	const	previousSlide = () => {
		setHeroIdx(heroIdx === 0 ? data.length - 1 : heroIdx - 1);
	};

	return (
		<div className="carousel">
			<div className="arrow-container-left">
				<TbSquareRoundedChevronLeftFilled className="arrow arrow-left" onClick={previousSlide} />
			</div>
			{data.map((item, idx) => {
				return <video autoPlay loop muted src={item.src} alt={item.alt} key={idx} className={heroIdx === idx ? "slide" : "slide slide-hidden"} />
			})}
			<div className="arrow-container-right">
				<TbSquareRoundedChevronRightFilled className="arrow arrow-right" onClick={nextSlide} />
			</div>
			<div className="hero-details">
				<div className="titel-container">
					<span>{heroIdx + 1} / {data.length} </span>
					<h1 className="hero-name">{data[heroIdx].alt}</h1>
				</div>
				<div className="hero-description">{data[heroIdx].description}</div>
			</div>
			<span className="indicators">
				{/*data.map((_, idx) => {
					return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive" }></button>
				})*/}
				{/*.filter((_, idx) => {
					//console.log("length: ", data.length);
					//console.log(`idx: ${idx}, ${slide - idx}`)
					if (Math.abs(slide - idx) < 3 || Math.abs(slide - idx - data.length + 1) < 3)
						return (true);
					else
						return (false);
					}) */}
				{data.map((item, idx) => {
						//console.log(`idx: ${idx}, ${idx - slide}, ${idx + data.length - slide}, ${idx - data.length - slide}`);
						return (
							<button key={idx} onClick={() => setHeroIdx(idx)} className={`thumb thumb-${Math.abs(heroIdx - idx)}`}>
								<img src={item.img} alt={item.alt} />
							</button>
						)
				})}
			</span>
			<div className="arrow-container-bottom">
				<ScrollToSection idx={2} />
			</div>
		</div>
	)
}
