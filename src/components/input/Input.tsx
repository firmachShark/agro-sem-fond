import React from 'react'
import { concatClass } from 'utils/concatClass'
import styles from './Input.module.scss'

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
    return (
        <input
            type="text"
            {...props}
            className={concatClass([styles.input, className])}
        />
    )
}
