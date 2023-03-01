import Link from 'next/link'
import React from 'react'
import { Img } from 'src/components/img'
import { concatClass } from 'utils/concatClass'
import styles from './Common.module.scss'

interface IconLinkProps {
    imageSrc: string
    text: string
    href: string
    className?: string
}

export const IconLink: React.FC<IconLinkProps> = ({
    imageSrc,
    text,
    href,
    className,
}) => {
    return (
        <Link href={href} className={concatClass([styles.iconLink, className])}>
            <Img src={imageSrc} alt={text} />
            <strong>{text}</strong>
        </Link>
    )
}
