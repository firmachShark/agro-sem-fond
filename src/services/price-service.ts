import axios from 'axios'

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL
const PRICE_KEY = process.env.NEXT_PUBLIC_PRICE_KEY || ''
const PRICE_DELIVERY_KEY = process.env.NEXT_PUBLIC_PRICE_DELIVERY_KEY || ''

export interface PriceRequestItem {
    id: number
    priceWithDelivery: boolean
}

class PriceService {
    async loadPrices(ids: PriceRequestItem[]) {
        const result: Record<number, number> = {}
        const requestIds: number[] = ids.map((id) => id.id)

        if (requestIds.length) {
            try {
                const response = await axios.post<any[]>(
                    `${CRM_URL}/price/get-by-product-ids`,
                    { ids: requestIds },
                )

                if (response.status === 201) {
                    response.data.forEach((priceObj) => {
                        const requested = ids.find(
                            (item) => item.id === priceObj.product_id,
                        )

                        let priceKey = PRICE_KEY
                        if (requested?.priceWithDelivery) {
                            priceKey = PRICE_DELIVERY_KEY
                        }

                        const price = priceObj[priceKey]

                        result[priceObj.product_id] = price
                    })
                }
            } catch (e) {
                return null
            }
        }

        return result
    }
}

export default new PriceService()
