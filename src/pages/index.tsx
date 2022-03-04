import { InferGetStaticPropsType } from 'next'
import * as React from 'react'

import { getAllContents } from '@/lib/mdx'

import ContentCard from '@/components/card/ContentCard'
import HomeGraphics from '@/components/HomeGraphics'
import UnderlineLink from '@/components/links/UnderlineLink'

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const Home = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
    // get featured project
    // only display one
    const featured = projects.filter(
        (project) => project.frontmatter.featured
    )[0]

    return (
        <>
            <section className='py-16'>
                <div className='layout flex flex-wrap items-center justify-center gap-16 md:flex-row'>
                    <HomeGraphics />
                    <div>
                        <span>Hi, my name is</span>
                        <h1 className='mb-4 font-serif text-7xl font-normal lowercase tracking-wider text-primary-800 dark:text-primary-100'>
                            huy anh nguyen,
                        </h1>
                        <p className='text-2xl font-light uppercase'>
                            and I am a web developer!
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className='layout py-16'>
                    <h2>Welcome to my portfolio!</h2>
                    <UnderlineLink href='/about'>about me</UnderlineLink>
                </div>
            </section>

            <section className='layout my-16'>
                <h2>my featured project</h2>

                <ContentCard
                    slug={featured.slug}
                    type='projects'
                    title={featured.frontmatter.title}
                    description={featured.frontmatter.description}
                    imageURL={featured.frontmatter.imageURL}
                    category={featured.frontmatter.category}
                />

                <UnderlineLink href='/projects'>see more</UnderlineLink>
            </section>

            <section className='layout py-16'>
                <h2>let&apos;s work together!</h2>
                <UnderlineLink href='/contact'>Contact me</UnderlineLink>
            </section>
        </>
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

export default Home
