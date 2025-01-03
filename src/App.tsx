import React, { useEffect, useState } from 'react'
import './styles/index.scss'
import useWeatherFetch from './hooks/useWeatherFetch'
import Header from './components/Header/Header'
import { cityType } from './types/types'
import 'primeicons/primeicons.css'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'

const App = () => {
	const [emoji, setEmoji] = useState('/emoji/greeting.svg')
	const [city, setCity] = useState<cityType>({ lat: '', lon: '', name: '' })
	const [requestType, setRequestType] = useState('weather')
	const { weatherInfo, loading, error } = useWeatherFetch({ city, requestType })
	console.log(new Date(1735916400))

	const changeEmoji = () => {
		if (!weatherInfo || !weatherInfo.main || !weatherInfo.main.temp) {
			setEmoji('/emoji/greeting.svg')
			return
		}
		const x = weatherInfo.main.temp
		if (x <= -10) {
			setEmoji('/emoji/cold.svg')
		} else if (x <= 0) {
			setEmoji('/emoji/zero.svg')
		} else if (x <= 10) {
			setEmoji('/emoji/normal.svg')
		} else if (x <= 20) {
			setEmoji('/emoji/warm.svg')
		} else if (x > 20) {
			setEmoji('/emoji/hot.svg')
		} else {
			setEmoji('/emoji/greeting.svg')
		}
	}
	useEffect(() => {
		changeEmoji()
	}, [weatherInfo])

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
			{requestType === 'weather' && (
				<div className='emoji-section'>
					<img src={emoji} alt='Hi there!' />
				</div>
			)}
		</div>
	)
}

export default App
