import { NextPage } from 'next'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import clsxm from '@/lib/clsxm'

import UnderlineLink from '../links/UnderlineLink'
import UnstyledLink from '../links/UnstyledLink'
import ListItem from '../text/ListItem'

const links = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/contact', label: 'contact' },
]

const Footer: NextPage = () => {
    return (
        <footer className='layout border-t border-t-neutral-200 dark:border-t-neutral-700'>
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

                <ul className='mt-4 flex gap-4 md:mt-0'>
                    <ListItem>
                        <UnstyledLink
                            href='https://github.com/bte234'
                            className='hover-primary text-lg'
                            aria-label='My Github'
                        >
                            <BsGithub />
                        </UnstyledLink>
                    </ListItem>
                    <ListItem>
                        <UnstyledLink
                            href='https://linkedin.com/in/huyanh149'
                            className='hover-primary text-lg'
                            aria-label='My LinkedIn'
                        >
                            <BsLinkedin />
                        </UnstyledLink>
                    </ListItem>
                </ul>
            </div>
            <div className='mb-2 text-center text-xs font-thin text-zinc-500'>
                <span>
                    Copyright © 2022 Huy Anh Nguyen. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer
