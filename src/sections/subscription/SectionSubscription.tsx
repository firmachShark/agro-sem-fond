import React, { useId } from 'react'
import { Button } from 'src/components/button'
import { Input } from 'src/components/input'
import { Container } from 'src/components/layout/container'
import { concatClass } from 'utils/concatClass'
import styles from './SectionSubscription.module.scss'

export const SectionSubscription = () => {
    const id = useId()

    return (
        <section className={styles.section}>
            <Container className={concatClass(['container', styles.container])}>
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-xl-5 col-lg-6 col-12">
                        <div className={styles.inner}>
                            <h2>Будьте в курсе событий</h2>
                            <h3>Подарок за подписку!</h3>
                            <p>
                                Подпишитесь на рассылку с самыми горячими
                                акциями и скидками!
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 mt-lg-0 mt-3">
                        <form action="/">
                            <label htmlFor={id}>Ваш Номер:</label>
                            <Input
                                type="number"
                                placeholder="Ваш номер"
                                name="phone"
                                id={id}
                            />
                            <Button variant="orange" type="submit">
                                Получить подарок
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}
