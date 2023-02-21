import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { parseURL } from 'utils/parseURL'
import { Container } from '../layout/container'

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
                const name = parseURL(link)

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
