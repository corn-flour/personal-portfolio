import { NextPage } from 'next'
import { useTheme } from 'next-themes'
import React from 'react'

const DarkModeToggle: NextPage = () => {
    const { theme, setTheme } = useTheme()

    return (
        <button
            type='button'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
    )
}

export default DarkModeToggle
