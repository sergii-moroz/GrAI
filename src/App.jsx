import React, { useState }	from 'react'
import Section				from './components/Section'
import { ScreenIntro }		from './components/ScreenIntro'
import { ScreenResult }		from './components/ScreenResult'
import Heroes 				from './components/Heroes'


const	App = () => {
	const	[heroIdx, setHeroIdx] = useState(0);
	const	[videoUrl, setVideoUrl] = useState("");

	return (
		<>
			<Section sec_id={"section-1"}>
				<ScreenIntro
					heroes={Heroes}
					heroIdx={heroIdx}
					setHeroIdx={setHeroIdx}
					setVideoUrl={setVideoUrl}
				/>
			</Section>

			<Section sec_id={"section-2"}>
				<ScreenResult
					heroes={Heroes}
					heroIdx={heroIdx}
					videoUrl={videoUrl}
					setVideoUrl={setVideoUrl}
				/>
			</Section>
		</>
	)
}

export default App
