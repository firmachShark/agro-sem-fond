import Head from 'next/head'
import React from 'react'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Img } from 'src/components/img'
import { Container } from 'src/components/layout/container'
import styles from './Galery.module.scss'
import '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'
import { GetStaticProps, NextPage } from 'next'
import galeryService from 'src/services/galery-service'
import { Image } from 'src/models'

interface GaleryPageProps {
    photos: Image[]
}

export const getStaticProps: GetStaticProps<GaleryPageProps> = async () => {
    const photos = await galeryService.getPhotos()

    return {
        revalidate: 60,
        props: {
            photos,
        },
    }
}

const GaleryPage: NextPage<GaleryPageProps> = ({ photos }) => {
    return (
        <>
            <Head>
                <title>Галерия</title>
            </Head>
            <Breadcrumbs />
            <section className="pt-0">
                <Container>
                    <div className={styles.items}>
                        {photos.map((photo, i) => {
                            return (
                                <div key={i}>
                                    <Img
                                        data-fancybox={`galery-${i}`}
                                        src={photo.url}
                                        alt="photo"
                                        width={photo.width}
                                        height={photo.height}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default GaleryPage
