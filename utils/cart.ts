import { ICart, ICartItem } from 'src/models/ICart'
import { localStorageWrapper } from './storage'

const STORAGE_KEY = 'cart'

class CartApi {
    add(id: number, item: ICartItem) {
        const cart = localStorageWrapper.get<ICart>(STORAGE_KEY)
        localStorageWrapper.set(STORAGE_KEY, {
            ...(cart || {}),
            [id]: item,
        })
    }
    remove(id: number) {
        const cart = localStorageWrapper.get<ICart>(STORAGE_KEY)
        if (cart) {
            delete cart[id]
            localStorageWrapper.set(STORAGE_KEY, cart)
        }
    }
}

export default new CartApi()
