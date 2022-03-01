import { InferGetStaticPropsType } from 'next'
import React from 'react'

import { getAllContents } from '@/lib/mdx'

import ContentCard from '@/components/card/ContentCard'

const Projects = ({
    projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <section className='layout my-16'>
                <h1 className='font-serif text-4xl font-light md:text-6xl'>
                    my projects
                </h1>

                {/* #region  /**=========== Project List =========== */}
                <ul className='my-16 grid gap-4 md:grid-cols-2'>
                    {projects.map((project, i) => (
                        <li key={i}>
                            <ContentCard
                                slug={project.slug}
                                type='projects'
                                title={project.frontmatter.title}
                                description={project.frontmatter.description}
                                imageURL={project.frontmatter.imageURL}
                                category={project.frontmatter.category}
                            />
                        </li>
                    ))}
                </ul>
                {/* #endregion  /**======== Project List =========== */}
            </section>
        </div>
    )
}

export const getStaticProps = async () => {
    const projects = getAllContents('projects')

    return {
        props: {
            projects,
        },
    }
}

export default Projects
