import React from 'react'
import Head from 'next/head'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import styles from './Delivery.module.scss'
import { Container } from 'src/components/layout/container'

const Delivery = () => {
    return (
        <>
            <Head>
                <title>Доставка</title>
            </Head>
            <Breadcrumbs />
            <section className={styles.delivery}>
                <Container>
                    <ul className={styles.list}>
                        <li>
                            Расходы по пересылке включены в стоимость товара.
                        </li>
                        <li>
                            На некоторые товары расходы не включены в стоимость
                            товара и оплачиваются отдельно.
                        </li>
                        <li>
                            Доставка осуществляется по всей территории
                            Республики Беларусь.
                        </li>
                    </ul>
                    <div className={styles.attention}>
                        <h3>
                            Внимание! На теплицы, беседки и мотоблоки доставка
                            БЕСПЛАТНО!
                        </h3>
                        <h5>
                            *Акция действует только в этом сезоне на заказы
                            ТЕПЛИЦ, БЕСЕДОК и МОТОБЛШОКОВ.
                        </h5>
                        <ul>
                            <li>
                                Доставка Теплиц, Мотоблоков и Беседок Бесплатно.
                            </li>
                            <li>
                                Доставка Поликарбоната и фурнитуры
                                платная(уточняйте у менеджера)
                            </li>
                            <li>
                                Про доставку остальных категорий уточняйте у
                                менеджера.
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Delivery
