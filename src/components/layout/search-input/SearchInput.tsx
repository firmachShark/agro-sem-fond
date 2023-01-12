import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import React from 'react'
import styles from './SearchInput.module.scss'
import { useAppSelector, useDispatchCreator } from 'src/hooks/useStore'
import { setSearch } from 'src/store/slices/app.slice'
import { useRouter } from 'next/router'

interface SearchInputProps extends React.HTMLProps<HTMLInputElement> {}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
    const router = useRouter()
    const search = useAppSelector((state) => state.app.search)
    const { dispatchSetSearch } = useDispatchCreator({ setSearch })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatchSetSearch(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleClick(e)
    }

    const handleClick = (e: React.FormEvent) => {
        e.stopPropagation()
        e.preventDefault()

        if (!search) return

        router.push(`/search?search=${search}`)
        dispatchSetSearch('')
    }

    return (
        <div className={styles.search}>
            <Input
                placeholder="Название или артикул"
                {...props}
                value={search}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={handleClick} className={styles.button}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
        </div>
    )
}
