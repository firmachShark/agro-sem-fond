import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useMemo } from 'react'
import { Pagination as BPagination } from 'react-bootstrap'

interface PaginationProps {
    page: number
    total: number
}

export const Pagination: React.FC<PaginationProps> = ({ page, total }) => {
    const router = useRouter()

    const search = useMemo(() => {
        return Object.keys(router.query)
            .map((key) => `${key}=${router.query[key]}`)
            .join('&')
    }, [router.query])

    const getURL = useCallback(
        (page: number) => {
            const searchParams = new URLSearchParams(search)

            page !== 1
                ? searchParams.set('page', page.toString())
                : searchParams.delete('page')

            const newSearch = decodeURI(searchParams.toString())

            return (newSearch.length ? '?' : '') + newSearch
        },
        [search],
    )

    const isPrevDisabled = page <= 1
    const isNextDisabled = page >= total

    const handleClick =
        (value: number) => (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            router.push(getURL(value))
        }

    if (total < 2) return null

    return (
        <BPagination>
            <BPagination.First
                disabled={isPrevDisabled}
                onClick={handleClick(1)}
                as={Link}
                href={getURL(1)}
            >
                <i className="fa fa-chevron-left" aria-hidden="true" />
                <i className="fa fa-chevron-left" aria-hidden="true" />
            </BPagination.First>
            <BPagination.Prev
                disabled={isPrevDisabled}
                onClick={handleClick(page - 1)}
                as={Link}
                href={getURL(page - 1)}
            >
                <i className="fa fa-chevron-left" aria-hidden="true" />
            </BPagination.Prev>
            {Object.keys(Array.from(Array(total))).map((_, n) => {
                return (
                    <BPagination.Item
                        onClick={handleClick(n + 1)}
                        key={n}
                        active={n + 1 === page}
                        as={Link}
                        href={getURL(n + 1)}
                    >
                        {n + 1}
                    </BPagination.Item>
                )
            })}
            <BPagination.Next
                disabled={isNextDisabled}
                onClick={handleClick(page + 1)}
                as={Link}
                href={getURL(page + 1)}
            >
                <i className="fa fa-chevron-right" aria-hidden="true" />
            </BPagination.Next>
            <BPagination.Last
                disabled={isNextDisabled}
                onClick={handleClick(total)}
                as={Link}
                href={getURL(total)}
            >
                <i className="fa fa-chevron-right" aria-hidden="true" />
                <i className="fa fa-chevron-right" aria-hidden="true" />
            </BPagination.Last>
        </BPagination>
    )
}
