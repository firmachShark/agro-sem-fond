import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useMemo } from 'react'
import { Pagination } from 'src/components/pagination'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Card } from 'src/components/card'
import { Container } from 'src/components/layout/container'
import { ICategory, IProduct, ISubcategory } from 'src/models'
import { ProductsCarousel } from 'src/sections/products/ProductsCarousel'
import categoryService from 'src/services/category-service'
import productService from 'src/services/product-service'
import { parseURL } from 'utils/parseURL'
import styles from './Category.module.scss'
import { convertFromQuery } from 'utils/convertFromQuery'
import { Filters } from 'src/components/catalog-filters/Filters'
import { Loader } from 'src/components/loader'
import { usePageLoading } from 'src/hooks/usePageLoading'

export const FILTERS = {
    SUBCATEGORY: 'filter[subcategory]',
}

interface CategoryState {
    category: ICategory
    subcategories: ISubcategory[]
    products: IProduct[]
    newProducts: IProduct[]
    pagination: {
        page: number
        total: number
    }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const param = context.params?.categoryName
    const name = Array.isArray(param) ? param[0] : param || ''
    const parsedName = parseURL(name)

    const page = Number(context.query.page)

    const [subcategoryFilter] = convertFromQuery<Array<number> | null>(
        context.query[FILTERS.SUBCATEGORY] as string,
        null,
    )

    const category = await categoryService.getByName(parsedName)
    const { products, pagination } = await productService.getByCategoryName(
        parsedName,
        {
            page: Number.isNaN(page) ? 0 : page,
            subcategoryFilters: {
                ...(subcategoryFilter
                    ? {
                          id: {
                              $in: subcategoryFilter.length
                                  ? subcategoryFilter
                                  : [-1],
                          },
                      }
                    : {}),
            },
        },
    )

    const newProducts = await productService.getByFlag('isNew', parsedName)

    if (!category)
        return {
            notFound: true,
        }

    return {
        props: {
            category,
            subcategories: category.subcategories,
            products,
            newProducts,
            pagination: {
                page: pagination.page,
                total: pagination.pageCount,
            },
        },
    }
}

const Category: NextPage<CategoryState> = ({
    category,
    subcategories,
    pagination,
    products,
    newProducts,
}) => {
    const loading = usePageLoading('catalog')

    const [slidesToShow, slidesToShow_xl, slidesToShow_sm] = useMemo(() => {
        const count = []

        for (let i = 3; i > 0; i--) {
            count.push(newProducts.length > 3 ? i : newProducts.length)
        }

        return [count[0], count[1], count[2]] as const
    }, [newProducts])

    const title =
        'Каталог - ' +
        category.name.slice(0, 1).toUpperCase() +
        category.name.slice(1)

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <section className={styles.section}>
                {loading && <Loader />}
                <Breadcrumbs />
                <Container>
                    <div className={styles.main}>
                        <Filters subcategories={subcategories} />
                        <div className={styles.content}>
                            {!!newProducts.length && (
                                <div className="order-lg-0 order-1 mt-lg-0 mt-3">
                                    <h3 className="text-lg-start text-center">
                                        Новинки
                                    </h3>
                                    <ProductsCarousel
                                        isNew
                                        products={newProducts}
                                        carouselProps={{
                                            slidesToShow,
                                            variableWidth: true,
                                            responsive: [
                                                {
                                                    breakpoint: 1200,
                                                    settings: {
                                                        slidesToShow:
                                                            slidesToShow_xl,
                                                    },
                                                },
                                                {
                                                    breakpoint: 575,
                                                    settings: {
                                                        slidesToShow:
                                                            slidesToShow_sm,
                                                    },
                                                },
                                            ],
                                        }}
                                    />
                                </div>
                            )}
                            <h3 className="text-lg-start text-cente mb-2">
                                {category.fullName}
                            </h3>
                            {products.length ? (
                                <div className={styles.products}>
                                    {products.map((product) => {
                                        return (
                                            <Card
                                                key={product.id}
                                                description={!!product.props}
                                                isNew={product.isNew}
                                                product={product}
                                            />
                                        )
                                    })}
                                </div>
                            ) : (
                                <h4 className="mt-3 text-lg-start text-center">
                                    Товары не найдены.
                                </h4>
                            )}
                            <div className="d-flex justify-content-center mt-3 order-5">
                                <Pagination
                                    page={pagination.page}
                                    total={pagination.total}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Category
