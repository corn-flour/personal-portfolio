import clsx from 'clsx'
import { NextPage } from 'next'
import { useTheme } from 'next-themes'
import React from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { animated, useSpring } from 'react-spring'

import { useLoaded } from '@/hooks/useLoaded'

type DarkModeToggleType = {
    className?: string
    label?: string | React.ReactNode
}

const DarkModeIcon = () => {
    const { theme } = useTheme()
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
    const icon = theme === 'dark' ? <BsSunFill /> : <BsMoonFill />

    return (
        <animated.div style={props} key={theme}>
            {icon}
        </animated.div>
    )
}

const DarkModeToggle: NextPage<DarkModeToggleType> = ({ className, label }) => {
    const { theme, setTheme } = useTheme()
    const loaded = useLoaded()

    // * Toggle would not work properly with server side rendering, can only render when client is loaded
    if (!loaded) return <button></button>

    return (
        <button
            aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={clsx(
                theme === 'dark'
                    ? 'text-orange-400 hover:text-orange-200'
                    : 'text-blue-400 hover:text-blue-600',
                'rounded-full p-2 text-lg transition-all duration-300',
                className
            )}
        >
            {label}
            <DarkModeIcon key={theme} />
        </button>
    )
}

export default DarkModeToggle
