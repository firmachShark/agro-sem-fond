import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { ICategory, IProduct } from 'src/models'
import { SectionCategories, SectionProducts } from 'src/sections'
import categoryService from 'src/services/category-service'
import productService from 'src/services/product-service'

interface CatalogState {
    categories: ICategory[]
    hitProducts: IProduct[]
}

export const getStaticProps: GetStaticProps = async () => {
    const categories = await categoryService.getAll()
    const hitProducts = await productService.getByFlag('isHit')

    return {
        revalidate: 60,
        props: {
            categories,
            hitProducts,
        },
    }
}

const Catalog: NextPage<CatalogState> = ({ categories, hitProducts }) => {
    return (
        <>
            <Head>
                <title>Каталог товаров</title>
            </Head>
            <Breadcrumbs />
            <SectionCategories
                categories={categories}
                title="Категории товаров"
            />
            <SectionProducts title="Хиты продаж" isHit products={hitProducts} />
        </>
    )
}

export default Catalog
