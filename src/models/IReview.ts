import { Image } from './Image'

export interface IReview {
    id: number
    author: string
    comment: string
    city: string
    product: string
    image?: Image
}
