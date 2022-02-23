import clsx from 'clsx'
import { NextPage } from 'next'
import { useTheme } from 'next-themes'
import React from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const DarkModeToggle: NextPage = () => {
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
                'p-1 text-lg'
            )}
        >
            {icon}
        </button>
    )
}

export default DarkModeToggle
