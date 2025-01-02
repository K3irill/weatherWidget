import React, { useState } from 'react'
import './styles/index.scss'
import useWeatherFetch from './hooks/useWeatherFetch'

const App = () => {
	const [value, setValue] = useState('')
	const [city, setCity] = useState({ lat: '', lon: '' })
	const { weatherInfo, loading, error } = useWeatherFetch({ city })

	const fetchCityCoordinates = async () => {
		if (!value.trim()) {
			alert('Введите название города')
			return
		}

		try {
			const response = await fetch(
				`https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=10&appid=${
					import.meta.env.VITE_WEATHER_API_KEY
				}`
			)
			const data = await response.json()
			console.log(data)
			if (data.length === 0) {
				alert('Город не найден')
				return
			}

			const { lat, lon } = data[0]
			setCity({ lat: String(lat), lon: String(lon) })
		} catch (error) {
			console.error('Ошибка получения координат:', error)
			alert('Не удалось получить координаты города')
		}
	}

	return (
		<div className='app'>
			<label>
				<span>Введите название города:</span>
				<input
					value={value}
					onChange={e => setValue(e.target.value)}
					type='text'
				/>
			</label>
			<button onClick={fetchCityCoordinates}>Get weather data</button>

			{error && <p>Ошибка: {error}</p>}
			{weatherInfo && <div></div>}
		</div>
	)
}

export default App
