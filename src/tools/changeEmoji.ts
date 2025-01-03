const changeEmoji = (setEmoji, weatherInfo) => {
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
export default changeEmoji
