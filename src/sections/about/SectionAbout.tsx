import { StaticImageData } from 'next/image'
import React from 'react'
import { Container } from 'src/components/layout/container'
import styles from './SectionAbout.module.scss'
import {
    Prop_1,
    Prop_2,
    Prop_3,
    Prop_4,
    Prop_5,
    Prop_6,
    Prop_7,
    Prop_8,
    Prop_9,
    Prop_10,
    AboutPhoto,
} from 'src/image_export/about'
import { SITE_NAME } from 'src/constants/info'
import { Img } from 'src/components/img'

const props: Array<{
    image: StaticImageData
    text: string
}> = [
    {
        image: Prop_1,
        text: 'Гарантированные скидки - цены ниже, чем у конкурентов.',
    },
    {
        image: Prop_2,
        text: 'Бесплатный печатный каталог',
    },
    {
        image: Prop_3,
        text: 'Доставка со скидкой или бесплатно.',
    },
    {
        image: Prop_4,
        text: 'Начисление и оплата бонусами',
    },
    {
        image: Prop_5,
        text: 'БОЛЬШОЕ количество полезных подарков.',
    },
    {
        image: Prop_6,
        text: 'Обработка заказов от 1 до 3 дней. Компьютерная сканировка товарного вложения',
    },
    {
        image: Prop_7,
        text: 'Все товары от производителя! Не перекупаем.',
    },
    {
        image: Prop_8,
        text: 'Гарантия качества на весь посадочный материал',
    },
    {
        image: Prop_9,
        text: 'Надежная упаковка гарантирует, что весь посадочный материал в безопасности',
    },
    {
        image: Prop_10,
        text: 'Отправка наложенным платежом',
    },
]

export const SectionAbout = () => {
    return (
        <section className={styles.about}>
            <Container>
                <div className="row">
                    <div className="col-xl-7 col-12">
                        <h3>{SITE_NAME} — магазин для дачников</h3>
                        <p>
                            «{SITE_NAME}» - это интернет магазин оборудования
                            для сельского хозяйства, основанный на базе
                            известной белорусской компании «ЗИКМЕС». Мы
                            предлагаем лучшие образцы и новинки российской и
                            иностранной техники. Ассортимент компании
                            насчитывает более 4000 наименований. Вся продукция
                            интернет магазина проходит контроль качества и имеет
                            сертификаты соответствия.
                        </p>
                        <h3>Наши преимущества:</h3>
                        <ul>
                            {props.map((prop, i) => (
                                <li key={i}>
                                    <Img
                                        width={60}
                                        height={60}
                                        src={prop.image}
                                        alt={prop.text}
                                    />
                                    <span>{prop.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-5 d-xl-block d-none">
                        <Img
                            width={400}
                            height={1000}
                            src={AboutPhoto}
                            alt="Наши преимущества"
                            className="w-100 h-auto"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
