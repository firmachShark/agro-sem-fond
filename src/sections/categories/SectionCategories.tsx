import Link from 'next/link'
import React from 'react'
import { Container } from 'src/components/layout/container'
import { ICategory } from 'src/models/ICatergory'
import { concatClass } from 'utils/concatClass'
import styles from './SectionCategories.module.scss'

interface SectionCategoriesProps {
    categories: ICategory[]
    title: string
    withBg?: boolean
}

export const SectionCategories: React.FC<SectionCategoriesProps> = ({
    categories,
    title,
    withBg,
}) => {
    return (
        <section
            className={concatClass([
                styles.section,
                withBg ? styles.bg : undefined,
            ])}
        >
            <Container>
                <h2 className="section__title">{title}</h2>
                <div className={styles.items}>
                    {categories.map((category) => (
                        <Link
                            href={'/catalog/' + category.href}
                            key={category.id}
                            className={styles.item}
                            style={{
                                backgroundImage: category.preview
                                    ? `url(${category.preview.url})`
                                    : 'none',
                            }}
                        >
                            <div>
                                <h6>{category.fullName}</h6>
                                <div>
                                    <h4>{category.name}</h4>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    )
}
