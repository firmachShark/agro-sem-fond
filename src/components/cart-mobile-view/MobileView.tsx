import React, { useMemo } from 'react'
import { IProductInCart } from '../../../pages/cart'
import styles from './MobileView.module.scss'
import cartApi from 'utils/cart'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'src/components/button'
import { CountInput } from 'src/components/count-input'

interface MobileViewProps {
    product: IProductInCart
    handleChangeCount: (value: number) => void
}

export const MobileView: React.FC<MobileViewProps> = ({
    product,
    handleChangeCount,
}) => {
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

    const handleRemoveFromCart = () => {
        cartApi.remove(product.id)
    }

    return (
        <article className={styles.mobile}>
            <div className="row">
                <div className="col-4">
                    <div className={styles.mobile_image}>
                        {previewData && (
                            <Image
                                src={previewData.imageURL}
                                width={previewData.imageWidth}
                                height={previewData.imageHeight}
                                alt={product.name}
                            />
                        )}
                    </div>
                </div>
                <div className="col-8">
                    <Link href={href}>{product.name}</Link>
                    <div className={styles.mobile_price}>
                        <p>Цена: {product.price} руб.</p>
                        <p>Сумма: {product.price * product.count} руб.</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <CountInput
                            value={product.count}
                            setValue={handleChangeCount as any}
                        />
                        <Button
                            sizeMode="sm"
                            variant="red"
                            onClick={handleRemoveFromCart}
                        >
                            Удалить
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    )
}
