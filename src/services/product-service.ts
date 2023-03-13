import qs from 'qs'
import { getPaginatedModels } from 'src/http'
import { IProduct } from 'src/models/IProduct'
import {
    getNumbersFromObject,
    getObjectByNumber,
} from 'utils/getNumbersFromObject'
import priceService, { PriceRequestItem } from './price-service'
import { convertToHTML } from 'utils/convertToHTML'
import { ICalculator } from 'src/models/ICalculator'

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
                    populate: ['calculator'],
                },
            },
        },
    },
}

type GetAllReturnType<T> = T extends boolean
    ? WithPaginationReturnType
    : IProduct[]

type WithPaginationReturnType = {
    products: IProduct[]
    pagination: {
        page: number
        pageSize: number
        pageCount: number
        total: number
    }
}

class ProductService {
    async getAll<T>(
        options: {
            _query?: object
            withPagination?: T
            withDescription?: boolean
        } = {},
    ): Promise<GetAllReturnType<T>> {
        const { _query, withDescription, withPagination } = options

        const query = _query
            ? `?${qs.stringify(_query, { encodeValuesOnly: true })}`
            : ''

        const { items, pagination } = await getPaginatedModels<IProduct>(
            'products' + query,
        )

        const ids: PriceRequestItem[] = []

        items.forEach((product) => {
            const calculator = getCalculator(product)
            ids.push({
                id: product.price_id,
                priceWithDelivery: product.priceWithDelivery,
            })

            if (calculator)
                Object.keys(product.calculator).forEach((partId) => {
                    const part = getPart(calculator, partId)
                    if (!part) return

                    let calcIds: number[] = []

                    switch (part.type) {
                        case 'nested': {
                            calcIds = getNumbersFromObject(
                                product.calculator[part.id],
                            )
                            break
                        }
                        case 'switch': {
                            calcIds = product.calculator[part.id].map(
                                (item: any) => item.value,
                            )
                            break
                        }
                        default:
                            return
                    }

                    ids.push(
                        ...calcIds.map((id) => ({
                            id,
                            priceWithDelivery: product.priceWithDelivery,
                        })),
                    )
                })
        })

        const prices = await priceService.loadPrices(ids)

        if (!prices)
            return (
                withPagination
                    ? {
                          pagination,
                          products: [],
                      }
                    : ([] as IProduct[])
            ) as GetAllReturnType<T>

        const products = []

        for (const product of items) {
            let price = prices[product.price_id]
            const calculator = getCalculator(product)
            if (calculator) {
                Object.keys(product.calculator).forEach((partId) => {
                    const part = getPart(calculator, partId)
                    if (!part) return

                    switch (part.type) {
                        case 'switch': {
                            const ids: number[] = product.calculator[
                                part.id
                            ].map(
                                (inputData: { value: number; title: string }) =>
                                    inputData.value,
                            )

                            ids.forEach((id) => {
                                const place = getObjectByNumber(
                                    product.calculator[partId],
                                    id,
                                )

                                if (place) {
                                    const [item, key] = place
                                    item[key] = prices[id]
                                }
                            })
                            break
                        }
                        case 'nested': {
                            const ids = getNumbersFromObject(
                                product.calculator[part.id],
                            )
                            ids.forEach((id, i) => {
                                if (i === 0 && prices[id]) price = prices[id]

                                const place = getObjectByNumber(
                                    product.calculator[partId],
                                    id,
                                )

                                if (place) {
                                    const [item, key] = place
                                    item[key] = prices[id]
                                }
                            })
                            break
                        }
                        default:
                            return
                    }
                })
            }

            const resultProduct = { ...product }

            if (price) resultProduct.price = price

            if (withDescription)
                resultProduct.description = await convertToHTML(
                    product.description,
                )

            products.push(resultProduct)
        }

        return (
            withPagination
                ? {
                      pagination,
                      products,
                  }
                : products
        ) as GetAllReturnType<T>
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
                ...(filters?.page !== undefined
                    ? {
                          pagination: {
                              page: filters.page,
                              pageSize: 21,
                          },
                      }
                    : {}),
            },
            { encodeValuesOnly: true },
        )}`

        const result = await getPaginatedModels<IProduct>('products' + query)

        const prices = await priceService.loadPrices(
            result.items.map((product) => ({
                id: product.price_id,
                priceWithDelivery: product.priceWithDelivery,
            })),
        )

        return {
            products: prices
                ? result.items.map((product) => {
                      const price = prices[product.price_id]
                      if (price)
                          return {
                              ...product,
                              price,
                          }

                      return product
                  })
                : [],
            pagination: result.pagination,
        }
    }

    async getByFlag(
        flag: 'isNew' | 'isHit',
        categoryName?: string,
        exclude?: string,
    ) {
        return this.getAll({
            _query: {
                ...baseQuery,
                filters: {
                    [flag]: {
                        $eq: true,
                    },
                    ...(exclude
                        ? {
                              name: {
                                  $ne: exclude,
                              },
                          }
                        : {}),
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
            },
        })
    }

    async getByName(name: string, categoryName: string) {
        const products = await this.getAll({
            _query: {
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
            },
            withDescription: true,
        })

        if (!products.length) return null

        return products[0]
    }
}

export default new ProductService()

function getPart(calculator: ICalculator, partId: string) {
    const part = calculator.schema.find((part) => part.id === partId)

    if (!part) return null
    if (part.loadType !== 'id') return null

    return part
}

function getCalculator(product: IProduct) {
    if (!product.calculator) {
        return null
    }

    if (!product.subcategories) return null
    const subcategory = product.subcategories[0]

    if (!subcategory) return null
    const category = subcategory.category

    if (!category) return null
    const calculator = category.calculator

    if (!calculator) return null

    return calculator
}
