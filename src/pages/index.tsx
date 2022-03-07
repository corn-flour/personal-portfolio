import { InferGetStaticPropsType } from 'next'
import * as React from 'react'

import { getAllContents } from '@/lib/mdx'

import ContentCard from '@/components/card/ContentCard'
import HomeGraphics from '@/components/HomeGraphics'
import ArrowLink from '@/components/links/ArrowLink'
import ButtonLink from '@/components/links/ButtonLink'
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
            <section>
                <div className='layout flex flex-col-reverse items-center justify-between gap-16 pt-20 pb-40 lg:flex-row'>
                    <HomeGraphics className='flex-1' />
                    <div className='flex flex-col items-end'>
                        <h1 className='mb-4 font-serif text-7xl font-normal lowercase tracking-wider text-primary-800 dark:text-primary-100'>
                            harry nguyen
                        </h1>
                        <p className='text-xl font-light uppercase'>
                            full stack web developer
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className='bg-light py-32'>
                    <div className='layout'>
                        <h2 className='mb-8 font-serif text-xl font-normal lowercase md:text-3xl'>
                            Welcome to my portfolio!
                        </h2>
                        <ArrowLink
                            href='/about'
                            className='font-light uppercase md:text-lg'
                        >
                            about me
                        </ArrowLink>
                    </div>
                </div>
            </section>

            <section className='layout my-16 flex flex-col items-start'>
                <h2 className='mb-8 font-serif text-xl font-normal lowercase md:text-3xl'>
                    featured project
                </h2>

                <ContentCard
                    slug={featured.slug}
                    type='projects'
                    title={featured.frontmatter.title}
                    description={featured.frontmatter.description}
                    imageURL={featured.frontmatter.imageURL}
                    category={featured.frontmatter.category}
                />

                <UnderlineLink
                    href='/projects'
                    className='mt-12 self-center font-light uppercase md:text-lg'
                >
                    see all projects
                </UnderlineLink>
            </section>

            <section className='layout py-16'>
                <h2 className='mb-8 font-serif text-xl font-normal lowercase md:text-3xl'>
                    let&apos;s work together!
                </h2>
                <ButtonLink variant='outline' href='/contact'>
                    contact me
                </ButtonLink>
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
