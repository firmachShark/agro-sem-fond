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
                            Расходы по пересылке НЕ включены в стоимость товара
                            и оплачиваются отдельно при получении посылки.
                        </li>
                        <li>
                            ДОСТАВКА ЗАКАЗОВ осуществляется той службой, которую
                            Вы выбрали при оформлении. Для Вас будет подобран
                            наиболее выгодный по стоимости тариф.
                        </li>
                        <li>
                            Мы не закладывает в стоимость доставки свои расходы
                            по отправке заказов, не получаем прибыли от
                            предоставления данных услуг.
                        </li>
                        <li>
                            После отправки заказа вам приходит СООБЩЕНИЕ на
                            Viber, VK или СМС с уникальным номером отправления.
                            По нему вы можете отследить свою посылку на сайте
                            Почты РФ:{' '}
                            <a
                                href="https://www.pochta.ru/tracking"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://www.pochta.ru/tracking
                            </a>
                            , на сайте ТК Сдэк:{' '}
                            <a
                                href="https://www.cdek.ru/ru/tracking"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://www.cdek.ru/ru/tracking
                            </a>
                            , на сайте boxberry:{' '}
                            <a
                                href="https://boxberry.ru/tracking-page"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://boxberry.ru/tracking-page
                            </a>
                        </li>
                    </ul>
                    <div className={styles.attention}>
                        <h3>
                            Внимание! Специальное предложение по льготной
                            доставке СЕМЯН!
                        </h3>
                        <h5>
                            *Акция действует только в этом сезоне на заказы
                            СЕМЯН и ТОВАРОВ для САДА и ОГОРОДА.
                        </h5>
                        <ul>
                            <li>
                                Доставка заказов БЕСПЛАТНО от 6500 руб. (с
                                учетом скидок)
                            </li>
                            <li>
                                Льготная доставка 99 руб. при заказе от
                                3500-6500 руб. (с учетом скидок)
                            </li>
                            <li>
                                Льготная доставка 199 руб. при заказе от
                                1990-3500 руб. (с учетом скидок)
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Delivery
