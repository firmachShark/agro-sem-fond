import qs from 'qs'
import { getModels } from 'src/http'
import { IReview } from 'src/models/IReview'
import { ISOverviewItem } from 'src/models/ISOverviewItem'
import { convertToHTML } from 'utils/convertToHTML'
import categoryService from './category-service'

export class HomePageService {
    async getOverviewData() {
        const overviews = await getModels<ISOverviewItem>(
            `section-overviews?${qs.stringify({
                populate: {
                    photo: {
                        fields: ['url'],
                    },
                },
            })}`,
        )

        for (const overview of overviews) {
            overview.content = await convertToHTML(overview.content)
        }

        return overviews
    }

    async getCategoriesData() {
        return categoryService.getAll({ pagination: { limit: 9 } })
    }

    async getReviewsData() {
        return getModels<IReview>(
            `reviews?${qs.stringify({
                populate: {
                    image: {
                        fields: ['url'],
                    },
                },
            })}`,
        )
    }
}

export default new HomePageService()
