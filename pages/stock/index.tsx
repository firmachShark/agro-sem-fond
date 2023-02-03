import Head from 'next/head'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Button } from 'src/components/button'
import { Img } from 'src/components/img'
import { Container } from 'src/components/layout/container'
import { Modal } from 'src/components/modal'
import {
    StockItem_1,
    StockItem_10,
    StockItem_11,
    StockItem_12,
    StockItem_13,
    StockItem_14,
    StockItem_2,
    StockItem_3,
    StockItem_4,
    StockItem_5,
    StockItem_6,
    StockItem_7,
    StockItem_8,
    StockItem_9,
} from 'src/image_export/stock'
import styles from './Stock.module.scss'

interface StockItem {
    text?: string
    title: string
    img: StaticImageData
    modalName: string
}

const items: StockItem[] = [
    {
        title: 'ПОДАРКИ НА ГЛАДИОЛУСЫ',
        img: StockItem_1,
        modalName: 'gifts',
    },
    {
        title: 'ПОДАРКИ',
        text: 'НА ВЕСЕННИЕ ЛУКОВИЧНЫЕ',
        img: StockItem_2,
        modalName: 'gifts2',
    },
    {
        title: 'ЦВЕТЫ НЕДЕЛИ',
        text: 'Фрезии',
        img: StockItem_3,
        modalName: 'flowers_week',
    },
    {
        title: 'Скидки',
        img: StockItem_4,
        modalName: 'discount',
    },
    {
        title: 'Бесплатная и льготная доставка',
        text: 'На семена',
        img: StockItem_5,
        modalName: 'delivery',
    },
    {
        title: 'Подарки на семена',
        img: StockItem_6,
        modalName: 'gifts3',
    },
    {
        title: 'Подарки на семена сортов и гибридов "Ваше Хозяйство"',
        img: StockItem_7,
        modalName: 'gifts4',
    },
    {
        title: 'Подарки на семена серий Штайнерт и Био-Старт',
        img: StockItem_8,
        modalName: 'gifts5',
    },
    {
        title: 'ПОДАРКИ НА РОЗЫ',
        img: StockItem_9,
        modalName: 'gifts6',
    },
    {
        title: 'Подарки к саженцам декоративных',
        img: StockItem_10,
        modalName: 'gifts7',
    },
    {
        title: 'Подарки к саженцам плодовых',
        img: StockItem_11,
        modalName: 'gifts8',
    },
    {
        title: 'Подарки на лук севок',
        text: 'с 1 января 2023г.',
        img: StockItem_12,
        modalName: 'gifts9',
    },
    {
        title: 'Подарки к саженцам ягодных',
        img: StockItem_13,
        modalName: 'gifts10',
    },
    {
        title: 'Подарок за первый заказ',
        text: 'Гель Активист 40 мл',
        img: StockItem_14,
        modalName: 'gifts11',
    },
]

interface ModalProps {
    title: string | JSX.Element
    text: string | JSX.Element
}

const modalData: Record<string, ModalProps> = {
    delivery: {
        title: 'Бесплатная и льготная доставка',
        text: (
            <>
                <h6>Заказов семян и товаров для сада и огорода</h6>
                <ul>
                    <li>
                        Доставка заказов <span>БЕСПЛАТНО</span> от 6500 руб. (с
                        учетом скидок)
                    </li>
                    <li>
                        Льготная доставка <span>99 руб.</span> при заказе от
                        3500-6500 руб. (с учетом скидок)
                    </li>
                    <li>
                        Льготная доставка <span>199 руб.</span> при заказе от
                        1990-3500 руб. (с учетом скидок)
                    </li>
                </ul>
                <p>
                    Данная акция действует <span>только в этом сезоне</span> и
                    распространяется только на заказы с{' '}
                    <span>семенами, товарами для рассады</span> и{' '}
                    <span>товарами для сада и огорода.</span>
                </p>
                <strong>
                    не распространяется на товары из разделов: Сидераты и
                    Кормовые добавки; Садовая мебель; Генератор холодного тумана
                    Defender из раздела &quot;Прочие товары&quot;.
                </strong>
                <strong>
                    + комиссия за перевод денег в наш адрес (аналогично
                    банковской комиссии) * бесплатная и фиксированная доставка
                    действует только на наземный вид транспорта любой
                    транспортной компанией, которую вы выбираете , кроме
                    регионов с авиа доставкой.
                </strong>
                <strong>
                    в случае выбора транспортной компании, бесплатная и
                    фиксированная доставка действует только до пункта самовывоза
                    (на курьерскую доставку НЕ распространяется)
                </strong>
            </>
        ),
    },
}

const Stock = () => {
    const router = useRouter()

    const modalName: string | null = useMemo(() => {
        // return (router.query?.modal as string) || null
        return (router.query?.modal as string) ? 'delivery' : null
    }, [router.query])

    const [modalProps, setModalProps] = useState<ModalProps | null>(null)

    const handleModalClose = () => router.push('/stock')

    useEffect(() => {
        const modalProps = modalData[modalName as string]
        if (!modalProps) return setModalProps(null)

        setModalProps(modalProps)
    }, [modalName])

    return (
        <>
            <Head>
                <title>Акции</title>
            </Head>
            <Breadcrumbs />
            <section>
                <Container>
                    <div className={styles.items}>
                        {items.map((item, i) => (
                            <div key={i} className={styles.item}>
                                <Link
                                    href={`/stock?modal=${item.modalName}`}
                                    className={styles.item__inner}
                                >
                                    <Img
                                        src={item.img.src}
                                        width={item.img.width}
                                        height={item.img.height}
                                        alt={item.title}
                                    />
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                        <Button sizeMode="sm" variant="primary">
                                            Подробнее
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            {modalProps && (
                <Modal
                    size="lg"
                    isCenter
                    isOpen={true}
                    headerClassName={styles.modal__title}
                    bodyClassName={styles.modal__content}
                    {...modalProps}
                    onClose={handleModalClose}
                />
            )}
        </>
    )
}

export default Stock
