import QueryString from 'qs'
import { getModels } from 'src/http'
import { IPost } from 'src/models/IBlog'
import { convertToHTML } from 'utils/convertToHTML'

const baseQS: any = {
    populate: {
        preview: {
            fields: ['url', 'width', 'height'],
        },
    },
}

class BlogService {
    async getByTitle(title: string) {
        const posts = await this.getAll({
            filters: {
                title: {
                    $eqi: title,
                },
            },
        })

        if (!posts.length) return null

        return posts[0]
    }

    async getAll(qs?: object) {
        const posts = await getModels<IPost>(
            `blogs?${QueryString.stringify({
                ...baseQS,
                ...(qs || {}),
            })}`,
        )

        return Promise.all(
            posts.map(async (post) => {
                const content = await convertToHTML(post.content)

                return {
                    ...post,
                    content,
                }
            }),
        )
    }
}

export default new BlogService()
