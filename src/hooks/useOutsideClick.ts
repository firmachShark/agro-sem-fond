import { RefObject, useEffect } from 'react'
import { useLatest } from './useLatest'

export function useOutsideClick(
    elementRef: RefObject<HTMLElement>,
    handler: (e: React.MouseEvent) => void,
    attached = true,
    delay = 0,
) {
    const latestHandler = useLatest(handler)

    useEffect(() => {
        if (!attached) return

        const handleClick = (e: any) => {
            if (!elementRef?.current) return

            if (!elementRef?.current.contains(e.target)) {
                latestHandler.current(e)
            }
        }

        const timeout = setTimeout(() => {
            document.addEventListener('click', handleClick)
        }, delay)

        return () => {
            clearTimeout(timeout)
            document.removeEventListener('click', handleClick)
        }
    }, [elementRef, latestHandler, attached, delay])
}
