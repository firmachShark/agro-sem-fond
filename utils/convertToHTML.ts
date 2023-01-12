import { remark } from 'remark'
import html from 'remark-html'

export const convertToHTML = async (markdown: string) => {
    const processed = await remark().use(html).process(markdown)
    return processed.toString()
}
