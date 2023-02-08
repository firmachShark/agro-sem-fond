import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { IPost } from 'src/models/IBlog'
import { SectionBlog } from 'src/sections'
import blogService from 'src/services/blog-service'

interface BlogPageProps {
    posts: IPost[]
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await blogService.getAll()

    return {
        props: {
            posts,
        },
        revalidate: 60,
    }
}

const Blog: NextPage<BlogPageProps> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>Блог</title>
            </Head>
            <Breadcrumbs />
            <SectionBlog posts={posts} title="Полезные статьи" />
        </>
    )
}

export default Blog
