import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const usePageLoading = (pagePath: string) => {
    const router = useRouter()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const handleStart = (path: string) => {
            if (path.includes(pagePath)) setLoading(true)
        }
        const handleEnd = () => setLoading(false)
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleEnd)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleEnd)
        }
    }, [router, pagePath])

    return isLoading
}
