import QueryString from 'qs'
import { $api, getModels } from 'src/http'
import { IProductReview } from 'src/models/IProductReview'

class ReviewsService {
    async getByProductId(productId: number) {
        return getModels<IProductReview>(
            `product-reviews?${QueryString.stringify({
                filters: {
                    product: {
                        id: {
                            $eq: productId,
                        },
                    },
                },
            })}`,
        )
    }

    async addReview(
        productId: number,
        data: { author: string; content: string },
    ) {
        return $api.post('product-reviews', {
            data: {
                author: data.author,
                content: data.content,
                product: {
                    id: productId,
                },
            },
        })
    }
}

export default new ReviewsService()
