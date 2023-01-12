import React from 'react'
import { concatClass } from 'utils/concatClass'

import styles from './Loader.module.scss'

interface LoaderProps {
    withoutOverlay?: boolean
}

export const Loader: React.FC<LoaderProps> = ({ withoutOverlay }) => {
    return (
        <div
            className={concatClass([
                styles.loading,
                withoutOverlay ? undefined : styles.overlay,
            ])}
        >
            <i className="fa fa-repeat" aria-hidden="true"></i>
        </div>
    )
}
