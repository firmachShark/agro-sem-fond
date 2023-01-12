import { Container } from 'src/components/layout/container'
import { IPost } from 'src/models/IBlog'
import { BlogItem } from './BlogItem'
import styles from './SectionBlog.module.scss'

interface SectionBlogProps {
    posts: IPost[]
    title: string
}

export const SectionBlog: React.FC<SectionBlogProps> = ({ title, posts }) => {
    return (
        <section className={styles.section}>
            <Container>
                <h2 className="section__title mb-3">{title}</h2>
                <div className="row">
                    {posts.map((post) => {
                        return (
                            <div
                                key={post.id}
                                className="col-lg-4 col-sm-6 col-12 mt-4"
                            >
                                <BlogItem post={post} />
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
