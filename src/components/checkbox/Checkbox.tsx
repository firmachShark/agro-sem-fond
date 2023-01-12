import React, { useId, HTMLProps, PropsWithChildren } from 'react'
import styles from './Checkbox.module.scss'

interface CheckboxProps extends HTMLProps<HTMLInputElement> {}

export const Checkbox = ({
    children,
    ...props
}: PropsWithChildren<CheckboxProps>) => {
    const id = useId()

    return (
        <div className={styles.checkbox}>
            <input id={id} type="checkbox" {...props} />
            <label htmlFor={id}>{children}</label>
        </div>
    )
}
