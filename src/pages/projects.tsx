import { InferGetStaticPropsType } from 'next'
import React, { useEffect } from 'react'

import clsxm from '@/lib/clsxm'
import { getAllContents } from '@/lib/mdx'

import ContentCard from '@/components/card/ContentCard'

const filters = [
    {
        name: 'all',
        val: '',
    },
    {
        name: 'web',
        val: 'web',
    },
    {
        name: 'other',
        val: 'other',
    },
]

const Projects = ({
    projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [filter, setFilter] = React.useState<string>('')
    const [filteredProjects, setFilteredProjects] = React.useState(projects)

    useEffect(() => {
        setFilteredProjects(
            projects.filter((project) => {
                return filter === ''
                    ? true
                    : project.frontmatter.category === filter
            })
        )
    }, [filter, projects])

    return (
        <div>
            <section className='layout my-16'>
                <h1 className='font-serif text-4xl font-light md:text-6xl'>
                    my projects
                </h1>

                {/* #region  /**=========== Category Filter =========== */}
                <div className='mt-16 mb-4 flex gap-4'>
                    {filters.map((f, i) => (
                        <button
                            key={i}
                            onClick={() => setFilter(f.val)}
                            className={clsxm(
                                'bg-light py-2 px-8',
                                'text-xs font-light uppercase',
                                'transition-colors',
                                'hover:bg-zinc-400 dark:hover:bg-zinc-500',
                                f.val === filter &&
                                    'bg-primary-400 hover:bg-primary-500 dark:bg-primary-700 dark:hover:bg-primary-600'
                            )}
                        >
                            {f.name}
                        </button>
                    ))}
                </div>
                {/* #endregion  /**======== Category Filter =========== */}

                {/* #region  /**=========== Project List =========== */}
                <ul className='mb-16 grid gap-8 md:grid-cols-2'>
                    {filteredProjects.map((project, i) => (
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
