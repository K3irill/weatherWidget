import React, { useEffect, useState } from 'react'
import './styles/index.scss'
import useWeatherFetch from './hooks/useWeatherFetch'
import Header from './components/Header/Header'
import { cityType } from './types/types'
import 'primeicons/primeicons.css'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import WeatherIcon from './components/ui/WeatherIcon/WeatherIcon'
import changeEmoji from './tools/changeEmoji'

const App = () => {
	const [emoji, setEmoji] = useState('/emoji/greeting.svg')
	const [city, setCity] = useState<cityType>({ lat: '', lon: '', name: '' })
	const [requestType, setRequestType] = useState('weather')
	const { weatherInfo, loading, error } = useWeatherFetch({
		city,
		setCity,
		requestType,
	})
	console.log(new Date(1735916400))

	useEffect(() => {
		changeEmoji(setEmoji, weatherInfo)
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

			{requestType === 'forecast' && weatherInfo && weatherInfo.list ? (
				<div className='forecast-section'>
					{(() => {
						const renderedDays = new Set()

						return weatherInfo.list
							.filter(day => {
								const currentDay = new Date(day.dt_txt).toDateString()
								if (!renderedDays.has(currentDay)) {
									renderedDays.add(currentDay)
									return true
								}
								return false
							})
							.map(day => (
								<div key={day.dt} className='forecast-day'>
									<div>
										<p>Date: {new Date(day.dt_txt).toLocaleDateString()}</p>
										<p>Temperature: {day.main.temp.toFixed(0)}°C</p>
										<p>Weather: {day.weather[0].description}</p>
									</div>
									<WeatherIcon icon={day.weather[0].icon} />
								</div>
							))
					})()}
				</div>
			) : (
				<div className='emoji-section'>
					<img src={emoji} alt='Hi there!' />
				</div>
			)}
		</div>
	)
}

export default App
