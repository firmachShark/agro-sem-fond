import styles from './SectionBlog.module.scss'

import React, { useMemo } from 'react'
import { IPost } from 'src/models/IBlog'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'src/components/button'
import ROUTES from 'src/constants/routes'

interface BlogItemProps {
    post: IPost
}

export const BlogItem: React.FC<BlogItemProps> = ({ post }) => {
    const href = `${ROUTES.blog}/${post.href}`
    const content = useMemo(() => {
        return post.content
            .replace(/<([\s\S]*?)>/g, '')
            .split('.')[0]
            .slice(0, 100)
            .concat(' ...')
    }, [post])

    return (
        <article key={post.id} className={styles.item}>
            <Link href={href} className={styles.preview}>
                <Image
                    width={600}
                    height={600}
                    src={post.preview?.url || ''}
                    alt={post.title}
                    placeholder="empty"
                />
            </Link>
            <Link href={href} className={styles.title}>
                {post.title}
            </Link>
            <p>{content}</p>
            <div className="row justify-content-center">
                <Button
                    variant="orange"
                    className="w-auto mt-3"
                    isLink={{ href }}
                >
                    Подробнее
                </Button>
            </div>
        </article>
    )
}
