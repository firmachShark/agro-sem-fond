import React, { useEffect, useRef, useState } from 'react'
import { TopMenu, BottomMenu } from './'
import styles from './Header.module.scss'
import { Container } from '../container'

import { SearchInput } from 'src/components/layout/search-input'
import { MAIL_ATTR, MAIL } from 'src/constants/info'
import {
    Logo,
    MailIcon,
    CatalogIcon,
    ViewedIcon,
} from 'src/image_export/header'
import { useRouter } from 'next/router'
import { Phone, IconLink, Cart } from './Common'
import { LogoWord } from 'src/components/logo-word/LogoWord'
import ROUTES from 'src/constants/routes'
import { Img } from 'src/components/img'

export const Header = () => {
    const router = useRouter()
    const [isFixed, setFixed] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    const handleClickLogo = () => router.push('/')

    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setFixed(!entry.isIntersecting)
                })
            },
            { threshold: 0 },
        )

        observer.observe(ref.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <header className={styles.header}>
            <TopMenu />

            {isFixed && (
                <div className={styles.fixed}>
                    <Container>
                        <div className={styles.fixedInner}>
                            <div
                                onClick={handleClickLogo}
                                className={styles.fixedLogo}
                            >
                                <LogoWord />
                            </div>
                            <div className={styles.fixedSearch}>
                                <SearchInput />
                            </div>
                            <Phone onlyNumber />
                            <Cart className={'d-lg-flex d-none'} />
                        </div>
                    </Container>
                </div>
            )}

            <Container>
                <div className={styles.inner}>
                    <div onClick={handleClickLogo} className={styles.logo}>
                        <Img
                            priority
                            src={Logo}
                            width={Logo.width}
                            height={Logo.height}
                            alt="Logo"
                        />
                    </div>
                    <div className={styles.search}>
                        <p className="d-lg-block d-none">
                            Теплицы, беседки и бензоинструмент от производителя{' '}
                            <span className="d-xl-inline-block d-none">
                                – 100% гарантия вашего урожая!
                            </span>
                        </p>
                        <SearchInput />
                    </div>
                    <div className={styles.info}>
                        <Phone />
                        <p className="d-lg-block d-none">
                            Время работы: <b>Пн-Пт: 8:30-17:00</b>
                        </p>
                        <Cart />
                        <IconLink
                            text={MAIL}
                            imageSrc={MailIcon}
                            href={MAIL_ATTR}
                            className="d-lg-block d-none"
                        />
                        <IconLink
                            text="Заказ по каталогу"
                            imageSrc={CatalogIcon}
                            href={ROUTES.catalog}
                            className="d-lg-block d-none"
                        />
                        <IconLink
                            text="Вы смотрели"
                            imageSrc={ViewedIcon}
                            href={ROUTES.viewed}
                            className="d-lg-block d-none"
                        />
                    </div>
                </div>
            </Container>

            <BottomMenu navRef={ref} />
        </header>
    )
}
