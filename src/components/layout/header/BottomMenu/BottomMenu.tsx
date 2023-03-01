import React, { useMemo } from 'react'
import { Container } from 'src/components/layout/container'

import styles from './BottomMenu.module.scss'
import { MenuItem, MenuItemProps } from './MenuItem'
import Link from 'next/link'
import {
    DeliveryIcon,
    HowToIcon,
    MinOrderIcon,
    RubleIcon,
    StockIcon,
} from 'src/image_export/header'
import useSWR from 'swr'
import categoryService from 'src/services/category-service'
import ROUTES from 'src/constants/routes'
import { SITE_NAME } from 'src/constants/info'
import { Img } from 'src/components/img'

interface BottomMenuProps {
    navRef: React.Ref<HTMLDivElement>
}

export const BottomMenu: React.FC<BottomMenuProps> = ({ navRef }) => {
    const { data: links } = useSWR<MenuItemProps[]>(
        '/api/header',
        categoryService.getForHeader,
    )

    const slicedLinks = useMemo(() => {
        if (!links) return null

        return links.slice(0, 5)
    }, [links])

    const catalogSubMenu: MenuItemProps['submenu'] | undefined = useMemo(() => {
        if (!links) return undefined

        return {
            title: `Каталог ${SITE_NAME}`,
            links: links.map((link) => ({
                name: (
                    <>
                        <b>{link.title}</b>
                        {link.submenu && link.title !== link.submenu.title && (
                            <>
                                <br />
                                <span>{link.submenu.title}</span>
                            </>
                        )}
                    </>
                ),
                href: link.href,
                imageUrl: link.imageUrl,
            })),
        }
    }, [links])

    return (
        <>
            <nav ref={navRef} className={styles.nav}>
                <Container>
                    <ul className={styles.navLinks}>
                        <MenuItem
                            withPreviewImage={false}
                            href={ROUTES.catalog}
                            title={'Каталог'}
                            submenu={catalogSubMenu}
                        />
                        {slicedLinks &&
                            slicedLinks.map((link, i) => (
                                <MenuItem
                                    key={i}
                                    href={link.href}
                                    title={link.title}
                                    submenu={link.submenu}
                                    imageUrl={link.imageUrl}
                                />
                            ))}
                    </ul>
                </Container>
            </nav>
            <div className={styles.menu}>
                <Container className="container px-sm-2 px-0">
                    <ul className={styles.menuLinks}>
                        <li>
                            <Link href={`${ROUTES.stock + '?modal=delivery'}`}>
                                <Img src={DeliveryIcon} alt="delivery" />
                                Доставка: Бесплатно
                            </Link>
                        </li>
                        <li className="d-md-block d-none">
                            <p>
                                <Img src={MinOrderIcon} alt="minimal order" />
                                Мин. Заказ 150 руб.
                            </p>
                        </li>
                        <li className="d-lg-block d-none">
                            <Link href={ROUTES.faq}>
                                <Img src={HowToIcon} alt="how to make order" />
                                Как сделать заказ?
                            </Link>
                        </li>
                        <li className="d-md-block d-none">
                            <p>
                                <Img src={RubleIcon} alt="ruble" />
                                Оплата по факту
                            </p>
                        </li>
                        <li>
                            <Link href={ROUTES.stock}>
                                <Img src={StockIcon} alt="stock" />
                                Акции
                            </Link>
                        </li>
                    </ul>
                </Container>
            </div>
        </>
    )
}
