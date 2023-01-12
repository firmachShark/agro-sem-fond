import Head from 'next/head'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Button } from 'src/components/button'
import { Container } from 'src/components/layout/container'
import { Loader } from 'src/components/loader'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { IProduct } from 'src/models'
import { ICart } from 'src/models/ICart'
import productService, { baseQuery } from 'src/services/product-service'
import styles from './CartPage.module.scss'
import ProductRow from './ProductRow'
import cartApi from 'utils/cart'
import { useLatest } from 'src/hooks/useLatest'
import { Input } from 'src/components/input'
import useMediaQuery from 'src/hooks/useMediaQuery'
import { MobileView } from './MobileView'

export interface IProductInCart extends IProduct {
    count: number
}

const CartPage = () => {
    const cart = useLocalStorage<ICart>('cart')
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<IProductInCart[] | null>(null)
    const isSM = useMediaQuery('(max-width: 575px)')

    const productsExists = cart && products && !!products.length

    const productsLength = useLatest(products?.length || 0)

    const totalSum = useMemo(() => {
        if (!products) return 0

        return products.reduce(
            (result, product) => (result += product.price * product.count),
            0,
        )
    }, [products])

    const fetchProducts = useCallback(async () => {
        if (!cart) return
        if (Object.keys(cart).length === productsLength.current) return

        const ids = Object.keys(cart).map((id) => Number(id))

        setLoading(true)
        try {
            const products = await productService.getAll({
                ...baseQuery,
                filters: {
                    id: {
                        $in: ids.length ? ids : [-1],
                    },
                },
            })

            setProducts(
                products.map((product) => {
                    const price = cart[product.id].price
                    const count = cart[product.id].count

                    return {
                        ...product,
                        price,
                        count,
                    }
                }),
            )
        } catch (e) {
            console.error(e)
        }
        setLoading(false)
    }, [cart, productsLength])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    const handleChangeCount =
        (id: number) => (count: number | ((prev: number) => number)) => {
            if (!products) return

            setProducts(
                products.map((product) => {
                    if (product.id === id) {
                        let _count = count
                        if (typeof count === 'function')
                            _count = count(product.count)

                        cartApi.add(product.id, {
                            price: product.price,
                            count: _count as number,
                        })

                        return { ...product, count: _count as number }
                    }

                    return product
                }),
            )
        }

    return (
        <>
            <Head>
                <title>Корзина</title>
            </Head>

            <Breadcrumbs />
            <section className={styles.section}>
                <Container>
                    {loading ? (
                        <Loader withoutOverlay />
                    ) : (
                        <>
                            {productsExists ? (
                                <div className="row">
                                    <div className="col-lg-8 col-12">
                                        {isSM ? (
                                            products.map((product, i) => (
                                                <MobileView
                                                    handleChangeCount={handleChangeCount(
                                                        product.id,
                                                    )}
                                                    product={product}
                                                    key={product.id}
                                                />
                                            ))
                                        ) : (
                                            <Table className={styles.table}>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Товары</th>
                                                        <th>Цена</th>
                                                        <th>Кол-во</th>
                                                        <th>Сумма</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {products.map(
                                                        (product, i) => (
                                                            <ProductRow
                                                                handleChangeCount={handleChangeCount(
                                                                    product.id,
                                                                )}
                                                                product={
                                                                    product
                                                                }
                                                                key={product.id}
                                                                idx={i}
                                                            />
                                                        ),
                                                    )}
                                                </tbody>
                                            </Table>
                                        )}
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-8 col-12">
                                        <h4>
                                            Итого: <b>{totalSum}</b> руб.
                                        </h4>
                                        <form>
                                            <Input
                                                name="name"
                                                placeholder="Ваше Имя"
                                            />
                                            <Input
                                                name="phone"
                                                placeholder="Ваш Номер"
                                                required
                                            />
                                            <Button
                                                type="submit"
                                                variant="primary"
                                            >
                                                Оформить заказ
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <h4>Ваша корзина пуста</h4>
                                    <Button
                                        className="mt-4"
                                        variant="primary"
                                        isLink={{ href: '/catalog' }}
                                    >
                                        Перейти к покупкам
                                    </Button>
                                </div>
                            )}
                        </>
                    )}
                </Container>
            </section>
        </>
    )
}

export default CartPage
