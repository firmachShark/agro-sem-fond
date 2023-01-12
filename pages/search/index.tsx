import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
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

interface SearchPageProps {
    products: IProduct[]
    searchQuery: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const searchQuery = context.query.search

    if (!searchQuery)
        return {
            props: {
                products: [],
                searchQuery: '',
            },
        }

    const products = await productService.getAll({
        ...baseQuery,
        filters: {
            name: {
                $contains: searchQuery,
            },
        },
    })

    return {
        props: {
            products,
            searchQuery,
        },
    }
}

const SearchPage: NextPage<SearchPageProps> = ({ products, searchQuery }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
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

    useEffect(() => {
        const handleStart = () => setLoading(true)
        const handleEnd = () => setLoading(false)
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleEnd)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleEnd)
        }
    }, [router])

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
                        <div className="row">
                            {products.map((product) => (
                                <div key={product.id} className="col-3">
                                    <Card
                                        product={product}
                                        isNew={product.isNew}
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
                </Container>
            </section>
        </>
    )
}

export default SearchPage
