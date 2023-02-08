import Head from 'next/head'
import React, { useId } from 'react'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Button } from 'src/components/button'
import { Input, InputStyles } from 'src/components/input'
import { Container } from 'src/components/layout/container'
import styles from './GarantyPage.module.scss'

const GarantyPage = () => {
    const nameId = useId()
    const phoneId = useId()
    const questionId = useId()

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
                    <h3 className="note note-sm">
                        ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ, что посадочный материал
                        надлежащего качества возврату и обмену не подлежат,
                        согласно Постановлению Правительства РФ от 19.01.1998 г.
                        № 55.
                    </h3>
                    <div className={styles.content}>
                        <h4>Претензии принимаются</h4>
                        <article>
                            <h6>СРОКИ ПРЕДЪЯВЛЕНИЯ ПРЕТЕНЗИЙ:</h6>
                            <p>
                                Претензии{' '}
                                <b>
                                    принимаются к рассмотрению в течение 20 дней
                                </b>{' '}
                                со дня получения заказа, при условии, что
                                посылка <b>была выкуплена не позднее 5 дней</b>{' '}
                                с момента поступления в пункт выдачи.
                            </p>
                        </article>
                        <h4>БОЛЬШАЯ ПРОСЬБА НЕ ДОПУСКАТЬ ЭТОГО!</h4>
                        <article>
                            <p>
                                <b>
                                    <i>
                                        {' '}
                                        Более поздний срок получения посылки,
                                        негативно сказывается на состоянии
                                        ЖИВОГО посадочного материала
                                    </i>
                                </b>
                            </p>
                        </article>
                        <article>
                            <h6>ПРЕТЕНЗИИ ПРИНИМАЮТСЯ ПРИ НАЛИЧИЕ:</h6>
                            <ul>
                                <li>Письменного изложения сути проблемы.</li>
                                <li>
                                    Фотографии поврежденного посадочного
                                    материала (с наклейками и бирками компании
                                    &quot;АгроСемФонд&quot;) или фото пакета
                                    семян с номером партии и фасовщика.
                                </li>
                            </ul>
                        </article>
                        <h4>СРОК РАССМОТРЕНИЯ ПРЕТЕНЗИИ 7 ДНЕЙ</h4>
                        <p>
                            При передаче заказа на доставку в выбранную
                            транспортную компанию вам приходит смс с трек
                            номером, по которому на сайте ТК, выбранной Вами при
                            оформлении заказа, можно отследить местонахождение
                            груза.
                        </p>
                        <p>
                            Также Вам на номер телефона, оказанный при заказе,
                            направляются информационные смс сообщения об
                            отправке и движение в пути посылки.
                        </p>
                        <article>
                            <strong>
                                В случае нарушения Вами условий оформления
                                претензий, мы оставляем за собой право отказать
                                в их удовлетворении.
                            </strong>
                        </article>
                        <h5>
                            В случае обнаружения недостатков товара Вам
                            предлагаются следующие варианты урегулирования
                            разногласий:
                        </h5>
                        <ul>
                            <li>
                                Замена на аналогичный товар надлежащего качества
                            </li>
                            <li>
                                Замена на материал, схожий по стоимости и
                                декоративным качествам.
                            </li>
                            <li>
                                В случае пересорта товара по цвету - возвращаем
                                33% от стоимости товара.
                            </li>
                            <li>
                                За потерю товарного вида во время
                                транспортировки процент возврата определяется
                                индивидуально.
                            </li>
                            <li>
                                Возврат денежных средств, на основании
                                заявления, направленного в свободной форме или
                                использования оплаченных денежных средств в
                                качестве предоплаты за последующие заказы.
                            </li>
                            <li>
                                Возврат Товара надлежащего качества не
                                осуществляется согласно Перечню
                                непродовольственных товаров надлежащего
                                качества, не подлежащих возврату или обмену на
                                аналогичный товар других размера, формы,
                                габарита, фасона, расцветки или комплектации,
                                утвержденного Постановлением Правительства
                                Российской Федерации от 19 января 1998 г. № 55.
                            </li>
                        </ul>
                    </div>
                    <form action="/" className={styles.form}>
                        <div className="row">
                            <div className="col-sm-6 col-12">
                                <label htmlFor={nameId}>ФИО</label>
                                <Input
                                    name="name"
                                    placeholder="ФИО"
                                    id={nameId}
                                />
                            </div>
                            <div className="col-sm-6 col-12 mt-sm-0 mt-3">
                                <label htmlFor={phoneId}>Ваш номер</label>
                                <Input
                                    name="name"
                                    type="tel"
                                    placeholder="Ваш номер"
                                    id={phoneId}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor={questionId}>Ваша претензия</label>
                            <textarea
                                className={InputStyles.input}
                                id={questionId}
                                name="question"
                            />
                        </div>
                        <Button variant="primary" type="submit">
                            Отправить
                        </Button>
                    </form>
                </Container>
            </section>
        </>
    )
}

export default GarantyPage