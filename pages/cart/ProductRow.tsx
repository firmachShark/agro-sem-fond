import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { CountInput } from 'src/components/count-input'
import styles from './CartPage.module.scss'
import cartApi from 'utils/cart'
import { IProductInCart } from '.'

interface ProductRowProps {
    product: IProductInCart
    idx: number
    handleChangeCount: (value: number) => void
}

const ProductRow: React.FC<ProductRowProps> = ({
    product,
    idx,
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
        <tr>
            <td>{idx + 1}</td>
            <td>
                <Link href={href} className={styles.title}>
                    {previewData && (
                        <Image
                            src={previewData.imageURL}
                            width={previewData.imageWidth}
                            height={previewData.imageHeight}
                            alt={product.name}
                        />
                    )}
                    <span>{product.name}</span>
                </Link>
            </td>
            <td className={styles.price}>{product.price} руб.</td>
            <td>
                <div className={styles.count}>
                    <CountInput
                        value={product.count}
                        setValue={handleChangeCount as any}
                    />
                </div>
            </td>
            <td className={styles.price}>
                {product.price * product.count} руб.
            </td>
            <td className={styles.delete}>
                <i onClick={handleRemoveFromCart} className="fa fa-times" />
            </td>
        </tr>
    )
}

export default ProductRow
