import { Container } from 'src/components/layout/container'
import { IMAGE_404 } from 'src/image_export/404'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './404.module.scss'

const PageNotFound = () => {
    return (
        <>
            <Head>
                <title>Страница не найдена</title>
            </Head>
            <Container>
                <div className={styles.page}>
                    <Image src={IMAGE_404} alt="page not found" />
                    <h5>
                        Неправильно набран адрес, или такой страницы на сайте
                        больше не существует.
                    </h5>
                    <Link href="/">На главную</Link>
                </div>
            </Container>
        </>
    )
}

export default PageNotFound
