import { useTheme } from 'next-themes'
import * as React from 'react'

import HomeGraphics from '@/components/HomeGraphics'

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

export default function HomePage() {
    const { resolvedTheme } = useTheme()

    return (
        <>
            <section className='py-16'>
                <div className='layout flex flex-wrap items-center justify-center gap-16 md:flex-row'>
                    <HomeGraphics />
                    <div>
                        <h1 className='mb-4 font-serif text-7xl font-normal lowercase tracking-wider text-primary-800 dark:text-primary-100'>
                            {!!resolvedTheme &&
                                (resolvedTheme === 'light'
                                    ? 'Good Morning'
                                    : 'Good Evening')}
                        </h1>
                        <h2 className='text-2xl font-light uppercase'>
                            Welcome to my portfolio!
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}
