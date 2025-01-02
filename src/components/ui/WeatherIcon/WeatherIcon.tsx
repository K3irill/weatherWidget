import React from 'react'

const WeatherIcon = ({ icon }) => {
	const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

	return (
		<div>
			<img src={iconUrl} alt='weather icon' />
		</div>
	)
}
export default WeatherIcon
