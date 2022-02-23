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
        <header className='sticky top-0 z-50'>
            <div className='layout flex h-14 items-center justify-between'>
                <UnstyledLink
                    href='/'
                    className='font-bold hover:text-gray-600'
                >
                    harry
                </UnstyledLink>
                <nav>
                    <ul className='flex items-center justify-between space-x-4'>
                        {links.map(({ href, label }) => (
                            <li key={`${href}${label}`}>
                                <UnstyledLink
                                    href={href}
                                    className='hover:text-gray-600'
                                >
                                    {label}
                                </UnstyledLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <DarkModeToggle />
            </div>
        </header>
    )
}
