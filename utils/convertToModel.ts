import { API_URL } from 'src/http'

export const convertToModel = <T>(item: any) => {
    const newItem = getLevelObject(item)

    return newItem as T
}

const getLevelObject = (item: any) => {
    if (item === null) return null

    const created: any = { id: item?.id }

    if (item?.attributes)
        Object.keys(item.attributes).forEach((key) => {
            const value = item.attributes[key]

            if (key === 'name' || key === 'title') {
                let href =
                    value?.toString()?.toLowerCase()?.replaceAll(' ', '_') ||
                    null
                if (href) href = encodeURI(href)
                created.href = href
            }

            if (typeof value === 'object') {
                if (value?.data !== undefined) {
                    if (Array.isArray(value.data))
                        return (created[key] = value.data.map((item: any) =>
                            getLevelObject(item),
                        ))

                    return (created[key] = getLevelObject(value.data))
                }
            }

            if (key.includes('url')) return (created[key] = API_URL + value)

            created[key] = value
        })

    return created
}
