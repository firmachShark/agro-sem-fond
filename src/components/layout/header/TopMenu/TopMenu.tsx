import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { Container } from 'src/components/layout/container'
import { LogoSmall } from 'src/image_export/header'

import styles from './TopMenu.module.scss'
import { Cart } from '../Common'
import MobileMenu from './MobileMenu'
import { ToggledSearch } from './ToggledSearch'
import ROUTES from 'src/constants/routes'

export const TopMenu = () => {
    const divRef = useRef<HTMLDivElement>(null)

    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.inner} ref={divRef}>
                    <Link href="/" className={styles.logo}>
                        <Image alt="logo" src={LogoSmall} />
                    </Link>

                    <Link className={styles.catalogLink} href={ROUTES.catalog}>
                        Каталог
                    </Link>

                    <ToggledSearch />

                    <Cart className={styles.cart} />

                    <MobileMenu parentRef={divRef} />
                </div>
            </Container>
        </div>
    )
}
