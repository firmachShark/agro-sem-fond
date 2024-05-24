import Link from 'next/link'
import React from 'react'
import { Container } from '../container'
import styles from './Footer.module.scss'
import { links as headerLinks } from '../header/TopMenu/MobileMenu'
import {
    DeliveryIcon,
    Payment,
    PaymentIcon,
    UserIcon,
} from 'src/image_export/footer'
import {
    ADDRESS,
    MAIL,
    MAIL_ATTR,
    ORGANIZATION,
    PHONE,
    PHONE_ATTR,
} from 'src/constants/info'
import { Button } from 'src/components/button'
import { useDispatchCreator } from 'src/hooks/useStore'
import { openModalOrder } from 'src/store/slices/modal-order.slice'
import ROUTES from 'src/constants/routes'
import { Img } from 'src/components/img'

const links = [
    {
        name: 'Сидки и акции',
        href: ROUTES.stock,
    },
    {
        name: 'О компании',
        href: ROUTES.about,
    },
    {
        name: 'Блог',
        href: ROUTES.blog,
    },
]

const modalText = {
    about: {
        title: 'Информация о продавце',
        text: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ЗИКМЕС» 220131 ,Республика Беларусь, г. Минск, ул. Гамарника, д. 30, офис. 405 УНП 193543133 Почт. адрес : 220131, г. Минск, п/я 36 р/с BY41ALFA30122A10750010270000 ALFA30122525830020270000 в ЗАО «Альфа-Банк», БИК ALFABY2X г. Минск, ул. Сурганова, 43-47 в лице управляющего Белоногой Т.И., действующей на основании Устава Режим работы с 8:00 до 22:00 Наличный, безналичный расчет. Номер регистрации в торговом реестре 529650 от 02.03.2022 Лицо, уполномоченное продавцом рассматривать обращения покупателей о нарушении их прав, предусмотренных законодательством о защите прав потребителей - ZikMes.s@gmai.com, тел. +375 29 890-54-36 Работники администрации Советского р-на г.Минска, уполномоченные рассматривать обращения покупателей в соответствии с законодательством об обращениях граждан и юридических лиц +375 17 377-13-93',
    },
    payment: {
        title: 'Оплата заказов',
        text: 'Для физических лиц: Оплата товара осуществляется только в белорусских рублях. Оплата осуществляется за наличный расчет (наличные купюры, банковская карточка и другие формы оплаты). Возможна оплата по безналичному расчету, с выставлением счет-фактуры на приобретаемый товар. Наличными или банковской карточкой курьеру Вы можете оплатить заказ наличными или карточкой в момент получения товара. Курьер передает вам сам товар, а также кассовый чек и гарантийный талон. Оплата через систему ЕРИП Оплата товар по безналичному расчету для юридических лиц. Счет будет выставлен в соответствии с ценами на сайте без комиссий и наценок. Мы работаем с НДС.',
    },
    delivery: {
        title: 'Доставка заказов',
        text: 'Бесплатная доставка по всей Беларуси курьером прямо до двери (на некоторые товары доставка платная, стоимость доставки необходимо уточнять у менеджера перед заказом) Доставка по Минску в день заказа. Для физических лиц: Оплата товара осуществляется только в белорусских рублях. Оплата осуществляется за наличный расчет (наличные купюры, банковская карточка и другие формы оплаты). Возможна оплата по безналичному расчету, с выставлением счет-фактуры на приобретаемый товар. Наличными или банковской карточкой курьеру Вы можете оплатить заказ наличными или карточкой в момент получения товара. Курьер передает вам сам товар, а также кассовый чек и гарантийный талон. Оплата через систему ЕРИП Оплата товар по безналичному расчету для юридических лиц. Счет будет выставлен в соответствии с ценами на сайте без комиссий и наценок. Доставка с понедельника по воскресенье с 7.00 до 23.00',
    },
}

export const Footer = () => {
    const { dispatchOpenModalOrder } = useDispatchCreator({ openModalOrder })

    const handleClick =
        (key: keyof typeof modalText) => (e: React.MouseEvent) => {
            e.preventDefault()
            const info = modalText[key]
            dispatchOpenModalOrder({
                title: info.title,
                text: info.text,
            })
        }

    return (
        <footer className={styles.footer}>
            <Container className="container position-relative z-index-1">
                <div className={styles.inner}>
                    <div>
                        <h5>
                            © {new Date().getFullYear()}. ООО &quot;
                            {ORGANIZATION}&quot;
                        </h5>
                        {links.map((link, i) => (
                            <Link href={link.href} key={i}>
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href={ROUTES.payment}
                            className={
                                'flex-grow-1 d-flex align-items-end pb-1'
                            }
                        >
                            <Img src={Payment} alt="payment" />
                        </Link>
                    </div>
                    <div>
                        <h5>Навигация</h5>
                        {headerLinks.map((link, i) => (
                            <Link href={link.href} key={i}>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <h5>Контакты</h5>
                        <Link href={PHONE_ATTR}>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>
                                <b>{PHONE}</b>
                                <br />
                                Бесплатно по Беларуси
                            </span>
                        </Link>
                        <Link href={MAIL_ATTR}>
                            <i
                                className="fa fa-envelope"
                                aria-hidden="true"
                            ></i>
                            <span>{MAIL}</span>
                        </Link>
                        <span>{ADDRESS}</span>
                        <Button onClick={handleClick('about')}>
                            <Img src={UserIcon} alt="Продавец" />О продавце
                        </Button>
                        <Button onClick={handleClick('payment')}>
                            <Img src={PaymentIcon} alt="Оплата" />
                            Оплата
                        </Button>
                        <Button
                            isLink={{
                                href: ROUTES.delivery,
                                'aria-label': 'Доставка',
                            }}
                        >
                            <Img src={DeliveryIcon} alt="Доставка" />
                            Доставка
                        </Button>
                        <Link href={ROUTES.privacy}>
                            <i className="fa fa-shield" aria-hidden="true"></i>
                            <span>Политика конфеденциальности</span>
                        </Link>
                        <Link href={ROUTES['return-terms']}>
                            <i className="fa fa-undo" aria-hidden="true"></i>
                            <span>Условия возврата</span>
                        </Link>
                    </div>
                    <div>
                        <h5>Оставьте заявку и мы перезвоним!</h5>
                        <form>
                            <input
                                type="text"
                                required
                                placeholder="Номер телефона"
                                name="phone"
                            />
                            <Button type="submit">Отправить</Button>
                        </form>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
