import Head from 'next/head'
import { StaticImageData } from 'next/image'
import React from 'react'
import { BankDetails } from 'src/components/bank-details'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Button } from 'src/components/button'
import { Img } from 'src/components/img'
import { Container } from 'src/components/layout/container'
import {
    PaymentBank,
    PaymentCard,
    PaymentNalPay,
    PaymentSber,
    PaymentSBP,
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
        title: 'Банковский перевод (квитанция)',
        text: 'Вы можете оплатить квитанцию в любом отделении Сбербанка и других банков, принимающих платежи от частных лиц действующего на территории России.',
        info: 'Действует скидка 6 - 9%',
        action: <Button>Скачать квитанцию</Button>,
    },
    {
        img: PaymentCard,
        title: 'Оплата на сайте онлайн картами Visa, Mastercard, МИР',
        text: 'Оплата банковской картой онлайн через платежный шлюз ПАО СБЕРБАНК.',
        info: 'Действует скидка 6 - 9%',
    },
    {
        img: PaymentSber,
        title: 'Оплата по реквизитам в личном кабинете Сбербанка',
        text: 'В комментарии к платежу укажите номер заказа!',
        info: 'Действует скидка 6 - 9%',
    },
    {
        img: PaymentNalPay,
        title: 'Наложенный платеж',
        text: 'Мы высылаем Вам товар, и при получении посылки на почте, Вы оплачиваете стоимость товара и почтовые услуги.',
    },
    {
        img: PaymentSBP,
        title: 'Система Быстрых Платежей',
        text: 'Вам нужен только смартфон с приложением любого банка, подключенного к Системе быстрых платежей',
        info: 'Действует скидка 6 - 9%',
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
                            В интернет-магазине ООО АгроСемФонд предусмотрены
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
                        <h3 className="note">Особые примечания</h3>
                        <p>
                            До момента поступления денежных средств мы не
                            резервируем на складе товары Вашего заказа. Срок
                            обработки заказа начинается с момента поступления
                            100% денежных средств на наш счет.
                        </p>
                        <p>
                            Для оплаты (ввода реквизитов Вашей карты) Вы будете
                            перенаправлены на платежный шлюз ПАО СБЕРБАНК.
                            Соединение с платежным шлюзом и передача информации
                            осуществляется в защищенном режиме с использованием
                            протокола шифрования SSL. В случае если Ваш банк
                            поддерживает технологию безопасного проведения
                            интернет-платежей Verified By Visa или MasterCard
                            SecureCode для проведения платежа также может
                            потребоваться ввод специального пароля.
                        </p>
                        <p>
                            Настоящий сайт поддерживает 256-битное шифрование.
                            Конфиденциальность сообщаемой персональной
                            информации обеспечивается ПАО СБЕРБАНК. Введенная
                            информация не будет предоставлена третьим лицам за
                            исключением случаев, предусмотренных
                            законодательством РФ. Проведение платежей по
                            банковским картам осуществляется в строгом
                            соответствии с требованиями платежных систем МИР,
                            Visa Int. и MasterCard Europe Sprl.
                        </p>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Payment
