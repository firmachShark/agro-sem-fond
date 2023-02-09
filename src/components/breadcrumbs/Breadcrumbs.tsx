import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { parseURL } from 'utils/parseURL'
import { Container } from '../layout/container'

const defaultReplace: Record<string, string> = {
    catalog: 'Каталог',
    search: 'Поиск',
    cart: 'Корзина',
    delivery: 'Доставка',
    payment: 'Оплата',
    about: 'О нас',
    stock: 'Акции',
    blog: 'Блог',
    faq: 'Задать вопрос',
    galery: 'Галерея',
    garanty: 'Гарантия',
    viewed: 'Раннее вы смотрели',
}

interface BreadcrumbLink {
    href: string
    name: string
}

interface BreadcrumbsProps {
    replace?: Record<string, string>
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ replace }) => {
    const [state, setState] = useState<
        [BreadcrumbLink[], BreadcrumbLink | undefined]
    >([[], undefined])
    const [links, last] = state

    useEffect(() => {
        let prev = '/'
        const links: BreadcrumbLink[] = decodeURI(window.location.pathname)
            .split('/')
            .slice(1)
            .map((link) => {
                const href = prev + link + '/'
                prev = href

                const inReplace = !!(replace && replace[link] !== undefined)
                const inDefaultReplace = !!(defaultReplace[link] !== undefined)
                const name = inReplace
                    ? replace[link]
                    : inDefaultReplace
                    ? defaultReplace[link]
                    : parseURL(link)

                return {
                    href,
                    name,
                }
            })

        const last = links.pop()

        setState([links, last])
    }, [replace])

    return (
        <Container>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href={'/'}>Главная</Link>
                    </li>
                    {links.map((link) => (
                        <li key={link.href} className="breadcrumb-item">
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    ))}
                    {last && (
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        >
                            {last.name}
                        </li>
                    )}
                </ol>
            </nav>
        </Container>
    )
}
