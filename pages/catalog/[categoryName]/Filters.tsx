/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react'
import { Button } from 'src/components/button'
import { SubcategoryFilters } from 'src/components/filters'
import { useSearchParams } from 'src/hooks/useSearchParams'
import { useAppSelector, useDispatchCreator } from 'src/hooks/useStore'
import { ISubcategory } from 'src/models'
import { FiltersState, setFilters } from 'src/store/slices/filters.slice'
import { concatClass } from 'utils/concatClass'
import { convertFromQuery } from 'utils/convertFromQuery'
import styles from './Category.module.scss'

interface FiltersProps {
    subcategories: ISubcategory[]
}

const getParams = (filters: FiltersState) => {
    const params: Record<string, string> = {}
    for (const key of Object.keys(filters)) {
        let value: any = filters[key as keyof FiltersState]
        const name = `filter[${key}]`
        if (Array.isArray(value)) value = JSON.stringify(value)
        else value = value.toString()

        params[name] = value
    }

    return params
}

export const Filters: React.FC<FiltersProps> = ({ subcategories }) => {
    const [isOpen, setOpen] = useState(false)
    const { dispatchSetFilters } = useDispatchCreator({ setFilters })
    const filters = useAppSelector((state) => state.filters)
    const { setParams, params } = useSearchParams(['categoryName'])

    const defaultFilters: Record<string, any> = useMemo(
        () => ({
            subcategory: subcategories.map((s) => s.id),
        }),
        [subcategories],
    )

    const hadnleConfirmFilters = () => {
        setOpen(false)
        setParams((prev) => {
            const newParams = {
                ...prev,
                ...getParams(filters),
            }

            delete newParams.page

            return newParams
        })
    }

    const handleResetFilters = () => {
        window.location.href = `${window.location.origin}${window.location.pathname}`
    }

    useEffect(() => {
        const queryFilters = Object.keys(filters).reduce(
            (result: FiltersState, key) => {
                const filter = params[`filter[${key}]`]
                const reduxKey = key as keyof FiltersState

                if (filter !== undefined) {
                    const isArray = Array.isArray(filters[reduxKey])
                    const isNumber = typeof filters[reduxKey] === 'number'

                    let value: any = filter
                    if (isArray)
                        value = convertFromQuery<number[]>(value, [])[0]
                    if (isNumber) value = Number(value)

                    result[reduxKey] = value
                } else if (defaultFilters[key]) {
                    result[reduxKey] = defaultFilters[key]
                }

                return result
            },
            {} as FiltersState,
        )

        dispatchSetFilters(queryFilters)
    }, [params, defaultFilters])

    return (
        <aside
            className={concatClass([
                styles.aside,
                isOpen ? styles.aside_open : undefined,
            ])}
        >
            <h5>
                <span>Фильтры</span>
                <Button onClick={() => setOpen((prev) => !prev)}>
                    <i
                        className={`fa fa-${isOpen ? 'minus' : 'plus'}`}
                        aria-hidden="true"
                    ></i>
                </Button>
            </h5>
            <SubcategoryFilters subcategories={subcategories} />
            <hr />
            <div className="d-flex align-items-cetner justify-content-between">
                <Button
                    onClick={hadnleConfirmFilters}
                    sizeMode="sm"
                    variant="primary"
                >
                    Применить
                </Button>
                <Button
                    onClick={handleResetFilters}
                    sizeMode="sm"
                    bg="outline-primary"
                    variant="primary"
                >
                    Сбросить
                </Button>
            </div>
        </aside>
    )
}
