import React, { useEffect, useState } from 'react'
import { Pagination as BPagination } from 'react-bootstrap'

interface PaginationProps {
    page: number
    onChange: (next: number) => void
    total: number
}

export const Pagination: React.FC<PaginationProps> = ({
    page,
    onChange,
    total,
}) => {
    const [current, setCurrent] = useState(page)

    const isPrevDisabled = current <= 1
    const isNextDisabled = current >= total

    const handleClickPrev = () => setCurrent((prev) => prev - 1)
    const handleClickNext = () => setCurrent((prev) => prev + 1)
    const handleClickFirst = () => setCurrent(1)
    const handleClickLast = () => setCurrent(total)
    const handleClick = (value: number) => () =>
        value !== current && setCurrent(value)

    useEffect(() => {
        if (current !== page) onChange(current)
    }, [current, onChange, page])

    if (total < 2) return null

    return (
        <BPagination>
            <BPagination.First
                disabled={isPrevDisabled}
                onClick={handleClickFirst}
            >
                <i className="fa fa-chevron-left" aria-hidden="true" />
                <i className="fa fa-chevron-left" aria-hidden="true" />
            </BPagination.First>
            <BPagination.Prev
                disabled={isPrevDisabled}
                onClick={handleClickPrev}
            >
                <i className="fa fa-chevron-left" aria-hidden="true" />
            </BPagination.Prev>
            {Object.keys(Array.from(Array(total))).map((_, n) => {
                return (
                    <BPagination.Item
                        onClick={handleClick(n + 1)}
                        key={n}
                        active={n + 1 === current}
                    >
                        {n + 1}
                    </BPagination.Item>
                )
            })}
            <BPagination.Next
                disabled={isNextDisabled}
                onClick={handleClickNext}
            >
                <i className="fa fa-chevron-right" aria-hidden="true" />
            </BPagination.Next>
            <BPagination.Last
                disabled={isNextDisabled}
                onClick={handleClickLast}
            >
                <i className="fa fa-chevron-right" aria-hidden="true" />
                <i className="fa fa-chevron-right" aria-hidden="true" />
            </BPagination.Last>
        </BPagination>
    )
}
