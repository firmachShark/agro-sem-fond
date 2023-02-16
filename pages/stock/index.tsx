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
    StockItem_2,
    StockItem_3,
    StockItem_4,
    StockItem_5,
    StockItem_6,
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
        title: 'СКИДКА ОТ 100 РУБ ПРИ ЗАКАЗЕ с СОСЕДОМ',
        img: StockItem_1,
        modalName: 'gifts',
    },
    {
        title: 'МАНГАЛ В ПОДАРОК К БЕСЕДКЕ',
        img: StockItem_2,
        modalName: 'gifts2',
    },
    {
        title: 'ШУРУПОВЕРТ В ПОДАРОК',
        text: 'К БЕНЗОПИЛАМ',
        img: StockItem_3,
        modalName: 'flowers_week',
    },
    {
        title: 'ДО 12 БОНУСОВ К БЕНЗОКОСАМ',
        img: StockItem_4,
        modalName: 'discount',
    },
    {
        title: 'Скидки',
        img: StockItem_5,
        modalName: 'discount',
    },
    {
        title: 'Бесплатная и льготная доставка',
        text: 'На семена',
        img: StockItem_6,
        modalName: 'delivery',
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
