import axios, { AxiosRequestConfig } from 'axios'
import { convertToModel } from 'utils/convertToModel'

export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const $api = axios.create({
    baseURL: API_URL + '/api/',
})

export const getModels = async <Model>(
    url: string,
    config?: AxiosRequestConfig,
) => {
    try {
        const response = await $api.get<{ data: any[] }>(url, config)

        return response.data.data.map((item: any) =>
            convertToModel<Model>(item),
        )
    } catch (e) {
        console.log(e)
        return []
    }
}

export const getPaginatedModels = async <Model>(
    url: string,
    config?: AxiosRequestConfig,
) => {
    try {
        const response = await $api.get<{
            data: any[]
            meta: {
                pagination: {
                    page: number
                    pageSize: number
                    pageCount: number
                    total: number
                }
            }
        }>(url, config)

        return {
            items: response.data.data.map((item: any) =>
                convertToModel<Model>(item),
            ),
            pagination: response.data.meta.pagination,
        }
    } catch (e) {
        console.log(e)
        return {
            items: [],
            pagination: {
                page: 1,
                pageSize: 25,
                pageCount: 1,
                total: 1,
            },
        }
    }
}

export const getModel = async <Model>(
    url: string,
    config?: AxiosRequestConfig,
) => {
    const response = await $api.get<{ data: any }>(url, config)

    return convertToModel<Model>(response.data.data)
}
