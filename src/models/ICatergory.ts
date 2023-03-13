import { Image, ISubcategory } from './'
import { ICalculator } from './ICalculator'

export interface ICategory {
    id: number
    fullName: string
    name: string
    preview?: Image
    subcategories?: ISubcategory[]
    href: string
    scriptURL?: string
    calculator?: ICalculator
}
