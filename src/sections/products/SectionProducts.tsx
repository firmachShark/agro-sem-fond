import React from 'react'
import { Container } from 'src/components/layout/container'
import { IProduct } from 'src/models/IProduct'
import { ProductsCarousel } from './ProductsCarousel'
import styles from './SectionProducts.module.scss'

interface SectionProductsProps {
    products: IProduct[]
    title: string
    isNew?: boolean
}

export const SectionProducts: React.FC<SectionProductsProps> = ({
    products,
    title,
    isNew,
}) => {
    if (!products.length) return null

    return (
        <section className={styles.section}>
            <Container>
                <h2 className="section__title">{title}</h2>
                <ProductsCarousel
                    carouselProps={{ variableWidth: true, centerMode: true }}
                    isNew={!!isNew}
                    products={products}
                />
            </Container>
        </section>
    )
}
