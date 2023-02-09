import React, { useMemo } from 'react'
import { Settings } from 'react-slick'
import { Card } from 'src/components/card'
import { Carousel } from 'src/components/carousel'
import { IProduct } from 'src/models'

interface ProductsCarouselProps {
    products: IProduct[]
    isNew?: boolean
    isHit?: boolean
    carouselProps?: Settings
}

export const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
    products,
    isNew,
    isHit,
    carouselProps,
}) => {
    const [initial, lg, md, sm] = useMemo(() => {
        const result = []

        for (let i = 4; i > 0; i--) {
            result.push(products.length > i ? i : products.length)
        }

        return result
    }, [products])

    return (
        <Carousel
            slidesToShow={initial}
            autoplay
            autoplaySpeed={4000}
            responsive={[
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: lg,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: md,
                    },
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: sm,
                    },
                },
            ]}
            {...carouselProps}
        >
            {products.map((product) => (
                <div key={product.id}>
                    <Card product={product} isNew={!!isNew} isHit={!!isHit} />
                </div>
            ))}
        </Carousel>
    )
}
