import { NextPage } from 'next'
import React from 'react'

import ContactForm from '@/components/ContactForm'
import SocialList from '@/components/SocialList'
import Paragraph from '@/components/text/Paragraph'

const Contact: NextPage = () => {
    return (
        <section className='layout mt-16 mb-32 flex flex-col gap-4 md:flex-row md:gap-16'>
            <div className='flex-1'>
                <h1 className='font-serif text-5xl font-light lg:text-6xl'>
                    contact me
                </h1>
                <Paragraph>
                    If you are interested in collaborating with me, or just want
                    to hang out, feel free to reach me through my email or
                    social links below. You can also send me a message using the
                    form here!
                </Paragraph>

                <SocialList
                    containerClass='flex gap-4 items-end'
                    iconClass='text-2xl'
                />
            </div>

            <div className='flex-1'>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact
