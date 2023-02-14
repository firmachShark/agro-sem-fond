import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { Card } from 'src/components/card'
import { Container } from 'src/components/layout/container'
import { IProduct } from 'src/models'
import productService, { baseQuery } from 'src/services/product-service'
import { Input } from 'src/components/input'
import { Button } from 'src/components/button'
import { useRouter } from 'next/router'
import styles from './Search.module.scss'
import searchStyles from 'src/components/layout/search-input/SearchInput.module.scss'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Loader } from 'src/components/loader'
import { usePageLoading } from 'src/hooks/usePageLoading'
import { Pagination } from 'src/components/pagination'
import { concatClass } from 'utils/concatClass'

interface SearchPageProps {
    products: IProduct[]
    searchQuery: string
    pagination: {
        page: number
        total: number
    }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const searchQuery = context.query.search

    if (!searchQuery)
        return {
            props: {
                products: [],
                searchQuery: '',
                pagination: {
                    page: 0,
                    total: 0,
                },
            },
        }

    const page = Number(context.query.page) || 1

    const { pagination, products } = await productService.getAll({
        _query: {
            ...baseQuery,
            filters: {
                name: {
                    $contains: searchQuery,
                },
            },
            pagination: {
                pageSize: 20,
                page: page,
            },
        },
        withPagination: true,
    })

    return {
        props: {
            products,
            searchQuery,
            pagination: {
                page: pagination.page,
                total: pagination.pageCount,
            },
        },
    }
}

const SearchPage: NextPage<SearchPageProps> = ({
    products,
    searchQuery,
    pagination,
}) => {
    const router = useRouter()
    const loading = usePageLoading('search')
    const [search, setSearch] = useState(searchQuery)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleClick(e)
    }

    const handleClick = (e: React.FormEvent) => {
        e.stopPropagation()
        e.preventDefault()

        if (!search) return

        router.push(`/search?search=${search}`)
        setSearch('')
    }

    return (
        <>
            <Head>
                <title>Поиск товаров</title>
            </Head>
            <section className={styles.section}>
                {loading && <Loader />}
                <Container>
                    <Breadcrumbs />
                    <h2 className="section__title">Поиск товаров</h2>
                    <div className={searchStyles.search}>
                        <Input
                            autoFocus
                            placeholder="Название или артикул"
                            value={search}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                        <Button
                            onClick={handleClick}
                            className={searchStyles.button}
                            sizeMode="lg"
                        >
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </Button>
                    </div>
                    <h4 className="my-3">Результаты поиска:</h4>
                    {products.length ? (
                        <div className="row justify-content-md-start justify-content-center">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className={concatClass([
                                        'col-xl-3 col-lg-4 col-md-6 col-sm-8 col-auto mt-3',
                                        styles.item_wrapper,
                                    ])}
                                >
                                    <Card
                                        product={product}
                                        isNew={product.isNew}
                                        isHit={product.isHit}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>
                            К сожалению, на ваш поисковый запрос ничего не
                            найдено.
                        </p>
                    )}
                    <div className="d-flex justify-content-center mt-3 order-5">
                        <Pagination
                            page={pagination.page}
                            total={pagination.total}
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default SearchPage
