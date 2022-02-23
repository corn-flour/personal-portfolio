import clsx from 'clsx'
import { NextPage } from 'next'
import { useTheme } from 'next-themes'
import React from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

type DarkModeToggleType = {
    className?: string
    label?: string | React.ReactNode
}

const DarkModeToggle: NextPage<DarkModeToggleType> = ({ className, label }) => {
    const { theme, setTheme } = useTheme()

    const icon = theme === 'dark' ? <BsSunFill /> : <BsMoonFill />

    return (
        <button
            aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={clsx(
                theme === 'dark'
                    ? 'text-orange-400 hover:text-orange-200'
                    : 'text-blue-400 hover:text-blue-600',
                'p-1 text-lg transition-all duration-300',
                className
            )}
        >
            {label}
            {icon}
        </button>
    )
}

export default DarkModeToggle
