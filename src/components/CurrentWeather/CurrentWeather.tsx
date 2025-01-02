import React from 'react'
import styles from './CurrentWeather.module.scss'
import WeatherIcon from '../ui/WeatherIcon/WeatherIcon'
const CurrentWeather = ({ weatherInfo }) => {
	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<WeatherIcon icon={weatherInfo.weather[0].icon} />
				<h1 className={styles.temp}>{weatherInfo.main.temp.toFixed(0)}</h1>
				<h2 className={styles.description}>{weatherInfo.weather[0].main}</h2>
			</div>
			<hr />
			<div className={styles.extra}>
				<div className={styles.extra__unit}>
					<span>{weatherInfo.wind.speed}km/h</span>
					<p>Wind</p>
				</div>

				<div className={styles.extra__unit}>
					<span>{weatherInfo.main.humidity}%</span>
					<p>Humidity</p>
				</div>

				<div className={styles.extra__unit}>
					<span>{weatherInfo.main.pressure}</span>
					<p>Pressure</p>
				</div>
			</div>
		</div>
	)
}

export default CurrentWeather
