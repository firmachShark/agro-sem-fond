import { CartIcon } from 'src/image_export/header'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { concatClass } from 'utils/concatClass'
import styles from './Common.module.scss'
import { ICart } from 'src/models/ICart'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import ROUTES from 'src/constants/routes'

interface CartProps {
    className?: string
}

export const Cart: React.FC<CartProps> = ({ className }) => {
    const cart = useLocalStorage<ICart>('cart')
    const count = useMemo(() => {
        if (!cart) return 0

        return Object.keys(cart).length
    }, [cart])

    const price = useMemo(() => {
        if (!cart) return 0

        return Object.keys(cart).reduce((result, key) => {
            const data = cart[Number(key)]

            return (result += Number(data.count) * Number(data.price))
        }, 0)
    }, [cart])

    return (
        <Link
            href={ROUTES.cart}
            className={concatClass([styles.cart, className])}
        >
            <label>{count}</label>
            <Image src={CartIcon} alt="cart" />
            <span>
                товаров на сумму <br />
                <b>{price.toFixed(2)}</b> руб.
            </span>
        </Link>
    )
}
