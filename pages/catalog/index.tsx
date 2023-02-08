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
    newProducts: IProduct[]
}

export const getStaticProps: GetStaticProps = async () => {
    const categories = await categoryService.getAll()
    const newProducts = await productService.getByFlag('isNew')

    return {
        revalidate: 60,
        props: {
            categories,
            newProducts,
        },
    }
}

const Catalog: NextPage<CatalogState> = ({ categories, newProducts }) => {
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
            <SectionProducts title="Новинки" isNew products={newProducts} />
        </>
    )
}

export default Catalog
