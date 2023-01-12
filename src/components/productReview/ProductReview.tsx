import React, { useCallback, useEffect, useState } from 'react'
import { IProductReview } from 'src/models/IProductReview'
import reviewsService from 'src/services/reviews-service'
import { Loader } from '../loader'
import styles from './ProductReview.module.scss'
import { ReviewForm } from './ReviewForm'

interface ProductReviewProps {
    productId: number
    isOpen: boolean
}

export const ProductReview: React.FC<ProductReviewProps> = ({
    productId,
    isOpen,
}) => {
    const [loading, setLoading] = useState(false)
    const [reviews, setReviews] = useState<IProductReview[] | null>(null)

    const fetchReviews = useCallback(async () => {
        if (!isOpen) return
        if (reviews !== null) return

        setLoading(true)
        try {
            const data = await reviewsService.getByProductId(productId)

            setReviews(data)
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }, [productId, isOpen, reviews])

    useEffect(() => {
        fetchReviews()
    }, [fetchReviews])

    return (
        <div className={styles.wrapper}>
            {loading ? (
                <div className={styles.loader}>
                    <Loader withoutOverlay />
                </div>
            ) : (
                <>
                    <ReviewForm productId={productId} setReviews={setReviews} />
                    {reviews && reviews.length ? (
                        reviews.map((review) => (
                            <div key={review.id} className={styles.review}>
                                <h6>
                                    {review.author}{' '}
                                    <span>
                                        {new Date(
                                            review.createdAt,
                                        ).toLocaleString('ru')}
                                    </span>
                                </h6>
                                <p>{review.content}</p>
                            </div>
                        ))
                    ) : (
                        <h4 className={styles.not_yet}>Отзывов пока нет</h4>
                    )}
                </>
            )}
        </div>
    )
}
