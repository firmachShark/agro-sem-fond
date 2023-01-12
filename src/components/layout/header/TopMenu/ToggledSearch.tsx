import { Button } from 'src/components/button'
import React, { useState } from 'react'
import searchStyles from 'src/components/layout/search-input/SearchInput.module.scss'
import styles from './TopMenu.module.scss'
import { SearchInput } from 'src/components/layout/search-input'

export const ToggledSearch = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => setIsOpen((prev) => !prev)

    return (
        <div className="d-md-none d-flex align-items-center">
            <Button className={searchStyles.button} onClick={handleToggle}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
            {isOpen && (
                <div className={styles.search}>
                    <SearchInput autoFocus />
                </div>
            )}
        </div>
    )
}
