import { load } from 'cheerio'
import { remark } from 'remark'
import html from 'remark-html'
import { API_URL } from 'src/http'

export const convertToHTML = async (markdown: string) => {
    const processed = await remark().use(html).process(markdown)

    const stringified = processed.toString()

    return replaceImagesURL(stringified)
}

const replaceImagesURL = (html: string) => {
    const $ = load(html)
    $('img').each((i, img) => {
        const node = $(img)
        const attrs = node.attr()
        if (attrs && attrs.src) {
            attrs.src = API_URL + attrs.src
        }
    })

    return $.html()
}
