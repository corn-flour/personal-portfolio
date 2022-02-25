import { NextPage } from 'next'
import React from 'react'
import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from 'react-icons/bs'

import clsxm from '@/lib/clsxm'

import UnstyledLink from './links/UnstyledLink'
import ListItem from './text/ListItem'

type SocialListProps = {
    containerClass?: string
    iconClass?: string
}

const SocialList: NextPage<SocialListProps> = ({
    containerClass,
    iconClass,
}) => {
    return (
        <ul className={containerClass}>
            <ListItem>
                <UnstyledLink
                    href='https://github.com/bte234'
                    className={clsxm('hover-text-primary', iconClass)}
                    aria-label='My Github'
                >
                    <BsGithub />
                </UnstyledLink>
            </ListItem>
            <ListItem>
                <UnstyledLink
                    href='https://linkedin.com/in/huyanh149'
                    className={clsxm('hover-text-primary', iconClass)}
                    aria-label='My LinkedIn'
                >
                    <BsLinkedin />
                </UnstyledLink>
            </ListItem>
            <ListItem>
                <UnstyledLink
                    href='mailto:nguyenhuyanh149@gmail.com'
                    className={clsxm('hover-text-primary', iconClass)}
                    aria-label='Email me'
                >
                    <BsFillEnvelopeFill />
                </UnstyledLink>
            </ListItem>
        </ul>
    )
}

export default SocialList
