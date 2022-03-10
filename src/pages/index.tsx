import { InferGetStaticPropsType } from 'next'
import * as React from 'react'

import { getAllContents } from '@/lib/mdx'

import ContentCard from '@/components/card/ContentCard'
import HomeGraphics from '@/components/HomeGraphics'
import ArrowLink from '@/components/links/ArrowLink'
import ButtonLink from '@/components/links/ButtonLink'
import Timeline from '@/components/Timeline'

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
    const features = projects.filter((project) => project.frontmatter.featured)

    return (
        <>
            <section>
                <div className='layout flex flex-col-reverse items-center justify-between gap-16 pt-20 pb-40 lg:flex-row'>
                    <HomeGraphics className='flex-1' />
                    <div className='flex flex-col items-end'>
                        <h1 className='mb-4 font-serif text-7xl font-normal lowercase tracking-wider'>
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
                        <h2 className='mb-4 font-serif text-xl font-semibold lowercase md:text-3xl'>
                            Welcome to my portfolio!
                        </h2>
                        <p className='mb-4 text-lg font-light'>
                            I&#39;m a junior developer who enjoys coding and
                            making things.
                        </p>
                        <ArrowLink
                            href='/about'
                            className='mt-4 font-light uppercase md:text-lg'
                        >
                            more about me
                        </ArrowLink>
                    </div>
                </div>
            </section>

            <section className='layout my-32'>
                <h2 className='mb-12 text-center font-serif text-xl font-semibold lowercase md:text-3xl'>
                    my experience
                </h2>

                <Timeline />
            </section>

            <section className='bg-light flex flex-col items-start py-32'>
                <div className='layout'>
                    <h2 className='mb-8 font-serif text-xl font-semibold lowercase md:text-3xl'>
                        i also make some side projects
                    </h2>

                    <div className='grid gap-4 md:grid-cols-2 '>
                        {features.map(
                            ({
                                slug,
                                frontmatter: {
                                    type,
                                    title,
                                    description,
                                    imageURL,
                                    category,
                                },
                            }) => (
                                <ContentCard
                                    key={slug}
                                    {...{
                                        slug,
                                        type,
                                        title,
                                        description,
                                        imageURL,
                                        category,
                                    }}
                                />
                            )
                        )}
                    </div>

                    <ButtonLink
                        variant='outline'
                        href='/projects'
                        className='mt-4'
                    >
                        see more projects
                    </ButtonLink>
                </div>
            </section>

            <section className='py-32'>
                <div className='layout flex flex-col items-center'>
                    <h2 className='mb-8 font-serif text-xl font-semibold lowercase md:text-3xl'>
                        let&apos;s work together!
                    </h2>
                    <ButtonLink variant='outline' href='/contact'>
                        contact me
                    </ButtonLink>
                </div>
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
