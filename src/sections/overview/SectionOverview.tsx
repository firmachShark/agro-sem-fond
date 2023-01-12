import { Carousel } from 'src/components/carousel'
import { Container } from 'src/components/layout/container'
import React from 'react'
import styles from './SectionOverview.module.scss'
import { Button } from 'src/components/button'
import Link from 'next/link'
import { ISOverviewItem } from 'src/models/ISOverviewItem'

interface SectionOverviewProps {
    items: ISOverviewItem[]
}

export const SectionOverview: React.FC<SectionOverviewProps> = ({ items }) => {
    return (
        <section className={styles.section}>
            <Container>
                <Carousel
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
                        <div key={i}>
                            <Link
                                href={item.href}
                                className={styles.item}
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
