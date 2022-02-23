import clsx from 'clsx'
import { NextPage } from 'next'
import { useTheme } from 'next-themes'
import React from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'
import { animated, useSpring } from 'react-spring'

import { useLoaded } from '@/hooks/useLoaded'

type DarkModeToggleType = {
    className?: string
    label?: string | React.ReactNode
}

const DarkModeIcon = () => {
    const { resolvedTheme } = useTheme()
    const props = useSpring({
        from: {
            opacity: 0,
            y: -24,
        },
        to: {
            opacity: 1,
            y: 0,
        },
    })
    const icon = resolvedTheme === 'dark' ? <BsSunFill /> : <BsMoonFill />

    return (
        <animated.div style={props} key={resolvedTheme}>
            {icon}
        </animated.div>
    )
}

const DarkModeToggle: NextPage<DarkModeToggleType> = ({ className, label }) => {
    const { resolvedTheme, setTheme } = useTheme()
    const loaded = useLoaded()

    // * Toggle would not work properly with server side rendering, can only render when client is loaded
    // Return placeholder button
    if (!loaded)
        return (
            <button
                aria-label='Placeholder button'
                disabled={true}
                className={clsx(
                    'rounded-full p-2 text-lg text-transparent transition-all duration-300',
                    className
                )}
            >
                {label}
                <RiCheckboxBlankCircleFill />
            </button>
        )

    return (
        <button
            aria-label={`Activate ${
                resolvedTheme === 'dark' ? 'light' : 'dark'
            } mode`}
            onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
            className={clsx(
                resolvedTheme === 'dark'
                    ? 'text-orange-400 hover:text-orange-200'
                    : 'text-blue-400 hover:text-blue-600',
                'rounded-full p-2 text-lg transition-all duration-300',
                className
            )}
        >
            {label}
            <DarkModeIcon key={resolvedTheme} />
        </button>
    )
}

export default DarkModeToggle
