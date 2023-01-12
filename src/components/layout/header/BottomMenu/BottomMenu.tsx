import React from 'react'
import { Container } from 'src/components/layout/container'

import styles from './BottomMenu.module.scss'
import { MenuItem, MenuItemProps } from './MenuItem'
import Link from 'next/link'
import Image from 'next/image'
import {
    DeliveryIcon,
    HowToIcon,
    MinOrderIcon,
    RubleIcon,
    StockIcon,
} from 'src/image_export/header'
import useSWR from 'swr'
import categoryService from 'src/services/category-service'

interface BottomMenuProps {
    navRef: React.Ref<HTMLDivElement>
}

export const BottomMenu: React.FC<BottomMenuProps> = ({ navRef }) => {
    const { data: links } = useSWR<MenuItemProps[]>(
        '/api/header',
        categoryService.getForHeader,
    )

    return (
        <>
            <nav ref={navRef} className={styles.nav}>
                <Container>
                    <ul className={styles.navLinks}>
                        {links ? (
                            <>
                                <MenuItem href={'/catalog'} title={'Каталог'} />
                                {links.map((link, i) => (
                                    <MenuItem
                                        key={i}
                                        href={link.href}
                                        title={link.title}
                                        submenu={link.submenu}
                                        imageUrl={link.imageUrl}
                                    />
                                ))}
                            </>
                        ) : (
                            <MenuItem href="/" title="Загрузка..." />
                        )}
                    </ul>
                </Container>
            </nav>
            <div className={styles.menu}>
                <Container className="container px-sm-2 px-0">
                    <ul className={styles.menuLinks}>
                        <li>
                            <Link href="/delivery">
                                <Image src={DeliveryIcon} alt="delivery" />
                                Доставка: Бесплатно
                            </Link>
                        </li>
                        <li className="d-md-block d-none">
                            <Link href="/">
                                <Image src={MinOrderIcon} alt="minimal order" />
                                Мин. Заказ 150 руб.
                            </Link>
                        </li>
                        <li className="d-lg-block d-none">
                            <Link href="/">
                                <Image
                                    src={HowToIcon}
                                    alt="how to make order"
                                />
                                Как сделать заказ?
                            </Link>
                        </li>
                        <li className="d-md-block d-none">
                            <p>
                                <Image src={RubleIcon} alt="ruble" />
                                Оплата по факту
                            </p>
                        </li>
                        <li>
                            <Link href="/">
                                <Image src={StockIcon} alt="stock" />
                                Акции
                            </Link>
                        </li>
                    </ul>
                </Container>
            </div>
        </>
    )
}
