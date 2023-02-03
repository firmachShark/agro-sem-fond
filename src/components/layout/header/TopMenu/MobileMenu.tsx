import { Button } from 'src/components/button'
import { MAIL, MAIL_ATTR } from 'src/constants/info'
import useMediaQuery from 'src/hooks/useMediaQuery'
import {
    CatalogIcon,
    MailIcon,
    StatusIcon,
    ViewedIcon,
} from 'src/image_export/header'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { concatClass } from 'utils/concatClass'
import { IconLink, Phone } from '../Common'
import styles from './MobileMenu.module.scss'

export const links = [
    {
        href: '/',
        name: 'Главная',
    },
    {
        href: '/delivery',
        name: 'Доставка',
    },
    {
        href: '/payment',
        name: 'Оплата',
    },
    {
        href: '/about',
        name: 'О нас',
    },
    {
        href: '/stock',
        name: 'Бонусы',
    },
    {
        href: '/faq',
        name: 'Вопрос агроному',
    },
    {
        href: '/galery',
        name: 'Фотогалерея',
    },
    {
        href: '/garanty',
        name: 'Гарантия',
    },
]

const isActive = (current: string, href: string) => {
    if (href === '/' && href === current) return true

    return current.includes(href) && href !== '/'
}

const Links = () => {
    const { pathname } = useRouter()

    return (
        <>
            {links.map((link) => (
                <li key={link.href}>
                    <Link
                        className={
                            isActive(pathname, link.href)
                                ? styles.active
                                : undefined
                        }
                        href={link.href}
                    >
                        {link.name}
                    </Link>
                </li>
            ))}
        </>
    )
}

interface MobileMenuProps {
    parentRef: React.RefObject<HTMLDivElement>
}

const MobileMenu: React.FC<MobileMenuProps> = ({ parentRef }) => {
    const isMD = useMediaQuery('(max-width: 767px)')
    const [isOpen, setOpen] = useState(false)

    const listRef = useRef<HTMLLIElement>(null)

    const iconClass = useMemo(() => (isOpen ? 'fa-times' : 'fa-bars'), [isOpen])

    const handleToggle = () => setOpen((prev) => !prev)

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if (isOpen && isMD) {
            const target = e.target as any
            if (target.closest('li')) handleToggle()
        }
    }

    return (
        <>
            <Button className={styles.openBtn} onClick={handleToggle}>
                <i
                    className={concatClass(['fa', iconClass])}
                    aria-hidden="true"
                />
            </Button>
            <ul
                onClick={handleClick}
                className={concatClass([
                    styles.links,
                    isOpen ? styles.active : undefined,
                ])}
            >
                <Button
                    className={concatClass([
                        styles.openBtn,
                        'ms-auto me-2',
                        'd-md-none d-block',
                    ])}
                    onClick={handleToggle}
                >
                    <i
                        className={concatClass(['fa', iconClass])}
                        aria-hidden="true"
                    />
                </Button>
                <li className="d-md-none d-block">
                    <Phone />
                </li>
                <li className="d-md-none d-block">
                    <IconLink
                        text={MAIL}
                        imageSrc={MailIcon}
                        href={MAIL_ATTR}
                    />
                </li>
                <li className="d-md-none d-block">
                    <IconLink
                        text="Заказ по каталогу"
                        imageSrc={CatalogIcon}
                        href="/catalog"
                    />
                </li>
                <li className="d-md-none d-block">
                    <IconLink
                        text="Вы смотрели"
                        imageSrc={ViewedIcon}
                        href="/viewed"
                    />
                </li>
                <Links />
                <li ref={listRef} className="d-md-none d-block"></li>
            </ul>
            {!!listRef.current &&
                !!parentRef.current &&
                createPortal(
                    <Button
                        className={concatClass([
                            styles.status,
                            'd-lg-block d-md-none',
                        ])}
                        isLink={{ href: '/faq' }}
                    >
                        <Image src={StatusIcon} alt="status" />
                        Что с моим заказом
                    </Button>,
                    isMD ? listRef.current : parentRef.current,
                )}
        </>
    )
}

export default MobileMenu
