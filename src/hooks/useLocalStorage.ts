import { useEffect, useState } from 'react'
import { localStorageWrapper } from 'utils/storage'

export const useLocalStorage = <T>(key: string) => {
    const [value, setValue] = useState<T | null>(null)

    useEffect(() => {
        const unsubscribe = localStorageWrapper.subscribe(key, (value) => {
            setValue(value as T)
        })

        localStorageWrapper.pushSubscribers(key)

        return () => {
            unsubscribe()
        }
    }, [key])

    return value
}
