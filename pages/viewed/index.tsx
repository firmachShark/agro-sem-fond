import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Button } from 'src/components/button'
import { Card } from 'src/components/card'
import { Container } from 'src/components/layout/container'
import { Pagination } from 'src/components/pagination'
import { IProduct } from 'src/models'
import productService, { baseQuery } from 'src/services/product-service'
import viewedApi from 'utils/viewedApi'
import styles from './ViewedPage.module.scss'

interface ViewedPageProps {
    products: IProduct[]
    pagination: {
        page: number
        total: number
    }
}

export const getServerSideProps: GetServerSideProps<ViewedPageProps> = async (
    context,
) => {
    const items = viewedApi.parseJSON(context.req.cookies.viewed as string)

    if (!items || !items.length)
        return { props: { products: [], pagination: { page: 1, total: 1 } } }

    const ids = items.map((item) => item.id)
    const page = Number(context.query.page) || 1

    const { products, pagination } = await productService.getAll({
        _query: {
            ...baseQuery,
            filters: {
                id: {
                    $in: ids.length ? ids : [-1],
                },
            },
            pagination: {
                pageSize: 20,
                page: page,
            },
        },
        withPagination: true,
    })

    const sorted = ids.reduce((result: IProduct[], id) => {
        const product = products.find((product) => product.id === id)
        if (product) result.push(product)

        return result
    }, [])

    return {
        props: {
            products: sorted,
            pagination: {
                page: pagination.page,
                total: pagination.pageCount,
            },
        },
    }
}

const ViewedPage: NextPage<ViewedPageProps> = ({
    products: _products,
    pagination,
}) => {
    const [products, setProducts] = useState<IProduct[]>(_products)

    const handleClear = () => {
        viewedApi.clear()
        setProducts([])
    }

    return (
        <>
            <Head>
                <title>Раннее вы смотрели</title>
            </Head>
            <Breadcrumbs />
            <section className={styles.section}>
                <Container>
                    {products.length ? (
                        <>
                            <header>
                                <h4>Раннее вы смотрели:</h4>
                                <Button
                                    sizeMode={'sm'}
                                    variant="orange"
                                    onClick={handleClear}
                                >
                                    Очистить историю
                                </Button>
                            </header>
                            <div className={styles.products}>
                                {products.map((product) => (
                                    <div key={product.id}>
                                        <Card
                                            product={product}
                                            isNew={product.isNew}
                                            isHit={product.isHit}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="d-flex justify-content-center mt-3 order-5">
                                <Pagination
                                    page={pagination.page}
                                    total={pagination.total}
                                />
                            </div>
                        </>
                    ) : (
                        <div className="text-center">
                            <header>
                                <h4>Вы еще ничего не посмотрели!</h4>
                            </header>
                            <Button
                                className="mt-4"
                                variant="primary"
                                isLink={{ href: '/catalog' }}
                            >
                                Перейти в каталог
                            </Button>
                        </div>
                    )}
                </Container>
            </section>
        </>
    )
}

export default ViewedPage
