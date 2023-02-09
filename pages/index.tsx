import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { IPost } from 'src/models/IBlog'
import { ICategory } from 'src/models/ICatergory'
import { IProduct } from 'src/models/IProduct'
import { IReview } from 'src/models/IReview'
import { ISOverviewItem } from 'src/models/ISOverviewItem'
import {
    SectionOverview,
    SectionDelivery,
    SectionCategories,
    SectionProducts,
    SectionReviews,
    SectionCatalogMail,
    SectionConnect,
    SectionBlog,
    SectionAbout,
    SectionSubscription,
} from 'src/sections'
import blogService from 'src/services/blog-service'
import homePageService from 'src/services/home-page-service'
import productService from 'src/services/product-service'

interface HomePageProps {
    overviews: ISOverviewItem[]
    categories: ICategory[]
    newProducts: IProduct[]
    hitProducts: IProduct[]
    reviews: IReview[]
    posts: IPost[]
}

export const getStaticProps: GetStaticProps = async () => {
    const overviews = await homePageService.getOverviewData()
    const categories = await homePageService.getCategoriesData()
    const reviews = await homePageService.getReviewsData()
    const newProducts = await productService.getByFlag('isNew')
    const hitProducts = await productService.getByFlag('isHit')
    const posts = await blogService.getAll({ pagination: { limit: 3 } })

    return {
        props: {
            overviews,
            categories,
            newProducts,
            hitProducts,
            reviews,
            posts,
        },
        revalidate: 60,
    }
}

export const Home: NextPage<HomePageProps> = ({
    overviews,
    categories,
    newProducts,
    hitProducts,
    reviews,
    posts,
}) => {
    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>
            <SectionOverview items={overviews} />
            <SectionCategories
                withBg
                categories={categories}
                title="Популярные категории"
            />
            <SectionProducts isNew products={newProducts} title="Новинки" />
            <SectionReviews reviews={reviews} />
            <SectionDelivery />
            <SectionProducts isHit products={hitProducts} title="Хит продаж" />
            <SectionCatalogMail />
            <SectionConnect />
            <SectionBlog posts={posts} title="Полезно знать" />
            <SectionAbout />
            <SectionSubscription />
        </>
    )
}

export default Home
