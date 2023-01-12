import React, { SetStateAction, useId, useState } from 'react'
import { IProductReview } from 'src/models/IProductReview'
import reviewsService from 'src/services/reviews-service'
import { convertToModel } from 'utils/convertToModel'
import { Button } from '../button'
import { Loader } from '../loader'
import styles from './ProductReview.module.scss'

const CONTENT_LIMIT = 500

interface ReviewFormProps {
    productId: number
    setReviews: React.Dispatch<SetStateAction<IProductReview[] | null>>
}

export const ReviewForm: React.FC<ReviewFormProps> = ({
    productId,
    setReviews,
}) => {
    const [isOpen, setOpen] = useState(false)
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    const [authorError, setAuthorError] = useState(false)
    const [contentError, setContentError] = useState(false)

    const contentId = useId()
    const authorId = useId()

    const handleOnChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) =>
        setAuthor(e.target.value)

    const handleOnChangeContent = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        let value = e.target.value
        if (value.length > CONTENT_LIMIT) value = value.slice(0, CONTENT_LIMIT)

        setContent(value)
    }

    const handleSubmit = async () => {
        if (author.length < 2) return setAuthorError(true)
        setAuthorError(false)
        if (content.length < 10) return setContentError(true)
        setContentError(false)

        setLoading(true)
        try {
            const response = await reviewsService.addReview(productId, {
                author,
                content,
            })

            if (response.status === 200) {
                const newReview = convertToModel<IProductReview>(
                    response.data.data,
                )
                setReviews((prev) => {
                    if (Array.isArray(prev)) return [...prev, newReview]

                    return [newReview]
                })
                handleCancel()
            }
        } catch (e) {
            console.error(e)
        }
        setLoading(false)
    }

    const handleCancel = () => {
        setAuthor('')
        setContent('')
        setAuthorError(false)
        setContentError(false)
        setOpen(false)
    }

    return isOpen ? (
        <div className={styles.review_form}>
            {loading && <Loader />}
            <label htmlFor={authorId}>Ваше Имя</label>
            <input
                value={author}
                onChange={handleOnChangeAuthor}
                autoFocus
                id={authorId}
                placeholder="Имя"
            />
            {authorError && (
                <p className={styles.error}>
                    Длина имени должна быть больше 2 символов
                </p>
            )}
            <label htmlFor={contentId}>
                Ваш отзыв: {content.length}/{CONTENT_LIMIT}
            </label>
            <textarea
                id={contentId}
                value={content}
                onChange={handleOnChangeContent}
                placeholder="Отзыв"
            />
            {contentError && (
                <p className={styles.error}>
                    Длина отзыва должна быть больше 10 символов
                </p>
            )}
            <Button sizeMode="sm" variant="primary" onClick={handleSubmit}>
                Отправить
            </Button>
            <Button
                sizeMode="sm"
                variant="primary"
                bg="outline-primary"
                onClick={handleCancel}
                className="ms-2"
            >
                Отмена
            </Button>
        </div>
    ) : (
        <Button sizeMode="sm" variant="primary" onClick={() => setOpen(true)}>
            Оставить отзыв
        </Button>
    )
}
