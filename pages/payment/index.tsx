import Head from 'next/head'
import { StaticImageData } from 'next/image'
import React from 'react'
import { BankDetails } from 'src/components/bank-details'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Img } from 'src/components/img'
import { Container } from 'src/components/layout/container'
import {
    PaymentBank,
    PaymentCard,
    PaymentNalPay,
} from 'src/image_export/payment'
import styles from './Payment.module.scss'

type Way = {
    img: StaticImageData
    title: string
    text: string
    info?: string
    action?: JSX.Element
}

const ways: Way[] = [
    {
        img: PaymentBank,
        title: 'ЕРИП',
        text: 'Вы можете оплатить счет в системе ЕРИП.',
    },
    {
        img: PaymentCard,
        title: 'Оплата картами Visa, Mastercard, МИР',
        text: 'Оплата банковской картой курьеру при получении заказа.',
    },
    {
        img: PaymentNalPay,
        title: 'Наложенный платеж',
        text: 'Мы высылаем Вам товар, и при получении посылки на почте, Вы оплачиваете стоимость товара и почтовые услуги.',
    },
]

const Payment = () => {
    return (
        <>
            <Head>
                <title>Оплата - информация о способах оплаты</title>
            </Head>
            <Breadcrumbs />
            <div className={styles.payment}>
                <section>
                    <Container>
                        <BankDetails />
                    </Container>
                </section>
                <section className={styles.ways}>
                    <Container>
                        <h3>Способы оплаты заказов</h3>
                        <h5>
                            В интернет-магазине ООО ЗИКМЕС предусмотрены
                            следующие варианты оплаты
                        </h5>
                        <div className="row justify-content-lg-start justify-content-center">
                            {ways.map((way, i) => (
                                <div
                                    key={i}
                                    className="col-lg-6 col-sm-10 col-12 mt-4"
                                >
                                    <div className={styles.card}>
                                        <div className={styles.card__image}>
                                            <Img {...way.img} alt={way.title} />
                                        </div>
                                        <h6>{way.title}</h6>
                                        <p>{way.text}</p>
                                        <div className={styles.card__actions}>
                                            {way.info && (
                                                <span>{way.info}</span>
                                            )}
                                            {way.action}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                <section className={styles.notes}>
                    <Container>
                        <h3 className="note">Оплата</h3>
                        <p> Для физических лиц:</p>
                        <p>
                            Оплата товара осуществляется только в белорусских
                            рублях. Оплата осуществляется за наличный расчет
                            (наличные купюры, банковская карточка и другие формы
                            оплаты). Возможна оплата по безналичному расчету, с
                            выставлением счет-фактуры на приобретаемый товар.
                        </p>
                        <p>
                            Наличными или банковской карточкой курьеру Вы можете
                            оплатить заказ наличными или карточкой в момент
                            получения товара. Курьер передает вам сам товар, а
                            также кассовый чек и гарантийный талон.
                        </p>
                        <p>
                            Оплата через систему ЕРИП Оплата товар по
                            безналичному расчету для юридических лиц. Счет будет
                            выставлен в соответствии с ценами на сайте без
                            комиссий и наценок.
                        </p>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Payment
