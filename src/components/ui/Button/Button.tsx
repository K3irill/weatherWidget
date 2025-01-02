import React from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
	action: () => void
	children: string | React.ReactNode
}

const Button = ({ action, children }: ButtonProps) => {
	return (
		<button className={styles.button} onClick={action}>
			{children}
		</button>
	)
}

export default Button
