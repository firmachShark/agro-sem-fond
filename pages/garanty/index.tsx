import Head from 'next/head'
import React from 'react'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Container } from 'src/components/layout/container'
import styles from './GarantyPage.module.scss'

const GarantyPage = () => {
    return (
        <>
            <Head>
                <title>Гарантия</title>
            </Head>
            <Breadcrumbs />
            <section className={styles.garanty}>
                <Container>
                    <h1>Гарантии качества продукции</h1>
                    <div className={styles.attention}>
                        <p>УВАЖАЕМЫЕ ПОКУПАТЕЛИ!</p>
                        <br />
                        <p>
                            Мы заботимся о репутации нашего интернет-магазина,
                            поэтому Вы можете быть уверены, в качестве
                            предлагаемой продукции. Мы приложим все усилия,
                            чтобы Вы получили товар надлежащего качества и в
                            минимальные сроки.
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default GarantyPage
