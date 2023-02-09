import { Carousel } from 'src/components/carousel'
import { Container } from 'src/components/layout/container'
import React from 'react'
import styles from './SectionOverview.module.scss'
import { Button } from 'src/components/button'
import Link from 'next/link'
import { ISOverviewItem } from 'src/models/ISOverviewItem'
import { concatClass } from 'utils/concatClass'

interface SectionOverviewProps {
    items: ISOverviewItem[]
}

export const SectionOverview: React.FC<SectionOverviewProps> = ({ items }) => {
    return (
        <section className={styles.section}>
            <Container>
                <Carousel
                    className={styles.carousel}
                    infinite
                    autoplay
                    autoplaySpeed={5000}
                    slidesToShow={items.length > 1 ? 2 : 1}
                    responsive={[
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                    ]}
                >
                    {items.map((item, i) => (
                        <div key={i} style={{ height: '100%' }}>
                            <Link
                                href={item.href}
                                className={concatClass([
                                    styles.item,
                                    items.length === 1
                                        ? styles.alone
                                        : undefined,
                                ])}
                                style={{
                                    backgroundImage: item.photo
                                        ? `url(${item.photo.url})`
                                        : 'none',
                                }}
                            >
                                <div className={styles.inner}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    />
                                    <Button variant="orange">Подробонее</Button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Carousel>
            </Container>
        </section>
    )
}
