import React from 'react'
import styles from './CurrentWeather.module.scss'
import WeatherIcon from '../ui/WeatherIcon/WeatherIcon'
const CurrentWeather = ({ weatherInfo }) => {
	return (
		<div className={styles.container}>
			<WeatherIcon icon={weatherInfo.weather[0].icon} />
			<h1 className={styles.temp}>{weatherInfo.main.temp.toFixed(0)}</h1>
			<h2 className={styles.description}>{weatherInfo.weather[0].main}</h2>
			<p></p>
		</div>
	)
}

export default CurrentWeather
