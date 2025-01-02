import React from 'react'
import styles from './IconButton.module.scss'

type IconButtonProps = {
	action: () => void
	piIcon: string
}

const IconButton = ({ action, piIcon }: IconButtonProps) => {
	return (
		<button className={styles.button} onClick={action}>
			<span className={`pi ${piIcon}`}></span>
		</button>
	)
}

export default IconButton
