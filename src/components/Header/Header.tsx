import React, { useState } from 'react'
import { cityType } from '../../types/types'
import styles from './Header.module.scss'
import IconButton from '../ui/IconButton/IconButton'
import Button from '../ui/Button/Button'
type HeaderProps = {
	city: cityType
	setCity: React.Dispatch<React.SetStateAction<cityType>>
}

const Header = ({ setCity, city }: HeaderProps) => {
	const [inputCityValue, setInputCityValue] = useState<string>(city.name || '')

	const fetchCityCoordinates = async () => {
		if (!inputCityValue.trim()) {
			alert('Введите название города')
			return
		}

		try {
			const response = await fetch(
				`https://api.openweathermap.org/geo/1.0/direct?q=${inputCityValue}&limit=10&appid=${
					import.meta.env.VITE_WEATHER_API_KEY
				}`
			)
			const data = await response.json()
			console.log(data)
			if (data.length === 0) {
				alert('Город не найден')
				return
			}

			const { name, lat, lon } = data[0]
			setCity({ name: name, lat: String(lat), lon: String(lon) })
		} catch (error) {
			console.error('Ошибка получения координат:', error)
			alert('Не удалось получить координаты города')
		}
	}
	return (
		<div className={styles['header']}>
			<nav className={styles['header__list']}>
				<IconButton action={() => console.log()} piIcon='pi-info-circle' />
				<div className={styles['header__input-wrapper']}>
					<input
						className={styles['header__city-input']}
						value={inputCityValue}
						onChange={e => setInputCityValue(e.target.value)}
						type='text'
						placeholder='Enter city'
					/>
					<Button action={fetchCityCoordinates}>
						<span
							className='pi pi-circle-fill'
							style={{ fontSize: '5px', color: 'yellow' }}
						/>
						{city.name ? 'Update' : 'Search'}
					</Button>
				</div>
				<IconButton action={() => console.log()} piIcon='pi-ellipsis-v' />
			</nav>
		</div>
	)
}

export default Header
