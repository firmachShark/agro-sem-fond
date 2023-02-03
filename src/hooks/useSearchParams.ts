/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'

type ParamsType = Record<string, string>

type ParamsTypeAsFunction = (prev: ParamsType) => ParamsType

export const useSearchParams = (exclude?: string[]) => {
    const router = useRouter()

    const params = useMemo(() => {
        return router.query
    }, [router]) as ParamsType

    const excludeOBJ = useMemo(() => {
        return exclude?.reduce((result: ParamsType, key) => {
            result[key] = key
            return result
        }, {})
    }, [exclude])

    const setParams = useCallback(
        (newParams: ParamsType | ParamsTypeAsFunction) => {
            let _params = newParams as ParamsType
            if (typeof newParams === 'function') _params = newParams(params)

            const search = Object.keys(_params)
                .filter((key) => !(excludeOBJ && excludeOBJ[key]))
                .reduce((result, key, i, arr) => {
                    if (!arr.length) return ''

                    result += `${key}=${_params[key]}${
                        i !== arr.length - 1 ? '&' : ''
                    }`

                    return result
                }, '')

            console.log(search)

            const url = `${window.location.pathname}${
                search ? `?${search}` : ''
            }`

            router.push(url)
        },
        [params, excludeOBJ],
    )

    const setParam = useCallback(
        (name: string, value: string) => {
            const param = params[name]
            if (!value && param === undefined) return
            if (
                value ===
                (typeof param === 'string' ? param : JSON.stringify(param))
            )
                return

            setParams((prev: any) => {
                if (!value) {
                    const newParams = { ...prev }
                    delete newParams[name]
                    return newParams
                }

                return { ...prev, [name]: value }
            })
        },
        [setParams, params],
    )

    return { setParam, params, setParams }
}
