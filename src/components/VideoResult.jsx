export const	VideoResult = ({poster, videoUrl}) => {
	return (
		<video
			type="video/mp4"
			autoPlay
			poster={poster}
			src={videoUrl}
			onClick={(event) => { event.target.paused ? event.target.play() : event.target.pause() }}
			onEnded={() => {console.log("video end")}}
		/>
	);
}
