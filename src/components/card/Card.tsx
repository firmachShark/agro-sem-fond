import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { ICart } from 'src/models/ICart'
import { IProduct } from 'src/models/IProduct'
import { concatClass } from 'utils/concatClass'
import { localStorageWrapper } from 'utils/storage'
import cartApi from 'utils/cart'
import { Button } from '../button'
import { CountInput } from '../count-input'
import styles from './Card.module.scss'
import { Img } from '../img'

interface CardProps {
    product: IProduct
    isNew?: boolean
    isHit?: boolean
    description?: boolean
}

export const Card: React.FC<CardProps> = ({
    product,
    isNew,
    isHit,
    description,
}) => {
    const cart = useLocalStorage<ICart>('cart')
    const inCart = cart && !!cart[product.id]

    const [count, setCount] = useState(() => {
        const cart = localStorageWrapper.get<ICart>('cart')
        if (!cart) return 1

        const cartCount = cart[product.id]?.count
        return cartCount !== undefined ? cartCount : 1
    })

    const props = useMemo(() => {
        const props = product.props
        if (!props) return null

        return Object.keys(props)
            .slice(0, 7)
            .reduce(
                (result: Record<string, string>, key) => ({
                    ...result,
                    [key]: props[key],
                }),
                {},
            )
    }, [product])

    const previewData = useMemo(() => {
        let image = product.preview
        if (!image && product.images) {
            const firstImage = product.images[0]
            if (firstImage) {
                image = firstImage
            }
        }

        if (!image) return null

        return {
            imageURL: image.url,
            imageWidth: image.width,
            imageHeight: image.height,
        }
    }, [product])

    const href = useMemo(() => {
        let href = '/'

        if (
            product.subcategories?.length &&
            product.subcategories[0].category
        ) {
            const pathname = product.href
            const category = product.subcategories[0].category.href

            href = `/catalog/${category}/${pathname}`
        }

        return href
    }, [product])

    const handleAddToCart = () => {
        cartApi.add(product.id, {
            count,
            price: product.price,
        })
    }

    const handleRemoveFromCart = () => {
        cartApi.remove(product.id)
        setCount(1)
    }

    return (
        <article
            className={concatClass([
                styles.card,
                description ? styles.d_wrapper : undefined,
            ])}
            itemScope
            itemType="http://schema.org/Product"
        >
            {description && props && (
                <div className={concatClass([styles.description])}>
                    <ul>
                        {Object.keys(props)
                            .filter((key) => props[key].length <= 30)
                            .map((key) => (
                                <li key={key}>
                                    <strong>{key}</strong>
                                    <span>{props[key]}</span>
                                </li>
                            ))}
                    </ul>
                </div>
            )}
            <Link href={href} className={styles.stickers}>
                {isNew && <span className={styles.sticker}>Новинка</span>}
                {isHit && (
                    <span
                        className={concatClass([
                            styles.sticker,
                            styles.sticker_orange,
                        ])}
                    >
                        ХИТ ПРОДАЖ
                    </span>
                )}
                {product.isGift && (
                    <span
                        className={concatClass([
                            styles.sticker,
                            styles.sticker_red,
                        ])}
                    >
                        + Подарок
                    </span>
                )}
            </Link>
            {previewData && (
                <Link href={href} className={styles.header}>
                    <Img
                        itemProp="image"
                        width={previewData.imageWidth}
                        height={previewData.imageHeight}
                        src={previewData.imageURL}
                        alt={product.name}
                        placeholder="empty"
                    />
                </Link>
            )}
            <div className={styles.body}>
                <div className="d-flex justify-content-between">
                    <Link href={href} className={styles.title} itemProp="name">
                        {product.name}
                    </Link>
                </div>
                <strong
                    itemProp="offers"
                    itemScope
                    itemType="http://schema.org/Offer"
                >
                    <span itemProp="lowPrice">{product.price}</span>{' '}
                    <span itemProp="priceCurrency">BYN</span>
                </strong>
                <div className="d-flex justify-content-between mt-3 align-items-center">
                    {inCart ? (
                        <>
                            <Link href="/cart">
                                В корзине{count > 1 && <b> ({count} шт.)</b>}
                            </Link>
                            <Button
                                sizeMode="xs"
                                variant="primary"
                                onClick={handleRemoveFromCart}
                            >
                                Убрать
                            </Button>
                        </>
                    ) : (
                        <>
                            {' '}
                            <CountInput value={count} setValue={setCount} />
                            <Button
                                sizeMode="xs"
                                variant="primary"
                                onClick={handleAddToCart}
                            >
                                В корзину
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </article>
    )
}
