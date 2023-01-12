export interface ICartItem {
    count: number
    price: number
}

export interface ICart extends Record<number, ICartItem> {}
