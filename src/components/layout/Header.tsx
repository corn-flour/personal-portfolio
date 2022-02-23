import * as React from 'react'

import UnstyledLink from '@/components/links/UnstyledLink'

import DarkModeToggle from '../DarkModeToggle'

const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/contact', label: 'contact' },
]

export default function Header() {
    return (
        <header className='sticky top-0 z-50 bg-white dark:bg-slate-800'>
            <div className='layout flex h-14 items-center justify-between'>
                <UnstyledLink
                    href='/'
                    className='font-serif text-xl hover:text-emerald-600'
                >
                    harry
                </UnstyledLink>
                <nav>
                    <ul className='flex items-center justify-between space-x-4'>
                        {links.map(({ href, label }) => (
                            <li key={`${href}${label}`}>
                                <UnstyledLink
                                    href={href}
                                    className='font-serif text-sm hover:text-emerald-600'
                                >
                                    {label}
                                </UnstyledLink>
                            </li>
                        ))}
                        <li className='flex items-center'>
                            <DarkModeToggle />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
