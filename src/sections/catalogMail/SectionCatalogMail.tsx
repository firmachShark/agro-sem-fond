import Link from 'next/link'
import React from 'react'
import { Button } from 'src/components/button'
import { Img } from 'src/components/img'
import { Container } from 'src/components/layout/container'
import ROUTES from 'src/constants/routes'
import { useDispatchCreator } from 'src/hooks/useStore'
import { CatalogMailPhoto } from 'src/image_export/catalog-mail'
import { openModalOrder } from 'src/store/slices/modal-order.slice'
import { concatClass } from 'utils/concatClass'
import styles from './SectionCatalogMail.module.scss'

export const SectionCatalogMail = () => {
    const { dispatchOpenModalOrder } = useDispatchCreator({ openModalOrder })

    const handleClick = () => dispatchOpenModalOrder()

    return (
        <section className={styles.section}>
            <Container>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className={styles.item}>
                            <h2 className="section__title">
                                Каталог «Семена почтой»
                            </h2>
                            <div className="row align-items-center">
                                <div className="col-6 d-sm-block d-none">
                                    <Img
                                        src={CatalogMailPhoto}
                                        width={238}
                                        height={336}
                                        className="w-100 h-auto"
                                        alt="Каталог «Семена почтой»"
                                    />
                                </div>
                                <div className="col-sm-6 col-12">
                                    <ul>
                                        <li>Овощные культуры</li>
                                        <li>Цветы однолетние</li>
                                        <li>Цветы двулетние</li>
                                        <li>Цветы многолетние</li>
                                        <li>Серия «Домашняя аптека»</li>
                                        <li>
                                            Товары производства «Ваше хозяйство»
                                        </li>
                                        <li>Доставка товара круглый год</li>
                                    </ul>
                                    <Button
                                        isLink={{ href: ROUTES.catalog }}
                                        variant="primary"
                                        className="my-3"
                                    >
                                        Посмотреть
                                    </Button>
                                    <br />
                                    <Button
                                        variant="orange"
                                        onClick={handleClick}
                                    >
                                        Оставить заявку
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 mt-lg-0 mt-4">
                        <Link
                            href={ROUTES.stock}
                            className={concatClass([
                                styles.item,
                                styles.right_item,
                            ])}
                        >
                            <h4>
                                Делитесь своим мнением!
                                <br /> и получайте
                            </h4>
                            <div className={styles.bonus}>
                                <div>
                                    <b>3</b>
                                    <b>0</b>
                                    <b>0</b>
                                </div>
                                <span>Бонусов на счет!</span>
                                <Button variant="orange">Подробнее</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}
