import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

import clsxm from '@/lib/clsxm'
import { getAllContents, getSingleContent } from '@/lib/mdx'

import UnderlineLink from '@/components/links/UnderlineLink'
import NextImage from '@/components/NextImage'

type ProjectPageProps = {
    code: string
    frontmatter: {
        slug: string
        title: string
        description: string
        imageURL: string
        tech?: string
        demoURL?: string
        githubURL?: string
    }
}

const ProjectPage = ({ code, frontmatter }: ProjectPageProps) => {
    const Component = React.useMemo(() => getMDXComponent(code), [code])

    return (
        <section className='layout my-16'>
            <NextImage
                src={frontmatter.imageURL}
                alt={frontmatter.title}
                width={1920}
                height={1080}
                className={clsxm('my-8 h-auto w-full')}
            />
            {/* #region  /**=========== Article meta information =========== */}
            <div className='my-8'>
                <h1 className='mb-4 font-serif text-4xl'>
                    {frontmatter.title}
                </h1>
                {!!frontmatter.tech && <p>{frontmatter.tech}</p>}
                {!!frontmatter.githubURL && (
                    <UnderlineLink
                        href={frontmatter.githubURL}
                        className='mr-4'
                    >
                        Source code
                    </UnderlineLink>
                )}
                {!!frontmatter.demoURL && (
                    <UnderlineLink href={frontmatter.demoURL}>
                        Demo
                    </UnderlineLink>
                )}
                <p>{frontmatter.description}</p>
            </div>
            {/* #endregion  /**======== Article meta information =========== */}

            <article className='prose prose-zinc w-full max-w-none prose-p:font-light dark:prose-invert'>
                <Component />
            </article>
        </section>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const projects = getAllContents('projects')
    const paths = projects.map(({ slug }) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getSingleContent(params?.slug as string, 'projects')
    return {
        props: { ...post },
    }
}

export default ProjectPage
