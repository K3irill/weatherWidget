import { SetStateAction, useEffect, useState } from 'react'
import { cityType } from '../types/types'

type useWeatherFetchProps = {
	city: cityType
	setCity: React.Dispatch<SetStateAction<cityType>>
	requestType: string
}

const useWeatherFetch = ({
	city,
	setCity,
	requestType,
}: useWeatherFetchProps) => {
	const [weatherInfo, setWeatherInfo] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getWeather() {
			try {
				const resp = await fetch(
					`https://api.openweathermap.org/data/2.5/${requestType}?lat=${
						city.lat
					}&lon=${city.lon}&units=metric&appid=${
						import.meta.env.VITE_WEATHER_API_KEY
					}`
				)
				if (!resp.ok) {
					throw new Error(`Ошибка: ${resp.status}`)
				}
				const data = await resp.json()
				setWeatherInfo(data)
				console.log(weatherInfo)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}
		if (city.lat && city.lon) {
			setLoading(true)
			setWeatherInfo(null)
			getWeather()
		}
	}, [city, requestType])

	return { weatherInfo, loading, error }
}

export default useWeatherFetch
