import qs from 'qs'
import { getModels, getPaginatedModels } from 'src/http'
import { IProduct } from 'src/models/IProduct'
import {
    getNumbersFromObject,
    getObjectByNumber,
} from 'utils/getNumbersFromObject'
import priceService from './price-service'

export const baseQuery: object = {
    populate: {
        preview: {
            fields: ['url', 'width', 'height'],
        },
        images: {
            fields: ['url', 'width', 'height'],
        },
        subcategories: {
            fields: ['name'],
            populate: {
                category: {
                    fields: ['name'],
                },
            },
        },
    },
}

class ProductService {
    async getAll(_query?: object) {
        const query = _query
            ? `?${qs.stringify(_query, { encodeValuesOnly: true })}`
            : ''

        const products = await getModels<IProduct>('products' + query)

        const ids: number[] = []

        products.forEach((product) => {
            const id = product.calculator
                ? getNumbersFromObject(product.calculator)
                : [product.price_id]
            ids.push(...id)
        })

        const prices = await priceService.loadPrices(ids)

        return products.map((product) => {
            let price = prices[product.price_id]

            if (product.calculator) {
                const ids = getNumbersFromObject(product.calculator)
                ids.forEach((id, i) => {
                    if (i === 0) price = prices[id]

                    const place = getObjectByNumber(product.calculator, id)

                    if (place) {
                        const [item, key] = place
                        item[key] = prices[id]
                    }
                })
            }

            if (price)
                return {
                    ...product,
                    price,
                }

            return product
        })
    }

    async getByCategoryName(
        name: string,
        filters?: {
            productFilters?: object
            subcategoryFilters?: object
            page: number
        },
    ) {
        const query = `?${qs.stringify(
            {
                ...baseQuery,
                filters: {
                    subcategories: {
                        category: {
                            name: {
                                $eqi: name,
                            },
                        },
                        ...(filters?.subcategoryFilters || {}),
                    },
                    ...(filters?.productFilters || {}),
                },
                ...(filters?.page
                    ? {
                          page: filters?.page,
                          pageSize: 20,
                      }
                    : {}),
            },
            { encodeValuesOnly: true },
        )}`

        const result = await getPaginatedModels<IProduct>('products' + query)

        const prices = await priceService.loadPrices(
            result.items.map((product) => product.price_id),
        )

        return {
            products: result.items.map((product) => {
                const price = prices[product.price_id]
                if (price)
                    return {
                        ...product,
                        price,
                    }

                return product
            }),
            pagination: result.pagination,
        }
    }

    async getByFlag(flag: 'isNew' | 'isHit', categoryName?: string) {
        return this.getAll({
            ...baseQuery,
            filters: {
                [flag]: {
                    $eq: true,
                },
                ...(categoryName
                    ? {
                          subcategories: {
                              category: {
                                  name: {
                                      $eqi: categoryName,
                                  },
                              },
                          },
                      }
                    : {}),
            },
            pagination: {
                limit: 10,
            },
        })
    }

    async getByName(name: string, categoryName: string) {
        const products = await this.getAll({
            ...baseQuery,
            filters: {
                name: {
                    $eqi: name,
                },
                subcategories: {
                    category: {
                        name: {
                            $eqi: categoryName,
                        },
                    },
                },
            },
        })

        if (!products.length) return null

        return products[0]
    }
}

export default new ProductService()
