import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { Carousel, Tab, Tabs } from 'react-bootstrap'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Container } from 'src/components/layout/container'
import { IProduct } from 'src/models'
import { SectionProducts } from 'src/sections'
import productService from 'src/services/product-service'
import { parseURL } from 'utils/parseURL'
import styles from './Product.module.scss'
import '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox.css'
import Link from 'next/link'
import { CountInput } from 'src/components/count-input'
import { Button } from 'src/components/button'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { ICart } from 'src/models/ICart'
import { localStorageWrapper } from 'utils/storage'
import cartApi from 'utils/cart'
import { concatClass } from 'utils/concatClass'
import { Calculator } from 'src/components/calculator'
import { useDispatchCreator } from 'src/hooks/useStore'
import { openModalOrder } from 'src/store/slices/modal-order.slice'
import { ProductReview } from 'src/components/productReview'
import { Input } from 'src/components/input'
import viewedApi from 'utils/viewedApi'

interface ProductPageProps {
    product: IProduct
    products: IProduct[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const parsedName = parseURL(context.query.productName as string)
    const categoryName = parseURL(context.query.categoryName as string)

    const product = await productService.getByName(parsedName, categoryName)

    if (!product) {
        return {
            notFound: true,
        }
    }

    const products = await productService.getByFlag(
        'isNew',
        categoryName,
        parsedName,
    )

    return {
        props: { product, products },
    }
}

const ProductPage: NextPage<ProductPageProps> = ({ product, products }) => {
    const {
        name,
        images,
        props,
        price: initialPrice,
        description,
        calculator,
    } = product
    const { dispatchOpenModalOrder } = useDispatchCreator({ openModalOrder })
    const title = `Каталог - ${name}`
    const [index, setIndex] = useState(0)

    const [price, setPrice] = useState(initialPrice)
    const [tabKey, setKey] = useState('description')

    const cart = useLocalStorage<ICart>('cart')
    const inCart = cart && !!cart[product.id]

    const [count, setCount] = useState(() => {
        const cart = localStorageWrapper.get<ICart>('cart')
        if (!cart) return 1

        const cartCount = cart[product.id]?.count
        return cartCount !== undefined ? cartCount : 1
    })

    const shortProps = useMemo(() => {
        if (!props) return null

        return Object.keys(props)
            .filter((key) => props[key].length <= 30)
            .slice(0, 4)
            .reduce(
                (result: Record<string, string>, key) => ({
                    ...result,
                    [key]: props[key],
                }),
                {},
            )
    }, [props])

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex)
    }

    const handleAddToCart = () => {
        cartApi.add(product.id, {
            count,
            price,
        })
    }

    const handleRemoveFromCart = () => {
        cartApi.remove(product.id)
        setCount(1)
    }

    const handleBuyClick = () => {
        dispatchOpenModalOrder({
            title: 'Купить в один клик',
            text: 'Оставьте заявку и наш менеджер с Вами свяжется!',
            addons: [
                {
                    name: 'product_id',
                    value: product.price_id.toString(),
                },
            ],
        })
    }

    useEffect(() => {
        viewedApi.add({ id: product.id })
    }, [product.id])

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <section className="pt-0">
                <Breadcrumbs />
                <Container
                    className={concatClass(['container', styles.container])}
                    itemScope
                    itemType="http://schema.org/Product"
                >
                    <h3
                        className={concatClass([
                            styles.title,
                            'ps-0 d-md-none d-block',
                        ])}
                        itemProp="name"
                    >
                        {name}
                    </h3>
                    <div className={styles.inner}>
                        <div>
                            {!!images?.length && (
                                <>
                                    <Carousel
                                        interval={null}
                                        activeIndex={index}
                                        onSelect={handleSelect}
                                        indicators={false}
                                    >
                                        {images.map((image, i) => (
                                            <Carousel.Item key={i}>
                                                <Image
                                                    itemProp={
                                                        i === 0 ? 'image' : ''
                                                    }
                                                    data-fancybox={name}
                                                    width={image.width}
                                                    height={image.height}
                                                    className={
                                                        styles.carousel_image
                                                    }
                                                    src={image.url}
                                                    alt={name}
                                                    placeholder="empty"
                                                />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                    <div className={styles.carousel_dots}>
                                        {images.map((image, i) => {
                                            const width =
                                                images.length > 3
                                                    ? 100 / images.length - 2
                                                    : 31

                                            return (
                                                <div
                                                    className={
                                                        i === index
                                                            ? styles.carousel_dot_active
                                                            : undefined
                                                    }
                                                    key={i}
                                                    style={{
                                                        width: `${width}%`,
                                                    }}
                                                >
                                                    <Image
                                                        onClick={() =>
                                                            handleSelect(i)
                                                        }
                                                        width={image.width}
                                                        height={image.height}
                                                        src={image.url}
                                                        alt={name}
                                                        placeholder="empty"
                                                    />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className={styles.info}>
                            <h3
                                className={concatClass([
                                    styles.title,
                                    'd-md-block d-none',
                                ])}
                            >
                                {name}
                            </h3>
                            <div className={styles.on_stock}>
                                <span>В наличии</span>
                                <div className={styles.buy_btn}>
                                    <Button
                                        variant="orange"
                                        onClick={handleBuyClick}
                                    >
                                        Купить в один клик
                                    </Button>
                                </div>
                                <div
                                    itemProp="offers"
                                    itemScope
                                    itemType="http://schema.org/Offer"
                                >
                                    <strong>
                                        <span itemProp="lowPrice">{price}</span>{' '}
                                        <span itemProp="priceCurrency">
                                            BYN
                                        </span>
                                        /шт
                                    </strong>
                                    {inCart ? (
                                        <>
                                            <Link href="/cart">
                                                <i
                                                    className="fa fa-check"
                                                    aria-hidden="true"
                                                ></i>
                                                В корзине
                                                {count > 1 && (
                                                    <b> ({count} шт.)</b>
                                                )}
                                            </Link>
                                            <Button
                                                variant="primary"
                                                bg="outline-primary"
                                                onClick={handleRemoveFromCart}
                                            >
                                                Убрать
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <CountInput
                                                value={count}
                                                setValue={setCount}
                                            />
                                            <Button
                                                variant="primary"
                                                onClick={handleAddToCart}
                                            >
                                                В корзину
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                            {calculator && (
                                <Calculator
                                    data={calculator}
                                    setPrice={setPrice}
                                />
                            )}
                            <div className={styles.content}>
                                {shortProps && (
                                    <ul className={styles.short_props}>
                                        {Object.keys(shortProps).map(
                                            (key, i) => (
                                                <li
                                                    key={key}
                                                    style={{
                                                        animationDelay: `${
                                                            (i + 1) * 300
                                                        }ms`,
                                                    }}
                                                >
                                                    <span>{key}</span>
                                                    <hr />
                                                    <b>{shortProps[key]}</b>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                )}
                                <div className={styles.delivery}>
                                    <div>
                                        <Link href="/payment">Оплата</Link>
                                        <p>
                                            банковской картой, электронными
                                            деньгами или наложенным платежом
                                        </p>
                                    </div>
                                    <div>
                                        <Link href="/delivery">
                                            Удобная доставка
                                        </Link>
                                        <p>
                                            Различные способы доставки на любой
                                            вкус
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 col-12">
                            <Tabs
                                id="product-tabs"
                                className="mt-3"
                                activeKey={tabKey}
                                onSelect={(k) => setKey(k as string)}
                            >
                                <Tab
                                    eventKey="description"
                                    title="Описание"
                                    className={styles.description}
                                    dangerouslySetInnerHTML={{
                                        __html: description,
                                    }}
                                />
                                {props && (
                                    <Tab
                                        eventKey="params"
                                        title="Характеристики"
                                    >
                                        <ul
                                            className={concatClass([
                                                styles.short_props,
                                                'mw-100',
                                            ])}
                                        >
                                            {Object.keys(props).map(
                                                (key, i) => (
                                                    <li
                                                        key={key}
                                                        style={{
                                                            animationDelay: `${
                                                                i * 200
                                                            }ms`,
                                                        }}
                                                    >
                                                        <span>{key}</span>
                                                        <b>{props[key]}</b>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </Tab>
                                )}
                                <Tab eventKey="reviews" title="Отзывы">
                                    <ProductReview
                                        isOpen={tabKey === 'reviews'}
                                        productId={product.id}
                                    />
                                </Tab>
                            </Tabs>
                        </div>
                        <div className="col-md-5 col-12 pt-5">
                            <form className={styles.form}>
                                <h4>Оставьте заявку чтобы купить!</h4>
                                <Input
                                    type="hidden"
                                    value={product.price_id}
                                    name="product_id"
                                />
                                <Input name="name" placeholder="Ваше Имя" />
                                <Input
                                    name="phone"
                                    placeholder="Ваш Номер"
                                    required
                                />
                                <Button type="submit" variant="primary">
                                    Отправить
                                </Button>
                            </form>
                        </div>
                    </div>
                </Container>
                <SectionProducts products={products} isNew title="Новинки" />
            </section>
        </>
    )
}

export default ProductPage
