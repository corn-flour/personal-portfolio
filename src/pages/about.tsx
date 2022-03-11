import { NextPage } from 'next'
import React from 'react'

import ButtonLink from '@/components/links/ButtonLink'
import UnderlineLink from '@/components/links/UnderlineLink'
import NextImage from '@/components/NextImage'
import ListItem from '@/components/text/ListItem'
import Paragraph from '@/components/text/Paragraph'

// update here to change skillset list
const skillsets = [
    'HTML',
    'CSS/SCSS',
    'JavaScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Redux',
    'Go',
    'REST API',
    'php',
    'Joomla',
]

const About: NextPage = () => {
    return (
        <>
            {/* #region  /**=========== About Me Section =========== */}
            <section className='layout-left flex flex-col-reverse gap-8 md:flex-row lg:gap-16'>
                <div className='flex items-center md:flex-1'>
                    <div>
                        <h1 className='font-serif text-2xl font-light md:mb-12 md:text-right md:text-4xl lg:text-6xl'>
                            about me
                        </h1>
                        <Paragraph className='md:mr-[10%]'>
                            I am a Web developer currently living and working in
                            Vancouver, Canada. I amd a recent graduate of
                            Fairleigh Dickinson University, Vancouver campus
                            with a Bachelor of Science in Information
                            Technology. I enjoy coding, learning about new
                            technology, and I enjoy creating things. Nice to
                            meet you!
                        </Paragraph>

                        <Paragraph className='md:mr-[10%]'>
                            I started learning about web development back in
                            September 2020, and made my first client website in
                            early 2021 as a part-time developer in Sandman
                            Media. Since then, I have had the chance to work
                            with numerous clients, and have&nbsp;
                            <UnderlineLink href='/projects'>
                                learnt and grown
                            </UnderlineLink>
                            &nbsp;a lot along the way.
                        </Paragraph>

                        <Paragraph className='md:mr-[10%]'>
                            If you are interested in working together,&nbsp;
                            <UnderlineLink href='/contact'>
                                let&apos;s get in touch!
                            </UnderlineLink>
                        </Paragraph>

                        <ButtonLink
                            variant='outline'
                            href='/pdf/resume.pdf'
                            openNewTab={true}
                            className='text-sm font-normal uppercase'
                        >
                            my resume
                        </ButtonLink>
                    </div>
                </div>

                <NextImage
                    useSkeleton
                    src='/images/self.jpg'
                    className='w-full md:flex-1'
                    width='967'
                    height='967'
                    alt='My picture'
                    priority={true}
                />
            </section>
            {/* #endregion  /**======== About Me Section =========== */}

            {/* #region  /**=========== Skillset Section =========== */}
            <section className='layout py-32'>
                <h2 className='font-serif text-xl font-light md:text-4xl'>
                    my skillset
                </h2>

                <ul className='mt-8 grid grid-cols-2 gap-8 md:grid-cols-4'>
                    {skillsets.map((skill, i) => (
                        <ListItem key={i} className='font-light'>
                            {skill}
                        </ListItem>
                    ))}
                </ul>
            </section>
            {/* #endregion  /**======== Skillset Section =========== */}
        </>
    )
}

export default About
