export const	Cards = ({heroes, heroIdx, setHeroIdx, setVideoUrl, setMuted, setResonseText}) => {
	return (
		<div className="cards">
			{heroes.map((item, idx) => {
				return (
					<button key={idx} className={`thumb thumb-${Math.abs(heroIdx - idx)}`} onClick={() => {
							setHeroIdx(idx);
							setVideoUrl("");
							setMuted(false);
							setResonseText("");
						}} >
						<img src={item.image} alt={item.name} />
					</button>
				)
			})}
		</div>
	);
}
