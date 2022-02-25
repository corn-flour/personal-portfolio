import { NextPage } from 'next'
import React from 'react'

import clsxm from '@/lib/clsxm'

import UnderlineLink from '../links/UnderlineLink'
import SocialList from '../SocialList'

const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/contact', label: 'contact' },
]

const Footer: NextPage = () => {
    return (
        <footer className='layout border-light border-t'>
            <div className='flex flex-col items-center justify-between py-8 md:flex-row'>
                <nav className='sm:block'>
                    <ul className='flex items-center justify-between space-x-8'>
                        {links.map(({ href, label }) => (
                            <li key={`${href}${label}`}>
                                <UnderlineLink
                                    href={href}
                                    className={clsxm(
                                        'font-serif text-sm font-light tracking-wide'
                                    )}
                                >
                                    {label}
                                </UnderlineLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <SocialList
                    containerClass='mt-4 flex gap-4 md:mt-0'
                    iconClass='text-lg'
                />
            </div>
            <div className='text-light mb-2 text-center text-xs font-thin'>
                <span>
                    Copyright © 2022 Huy Anh Nguyen. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer
