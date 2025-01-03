import React, { useState } from 'react'
import './styles/index.scss'
import useWeatherFetch from './hooks/useWeatherFetch'
import Header from './components/Header/Header'
import { cityType } from './types/types'
import 'primeicons/primeicons.css'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'

const App = () => {
	const [city, setCity] = useState<cityType>({ lat: '', lon: '', name: '' })
	const [requestType, setRequestType] = useState('weather')
	const { weatherInfo, loading, error } = useWeatherFetch({ city, requestType })
	console.log(new Date(1735916400))
	return (
		<div className='app'>
			<div className='main-section'>
				<Header city={city} setCity={setCity} />
				{!loading && weatherInfo && (
					<CurrentWeather weatherInfo={weatherInfo}></CurrentWeather>
				)}
			</div>
			<div className='extra-section'>
				{weatherInfo && (
					<>
						<button onClick={() => setRequestType('weather')}>Today</button>
						<button onClick={() => setRequestType('forecast')}>5 days</button>
					</>
				)}
			</div>
		</div>
	)
}

export default App
