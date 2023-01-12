import axios from 'axios'

const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL
const PRICE_KEY = process.env.NEXT_PUBLIC_PRICE_KEY || ''

class PriceService {
    cached: Record<number, number> = {}

    async loadPrices(ids: number[]) {
        const result: Record<number, number> = {}
        const requestIds: number[] = []
        ids.forEach((id) => {
            if (this.cached[id] !== undefined)
                return (result[id] = this.cached[id])

            requestIds.push(id)
        })

        if (requestIds.length) {
            const response = await axios.post<any[]>(
                `${CRM_URL}/price/get-by-product-ids`,
                { ids: requestIds },
            )

            if (response.status === 201) {
                response.data.forEach((priceObj) => {
                    const price = priceObj[PRICE_KEY]
                    result[priceObj.product_id] = price
                    this.cached[priceObj.product_id] = price
                })
            }
        }

        return result
    }
}

export default new PriceService()
