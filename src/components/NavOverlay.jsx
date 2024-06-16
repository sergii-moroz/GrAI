import { TbSquareRoundedChevronLeftFilled, TbSquareRoundedChevronRightFilled } from "react-icons/tb";
import { ScrollToSection } from './ScrollToSection';

export const	NavOverlay = ({heroes, heroIdx, setHeroIdx, setVideoUrl, setMuted}) => {

	const	nextSlide = () => {
		setHeroIdx(heroIdx === heroes.length - 1 ? 0 : heroIdx + 1);
		setVideoUrl("");
		setMuted(false);
	};

	const	previousSlide = () => {
		setHeroIdx(heroIdx === 0 ? heroes.length - 1 : heroIdx - 1);
		setVideoUrl("");
		setMuted(false);
	};

	return (
		<>
			<TbSquareRoundedChevronLeftFilled
					className="arrow arrow-left"
					onClick={previousSlide}
				/>

			<TbSquareRoundedChevronRightFilled
				className="arrow arrow-right"
				onClick={nextSlide}
			/>

			<ScrollToSection idx={2} type={'DOWN'} />
		</>
	);
}
