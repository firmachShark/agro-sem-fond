import { FILTERS } from 'pages/catalog/[categoryName]'
import React, { useMemo } from 'react'
import { useAppSelector, useDispatchCreator } from 'src/hooks/useStore'
import { ISubcategory } from 'src/models'
import { setFilter } from 'src/store/slices/filters.slice'
import { Checkbox } from '../checkbox'

interface SubcategoryFiltersProps {
    subcategories: ISubcategory[]
}

export const SubcategoryFilters: React.FC<SubcategoryFiltersProps> = ({
    subcategories,
}) => {
    const ids = useAppSelector((state) => state.filters.subcategory)
    const { dispatchSetFilter } = useDispatchCreator({ setFilter })

    const checked = useMemo(() => {
        const getChecked = (arr: number[]) =>
            arr.reduce((result: Record<number, boolean>, id) => {
                result[id] = true
                return result
            }, {})

        return getChecked(ids)
    }, [ids])

    const handleChange =
        (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
            const _ids = e.target.checked
                ? [...ids, id]
                : ids.filter((_id) => _id !== id)

            dispatchSetFilter({ name: 'subcategory', value: _ids })
        }

    if (!subcategories.length) return null

    return (
        <>
            <h5>Подкатегории</h5>
            {subcategories.map(({ id, name }) => {
                return (
                    <Checkbox
                        name={FILTERS.SUBCATEGORY}
                        key={id}
                        value={id}
                        checked={!!checked[id]}
                        onChange={handleChange(id)}
                    >
                        {name}
                    </Checkbox>
                )
            })}
        </>
    )
}
