import { Container } from 'src/components/layout/container'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from './BottomMenu.module.scss'
import { concatClass } from 'utils/concatClass'

export interface Link {
    name: string
    href: string
    imageUrl?: string
}

export interface SubMenuProps {
    title: string
    href: string
    imageUrl?: string
    withPreviewImage?: boolean
    links: Link[]
    anchor: number | null
    onClose: () => void
}

export const SubMenu: React.FC<SubMenuProps> = (props) => {
    const {
        title,
        anchor,
        links,
        href,
        imageUrl,
        withPreviewImage = true,
        onClose,
    } = props

    useEffect(() => {
        if (anchor) window.addEventListener('scroll', onClose)
        return () => {
            window.removeEventListener('scroll', onClose)
        }
    }, [anchor, onClose])

    return anchor ? (
        <div className={styles.submenu} style={{ top: anchor }}>
            <Container>
                <Link
                    href={href}
                    className={styles.submenuTitle}
                    onClick={onClose}
                >
                    {title}
                </Link>
                <div
                    className={concatClass([
                        styles.submenuInner,
                        !withPreviewImage ? styles.withoutImage : undefined,
                    ])}
                >
                    <ul>
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className="beauty-underline"
                                >
                                    {link.imageUrl && (
                                        <Image
                                            placeholder="empty"
                                            width={500}
                                            height={500}
                                            src={link.imageUrl}
                                            alt={link.name}
                                        />
                                    )}
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {imageUrl && withPreviewImage && (
                        <div className={styles.previewImage}>
                            <Image
                                placeholder="empty"
                                width={500}
                                height={500}
                                src={imageUrl}
                                alt={title}
                            />
                        </div>
                    )}
                </div>
            </Container>
        </div>
    ) : null
}
