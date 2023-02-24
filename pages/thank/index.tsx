import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Container } from 'src/components/layout/container'
import styles from './Thank.module.scss'

const ThankPage = () => {
    return (
        <>
            <Head>
                <title>Спасибо за заявку!</title>
            </Head>
            <Container>
                <div className={styles.page}>
                    <h5>Спасибо за оставленную заявку!</h5>
                    <h6>Наш менеджер с Вами свяжется в ближайшее время.</h6>
                    <Link href="/">На главную</Link>
                </div>
            </Container>
        </>
    )
}

export default ThankPage
