import React, { useState } from 'react'
import './styles/index.scss'
import useWeatherFetch from './hooks/useWeatherFetch'
import Header from './components/Header/Header'
import { cityType } from './types/types'
import 'primeicons/primeicons.css'

const App = () => {
	const [city, setCity] = useState<cityType>({ lat: '', lon: '', name: '' })
	const { weatherInfo, loading, error } = useWeatherFetch({ city })

	return (
		<div className='app'>
			<div className='main-section'>
				<Header city={city} setCity={setCity}></Header>
			</div>
		</div>
	)
}

export default App
