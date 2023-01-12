import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'
import { ConnectPhoto } from 'src/image_export/connect'
import styles from './SectionConnect.module.scss'

export const SectionConnect = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className="row justify-content-end">
                    <div className="col-xxl-5 col-xl-6 col-md-7 col-12">
                        <div className={styles.inner}>
                            <h2 className="section__title">
                                ПРИСОЕДИНЯЙТЕСЬ К НАМ!
                            </h2>
                            <p>
                                Подписывайтесь на социальные сети и участвуйте в
                                розыгрышах призов!
                            </p>
                            <div className={styles.socials}>
                                <Link href="/">
                                    <div></div>
                                    <span>Вконтакте</span>
                                </Link>
                                <Link href="/">
                                    <div></div>
                                    <span>Telegram</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-5 d-lg-block d-none">
                        <Image
                            placeholder="empty"
                            width={421}
                            height={456}
                            className={styles.photo}
                            src={ConnectPhoto}
                            alt="Присоединяйтесь к нам"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
