import React, { useState, useRef } from 'react'
import Section					from './components/Section'
import { Carousel }			from './components/Carousel'
import { InputScreen }	from './components/InputScreen'
import { slides }				from './assets/data/carouselData.json'
import { ResultScreen }	from './components/ResultScreen'


const	App = () => {
	const	[heroIdx, setHeroIdx] = useState(0);

	return (
		<>
			<Section sec_id={"section-1"}>
				<Carousel data={slides} heroIdx={heroIdx} setHeroIdx={setHeroIdx} />
			</Section>
			<Section sec_id={"section-2"}>
				<InputScreen data={slides} heroIdx={heroIdx} />
			</Section>
			<Section sec_id={"section-3"} >
				<ResultScreen />
			</Section>
		</>
	)
}

export default App
