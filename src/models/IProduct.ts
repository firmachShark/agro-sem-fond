import { Image, ISubcategory } from './'

export interface IProduct {
    id: number
    name: string
    price: number
    price_id: number
    description: string
    subcategories?: ISubcategory[]
    preview?: Image
    images?: Image[]
    href: string
    isNew: boolean
    isHit: boolean
    isGift: boolean
    priceWithDelivery: boolean
    props: Record<string, string> | null
    calculator?: Record<string, Record<string, number>>
}
