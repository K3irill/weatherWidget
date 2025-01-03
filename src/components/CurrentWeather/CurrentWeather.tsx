import React from 'react'
import styles from './CurrentWeather.module.scss'
import WeatherIcon from '../ui/WeatherIcon/WeatherIcon'
const CurrentWeather = ({ weatherInfo }) => {
	if (!weatherInfo) return <p>Данные отсутствуют</p>
	const isCurrentWeather = weatherInfo.list === undefined
	if (isCurrentWeather) {
		return (
			<div className={styles.container}>
				<div className={styles.main}>
					<WeatherIcon icon={weatherInfo.weather[0].icon} />
					<h1 className={styles.temp}>{weatherInfo.main.temp.toFixed(0)}</h1>
					<h2 className={styles.description}>{weatherInfo.weather[0].main}</h2>
				</div>
				<hr />
				<div className={styles.extra}>
					{weatherInfo.wind.speed && (
						<div className={styles.extra__unit}>
							<span>{weatherInfo.wind.speed}km/h</span>
							<p>Wind</p>
						</div>
					)}

					{weatherInfo.main.humidity && (
						<div className={styles.extra__unit}>
							<span>{weatherInfo.main.humidity}%</span>
							<p>Humidity</p>
						</div>
					)}

					{weatherInfo.main.pressure && (
						<div className={styles.extra__unit}>
							<span>{weatherInfo.main.pressure}</span>
							<p>Pressure</p>
						</div>
					)}
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles.container}>
				<div className={`${styles.main} ${styles.main__forecast}`}>
					<WeatherIcon icon={weatherInfo.list[1].weather[0].icon} />
					<div>
						<p>Tomorrow</p>
						<h1 className={styles.temp}>
							{weatherInfo.list[1].main.temp.toFixed(0)}
						</h1>
						<h2 className={styles.description}>
							{weatherInfo.list[1].weather[0].main}
						</h2>
					</div>
				</div>
				<hr />
				<div className={styles.extra}>
					{weatherInfo.list[1].wind.speed && (
						<div className={styles.extra__unit}>
							<span>{weatherInfo.list[1].wind.speed}km/h</span>
							<p>Wind</p>
						</div>
					)}

					{weatherInfo.list[1].main.humidity && (
						<div className={styles.extra__unit}>
							<span>{weatherInfo.list[1].main.humidity}%</span>
							<p>Humidity</p>
						</div>
					)}

					{weatherInfo.list[1].main.pressure && (
						<div className={styles.extra__unit}>
							<span>{weatherInfo.list[1].main.pressure}</span>
							<p>Pressure</p>
						</div>
					)}
				</div>
			</div>
		)
	}
}

export default CurrentWeather
