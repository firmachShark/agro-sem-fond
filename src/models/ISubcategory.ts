import { ICategory, Image, IProduct } from './'

export interface ISubcategory {
    id: number
    name: string
    preview?: Image
    category?: ICategory
    products?: IProduct
    href: string
}
