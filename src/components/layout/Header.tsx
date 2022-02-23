import clsx from 'clsx'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useState } from 'react'

import UnstyledLink from '@/components/links/UnstyledLink'

import DarkModeToggle from '../DarkModeToggle'
import UnderlineLink from '../links/UnderlineLink'

const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/contact', label: 'contact' },
]

type MobileMenuProps = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu: NextPage<MobileMenuProps> = ({ open, setOpen }) => {
    const router = useRouter()

    return (
        <div
            className={clsx(
                open ? 'left-0' : 'left-full',
                'fixed top-0 z-20 flex h-screen w-screen flex-col items-start justify-between bg-white pr-12 pt-28 pl-12 pb-12 transition-all duration-300 dark:bg-slate-800 sm:hidden'
            )}
        >
            <ul className='flex flex-col gap-8 '>
                {links.map(({ href, label }) => (
                    <li key={`${href}${label}`}>
                        <UnderlineLink
                            href={href}
                            className={clsx(
                                'font-serif text-2xl font-light tracking-wide hover:text-emerald-700 dark:hover:text-emerald-500',
                                router.asPath === href
                                    ? 'text-emerald-600 dark:text-emerald-400'
                                    : ''
                            )}
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </UnderlineLink>
                    </li>
                ))}
            </ul>

            <div className='w-full border-t-[1px] border-slate-400 pt-4'>
                <DarkModeToggle
                    className='flex items-center gap-4 text-2xl'
                    label={
                        <span className='text-lg font-thin text-slate-500'>
                            Toggle Theme:
                        </span>
                    }
                />
            </div>
        </div>
    )
}

const Header: NextPage = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const router = useRouter()

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className='sticky top-0 z-50 bg-white dark:bg-slate-800'>
            <div className='layout flex items-center justify-between py-8'>
                <UnstyledLink
                    href='/'
                    className='font-serif text-3xl tracking-wider transition-all duration-300 hover:text-emerald-600'
                >
                    harry
                </UnstyledLink>

                {/* #region  /**=========== Desktop Menu =========== */}
                <nav className='hidden sm:block'>
                    <ul className='flex items-center justify-between space-x-8'>
                        {links.map(({ href, label }) => (
                            <li key={`${href}${label}`}>
                                <UnderlineLink
                                    href={href}
                                    className={clsx(
                                        'font-serif text-sm font-light tracking-wide hover:text-emerald-700 dark:hover:text-emerald-500',
                                        router.asPath === href
                                            ? 'text-emerald-600 dark:text-emerald-400'
                                            : ''
                                    )}
                                >
                                    {label}
                                </UnderlineLink>
                            </li>
                        ))}
                        <li className='flex items-center'>
                            <DarkModeToggle />
                        </li>
                    </ul>
                </nav>
                {/* #endregion  /**======== Desktop Menu =========== */}

                {/* #region  /**=========== Mobile Menu =========== */}
                <button
                    className={clsx(
                        'absolute right-0 z-50 text-3xl hover:text-emerald-600 sm:hidden',
                        menuOpen ? 'opened' : '',
                        'menu'
                    )}
                    onClick={() => toggleMenu()}
                >
                    <svg width='100' height='100' viewBox='0 0 100 100'>
                        <path
                            className='line line1'
                            d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
                        />
                        <path className='line line2' d='M 20,50 H 80' />
                        <path
                            className='line line3'
                            d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
                        />
                    </svg>
                </button>

                {/* Mobile menu here */}
                <MobileMenu open={menuOpen} setOpen={setMenuOpen} />
                {/* #endregion  /**======== Mobile Menu =========== */}
            </div>
        </header>
    )
}

export default Header
