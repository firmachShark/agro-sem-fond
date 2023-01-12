import Link from 'next/link'
import React, { ComponentProps, HTMLProps, useMemo } from 'react'
import { concatClass } from 'utils/concatClass'
import styles from './Button.module.scss'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    variant?: 'primary' | 'orange' | 'red'
    bg?: 'outline' | 'outline-primary'
    sizeMode?: 'sm' | 'xs' | 'lg'
    isLink?: ComponentProps<typeof Link>
}

const variants = {
    primary: styles.primary,
    orange: styles.orange,
    red: styles.red,
}

const bgs = {
    outline: styles.outline,
    'outline-primary': styles.outline_primary,
}

const sizes = {
    sm: styles.sm,
    xs: styles.xs,
    lg: styles.lg,
}

const useClass = (obj: any, key?: string) => {
    const className = useMemo(() => {
        if (!key) return key

        return obj[key]
    }, [key, obj])

    return className
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant,
    bg,
    sizeMode,
    isLink,
    ...props
}) => {
    const variantClass = useClass(variants, variant)
    const bgClass = useClass(bgs, bg)
    const sizeClass = useClass(sizes, sizeMode)

    if (isLink)
        return (
            <Link
                {...isLink}
                className={concatClass([
                    styles.btn,
                    className,
                    variantClass,
                    bgClass,
                    sizeClass,
                ])}
            >
                {children}
            </Link>
        )

    return (
        <button
            type={'button' as any}
            {...props}
            className={concatClass([
                styles.btn,
                className,
                variantClass,
                bgClass,
                sizeClass,
            ])}
        >
            {children}
        </button>
    )
}
