import { MenuItemProps } from 'src/components/layout/header/BottomMenu/MenuItem'
import qs from 'qs'
import { getModels } from 'src/http'
import { ICategory } from 'src/models/ICatergory'
import { ISubcategory } from 'src/models'
import ROUTES from 'src/constants/routes'

export class CategoryService {
    async getForHeader(): Promise<MenuItemProps[]> {
        const query = qs.stringify(
            {
                populate: {
                    preview: {
                        fields: ['url'],
                    },
                    subcategories: {
                        populate: {
                            preview: {
                                fields: ['url'],
                            },
                        },
                    },
                },
                pagination: {
                    limit: 5,
                },
            },
            {
                encodeValuesOnly: true,
            },
        )

        const categories = await getModels<ICategory>(`categories?${query}`)

        return categories.reduce((result: MenuItemProps[], category) => {
            const href = `${ROUTES.catalog}/${category.href}`

            const submenu: any = category.subcategories?.length
                ? {
                      title: category.fullName,
                      href,
                      links: category.subcategories.map((subcategory) => ({
                          name: subcategory.name,
                          href:
                              href + `?filter[subcategory]=[${subcategory.id}]`,
                          imageUrl: subcategory.preview?.url,
                      })),
                  }
                : undefined

            result.push({
                title: category.name,
                href,
                imageUrl: category.preview?.url,
                submenu,
            })

            return result
        }, [])
    }

    async getAll(_qs?: object) {
        return getModels<ICategory>(
            `categories?${qs.stringify({
                populate: {
                    preview: {
                        fields: ['url'],
                    },
                },
                ...(_qs || {}),
            })}`,
        )
    }

    async getByName(name: string) {
        const categories = await getModels<ICategory>(
            `categories?${qs.stringify({
                populate: {
                    preview: {
                        fields: ['url'],
                    },
                    subcategories: {
                        populate: {
                            preview: {
                                fields: ['url'],
                            },
                        },
                    },
                },
                filters: {
                    name: {
                        $eqi: name,
                    },
                },
            })}`,
        )

        if (categories.length) return categories[0]

        return null
    }

    async getSubcategoriesByCategoryName(name: string) {
        return getModels<ISubcategory>(
            `subcategories?${qs.stringify({
                populate: {
                    preview: {
                        fields: ['url'],
                    },
                    category: {
                        filters: {
                            name: {
                                $eqi: name,
                            },
                        },
                    },
                },
            })}`,
        )
    }

    async getAllSubcategories(_qs?: object) {
        return getModels<ISubcategory>(
            `subcategories?${qs.stringify({
                populate: {
                    preview: {
                        fields: ['url'],
                    },
                },
                ...(_qs || {}),
            })}`,
        )
    }
}

export default new CategoryService()
