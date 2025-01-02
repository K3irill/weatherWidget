import { useEffect, useState } from 'react'

type useWeatherFetchProps = {
	city: {
		lat: string
		lon: string
	}
}

const useWeatherFetch = ({ city }: useWeatherFetchProps) => {
	const [weatherInfo, setWeatherInfo] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getWeather() {
			try {
				const resp = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${
						city.lat
					}&lon=${city.lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
				)
				if (!resp.ok) {
					throw new Error(`Ошибка: ${resp.status}`)
				}
				const data = await resp.json()
				setWeatherInfo(data)
			} catch (err) {
				setError(err.message)
			} finally {
				setLoading(false)
			}
		}
		if (city.lat && city.lon) {
			setLoading(true)
			getWeather()
			console.log(weatherInfo)
		}
	}, [city])

	return { weatherInfo, loading, error }
}

export default useWeatherFetch
