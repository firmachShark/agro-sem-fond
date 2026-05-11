import { parseSlug } from './slug'

export const parseURL = (url: string) => {
    return parseSlug(url)
}
