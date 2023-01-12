import React, { useMemo, useState } from 'react'
import { Button } from 'src/components/button'
import { Carousel } from 'src/components/carousel'
import { Container } from 'src/components/layout/container'
import { useDispatchCreator } from 'src/hooks/useStore'
import { IReview } from 'src/models/IReview'
import { openModalOrder } from 'src/store/slices/modal-order.slice'
import { concatClass } from 'utils/concatClass'
import styles from './SectionReviews.module.scss'

interface SectionReviewsProps {
    reviews: IReview[]
}

export const SectionReviews: React.FC<SectionReviewsProps> = ({ reviews }) => {
    const { dispatchOpenModalOrder } = useDispatchCreator({ openModalOrder })

    const items = useMemo(
        () => reviews.filter((item) => !!item.image),
        [reviews],
    )

    const slidesToShow = useMemo(() => {
        if (items.length > 0 && items.length < 3) return items.length

        return 3
    }, [items.length])

    const [current, setCurrent] = useState(items[0])

    const handleClickModalBtn = () =>
        dispatchOpenModalOrder({
            title: 'Оставить заявку',
            text: 'Оставьте ваши данные, и мы Вам перезвоним!',
        })

    const handleClick = (id: number) => () => {
        const candidate = items.find((item) => item.id === id)
        if (candidate) setCurrent(candidate)
    }

    const handleChange = (idx: number) => {
        const candidate = items[idx]
        if (candidate) setCurrent(candidate)
    }

    return (
        <section>
            <Container>
                <div className={styles.inner}>
                    <div>
                        <h3>{current?.author}</h3>
                        <p>{current?.comment}</p>
                        <Button
                            sizeMode="sm"
                            onClick={handleClickModalBtn}
                            variant="orange"
                            className="mt-3 mb-5"
                        >
                            Оставить заявку
                        </Button>
                        <Carousel
                            slidesToShow={slidesToShow}
                            afterChange={handleChange}
                            arrows={false}
                        >
                            {items.map((item) => {
                                const isActive = current.id === item.id
                                const className = isActive
                                    ? styles.active
                                    : undefined

                                return (
                                    <div key={item.id}>
                                        <div
                                            onClick={handleClick(item.id)}
                                            className={concatClass([
                                                styles.item,
                                                className,
                                            ])}
                                            style={{
                                                backgroundImage: `url(${item.image?.url})`,
                                            }}
                                        ></div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    {current && (
                        <div
                            className={styles.review}
                            style={{
                                backgroundImage: `url(${current.image?.url})`,
                            }}
                        >
                            <h6>{current.product}</h6>
                            <p>
                                <b>{current.author}</b>
                                <span>{current.city}</span>
                            </p>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    )
}
