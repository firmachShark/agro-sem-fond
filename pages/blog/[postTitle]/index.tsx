import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Breadcrumbs } from 'src/components/breadcrumbs'
import { Img } from 'src/components/img'
import { Container } from 'src/components/layout/container'
import { IPost } from 'src/models/IBlog'
import { SectionBlog } from 'src/sections'
import blogService from 'src/services/blog-service'
import { parseURL } from 'utils/parseURL'
import styles from './PostPage.module.scss'

interface PostPageProps {
    post: IPost
    posts: IPost[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const title = parseURL(context.query.postTitle as string)

    const post = await blogService.getByTitle(title)

    if (!post) {
        return {
            notFound: true,
        }
    }

    const posts = await blogService.getAll({
        pagination: { limit: 3 },
        filters: { title: { $ne: title } },
    })

    return {
        props: {
            post,
            posts,
        },
    }
}

const PostPage: NextPage<PostPageProps> = ({ post, posts }) => {
    const pageTitle = post.title

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Breadcrumbs />
            <section className={styles.section}>
                <Container>
                    {post.preview && (
                        <Img
                            className={styles.preview}
                            width={post.preview.width}
                            height={post.preview.height}
                            src={post.preview.url}
                            alt={post.title}
                        />
                    )}
                    <h1 className={styles.title}>{post.title}</h1>
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>
                </Container>
            </section>
            <SectionBlog posts={posts} title={'Еще статьи'} />
        </>
    )
}

export default PostPage
