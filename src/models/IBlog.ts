import { Image } from './Image'

export interface IPost {
    id: number
    title: string
    href: string
    preview?: Image
    content: string
}
