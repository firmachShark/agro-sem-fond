import Head from 'next/head'
import { StaticImageData } from 'next/image'
import React, { useId } from 'react'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Button } from 'src/components/button'
import { Img } from 'src/components/img'
import { Input, InputStyles } from 'src/components/input'
import { Container } from 'src/components/layout/container'
import { FAQCallIcon, FAQClocklIcon, FAQFormIcon } from 'src/image_export/faq'
import styles from './FAQPage.module.scss'

interface Step {
    img: StaticImageData
    text: string
}

const steps: Step[] = [
    {
        img: FAQFormIcon,
        text: 'Задайте вопрос через форму',
    },
    {
        img: FAQCallIcon,
        text: 'Дождитесь уведомления',
    },
    {
        img: FAQClocklIcon,
        text: 'Получите ответ от специалиста!',
    },
]

const FAQPage = () => {
    const nameId = useId()
    const phoneId = useId()
    const questionId = useId()

    return (
        <>
            <Head>
                <title>Задать вопрос</title>
            </Head>
            <Breadcrumbs />
            <section className={styles.section}>
                <Container>
                    <div className={styles.main}>
                        {steps.map(({ img, text }, i) => (
                            <div key={i}>
                                <div>
                                    <Img
                                        src={img.src}
                                        width={64}
                                        height={64}
                                        alt={text}
                                    />
                                </div>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.content}>
                        <h1>Задайте вопрос</h1>
                        <p>
                            Вы столкнулись с проблемой, сомневаетесь в выборе,
                            не знаете как победить болезнь у растения, или у вас
                            есть какой то другой вопрос? Мы будем рады помочь
                            Вам! Заполните форму обращения - и вопрос попадет
                            напрямую к нашему агроному: специалисту сельского
                            хозяйства, обладающего всесторонними знаниями в этой
                            области!
                        </p>
                        <form action="/">
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
                                <label htmlFor={questionId}>Ваш вопрос</label>
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
                    </div>
                </Container>
            </section>
        </>
    )
}

export default FAQPage
