import * as React from 'react'
import { RiAlarmWarningFill } from 'react-icons/ri'

import ArrowLink from '@/components/links/ArrowLink'

export default function NotFoundPage() {
    return (
        <section className=''>
            <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
                <RiAlarmWarningFill
                    size={60}
                    className='drop-shadow-glow animate-flicker text-red-500'
                />
                <h1 className='mt-8 font-serif text-4xl md:text-6xl'>
                    page not found
                </h1>
                <ArrowLink
                    className='mt-4 font-light uppercase md:text-lg'
                    href='/'
                >
                    Back to Home
                </ArrowLink>
            </div>
        </section>
    )
}
