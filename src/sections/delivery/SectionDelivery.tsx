import React from 'react'
import { Button } from 'src/components/button'
import { Container } from 'src/components/layout/container'
import styles from './SectionDelivery.module.scss'

export const SectionDelivery = () => {
    return (
        <section className={styles.delivery}>
            <Container>
                <div className={styles.inner}>
                    <div>
                        <h3>НАДЕЖНАЯ ДОСТАВКА</h3>
                        <p>
                            Акции и льготы на доставку! Почтой России и в пункты
                            выдачи
                        </p>
                        <Button isLink={{ href: '/delivery' }} variant="orange">
                            Подробнее
                        </Button>
                    </div>
                    <div>
                        <h3>УДОБНАЯ ОПЛАТА</h3>
                        <p>
                            Онлайн или наложенным платежом! Выберите удобный для
                            вас способ
                        </p>
                        <Button isLink={{ href: '/payment' }} variant="orange">
                            Подробнее
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
