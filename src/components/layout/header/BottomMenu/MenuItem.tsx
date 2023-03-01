import Link from 'next/link'
import React, { useCallback, useRef, useState } from 'react'
import { Link as LinkProps, SubMenu } from './SubMenu'

export interface MenuItemProps {
    href: string
    title: string
    withPreviewImage?: boolean
    imageUrl?: string
    submenu?: {
        title: string
        links: LinkProps[]
    }
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
    const { title, href, submenu, imageUrl, withPreviewImage = true } = props
    const [anchor, setAnchor] = useState<number | null>(null)
    const ref = useRef<HTMLAnchorElement>(null)

    const handleMouseEnter = () => {
        if (!submenu) return
        if (ref.current) {
            const { y, height } = ref.current.getBoundingClientRect()
            setAnchor(y + height)
        }
    }

    const handleMouseLeave = useCallback(() => {
        if (!submenu) return
        setAnchor(null)
    }, [setAnchor, submenu])

    const handleClick = () => {
        setAnchor(null)
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link ref={ref} href={href} onClick={handleClick}>
                {title}
                {submenu && (
                    <>
                        {' '}
                        <i
                            className="fa fa-chevron-down"
                            aria-hidden="true"
                        ></i>
                    </>
                )}
            </Link>
            {submenu && (
                <SubMenu
                    withPreviewImage={withPreviewImage}
                    imageUrl={imageUrl}
                    href={href}
                    title={submenu.title}
                    links={submenu.links}
                    anchor={anchor}
                    onClose={handleMouseLeave}
                />
            )}
        </li>
    )
}
