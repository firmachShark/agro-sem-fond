import Head from 'next/head'
import { StaticImageData } from 'next/image'
import React from 'react'
import { BankDetails } from 'src/components/bank-details'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Img } from 'src/components/img'
import { Container } from 'src/components/layout/container'
import { ORGANIZATION, SITE_NAME } from 'src/constants/info'
import {
    AboutPageItem_1,
    AboutPageItem_10,
    AboutPageItem_11,
    AboutPageItem_12,
    AboutPageItem_2,
    AboutPageItem_3,
    AboutPageItem_4,
    AboutPageItem_5,
    AboutPageItem_6,
    AboutPageItem_7,
    AboutPageItem_8,
    AboutPageItem_9,
    AboutPagePreview,
} from 'src/image_export/about'
import styles from './About.module.scss'

interface AboutItem {
    img: StaticImageData
    text: string
}

const items: AboutItem[] = [
    {
        text: 'Все товары от производителя Не перекупаем и не перепродаем',
        img: AboutPageItem_1,
    },
    {
        text: 'Цены ниже, чем у конкурентов',
        img: AboutPageItem_2,
    },
    {
        text: 'Гарантированные скидки, выгода очевидна в каждом заказе',
        img: AboutPageItem_3,
    },
    {
        text: 'Доставка бесплатно',
        img: AboutPageItem_4,
    },
    {
        text: 'БОЛЬШОЕ количество полезных подарков',
        img: AboutPageItem_5,
    },
    {
        text: 'Бесплатный каталог',
        img: AboutPageItem_6,
    },
    {
        text: 'Начисление и оплата бонусами',
        img: AboutPageItem_7,
    },
    {
        text: 'АКЦИИ, РАСПРОДАЖИ И СПЕЦ ПРЕДЛОЖЕНИЯ',
        img: AboutPageItem_8,
    },
    {
        text: 'Обработка заказов от 1 до 3 дней. Компьютерная сканировка товарного вложения',
        img: AboutPageItem_9,
    },
    {
        text: 'Гарантия качества на весь товар, работа с претензиями.',
        img: AboutPageItem_10,
    },
    {
        text: 'Все варианты оплаты на сайте, наложенный платеж',
        img: AboutPageItem_11,
    },
    {
        text: 'Надежная упаковка гарантирует, что весь товар сохранит товарный вид при получении.',
        img: AboutPageItem_12,
    },
]

const About = () => {
    return (
        <>
            <Head>
                <title>О нас</title>
            </Head>
            <Breadcrumbs />
            <section className="pt-0">
                <Container>
                    <div className={styles.preview}>
                        <div className={styles.preview__img}>
                            <Img
                                {...AboutPagePreview}
                                alt={'Добро пожаловать!'}
                            />
                        </div>
                        <div className={styles.preview__inner}>
                            <h2>Добро пожаловать!</h2>
                            <h5>
                                Рады приветствовать Вас в интернет-магазине
                                {SITE_NAME} компании ООО &quot;{ORGANIZATION}
                                &quot;
                            </h5>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.description}>
                <Container>
                    <div className={styles.description__inner}>
                        <p>
                            Создавая интернет-магазин в котором представлены
                            теплицы, а так же другая садовая техника мы в первую
                            очередь были ориентированы на вас.
                        </p>
                        <strong>
                            Одно из преимуществ нашей компании заключается в
                            том, что большая часть товара, представленный на
                            страницах нашего интернет-магазина, всегда в наличии
                            на складе. Складской комплекс компании, оборудован
                            по последнему слову техники и позволяет вместить
                            огромное количество товара.
                        </strong>

                        <div className={styles.description__items}>
                            <div className="row">
                                {items.map((item, i) => (
                                    <div
                                        key={i}
                                        className={
                                            'col-lg-4 col-sm-6 col-12 mt-4'
                                        }
                                    >
                                        <div
                                            className={styles.description__item}
                                        >
                                            <div>
                                                <Img
                                                    {...item.img}
                                                    alt={item.text}
                                                />
                                            </div>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p>
                            Перед началом посевного сезона, все, начиная от
                            садоводов-любителей, до профессионалов заняты
                            поиском качественной техники для своего сада,
                            огорода или приусадебного участка. Чаще всего это
                            происходит в сети интернет.
                            <br /> Вы часто задаётесь вопросом: Где купить
                            теплицу или мотоблок? Но не менее важный вопрос: Как
                            вырастить урожай? Ответы на эти и другие вопросы вы
                            сможете найти на страницах нашего магазина в
                            карточке товара, где есть описания теплиц,
                            агротехники, графики посадки, и в нашем
                            садоводческом блоге, где мы передаем накопленные
                            нами знания по теплицы, а так же опыт работы с
                            теплицами садоводами-любителями и профессионалами.
                            Являетесь ли вы опытным садоводом или впервые
                            пробуете себя в этом деле - вы можете быть уверены в
                            качестве наших теплиц, в компетентности наших
                            специалистов и в том, что наши теплицы оправдают
                            ваши ожидания в период сбора урожая. Обращаем ваше
                            внимание на то, что теплицы проверены и
                            сертифицированы.
                        </p>

                        <p>
                            Весь ассортимент товара и полную информацию по нему
                            вы сможете посмотреть в нашем каталоге.
                            <span>
                                Мы уверены, что вы будете приятно удивлены теми
                                подарками и скидками, которые мы подготовили для
                                Вас.
                            </span>
                        </p>

                        <p>
                            <span>Богатого Вам урожая !!!</span>
                        </p>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <BankDetails />
                </Container>
            </section>
        </>
    )
}

export default About
