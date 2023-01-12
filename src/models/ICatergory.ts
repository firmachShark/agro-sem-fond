import { Image, ISubcategory } from './'

export interface ICategory {
    id: number
    fullName: string
    name: string
    preview?: Image
    subcategories?: ISubcategory[]
    href: string
}
