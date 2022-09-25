import { NextPage } from 'next'
import React from 'react'

import UnstyledLink from '../links/UnstyledLink'

const Logo: NextPage = () => {
    return (
        <UnstyledLink
            href='/'
            className='hover-text-primary text-default font-serif text-3xl tracking-wider transition-all'
        >
            harry
        </UnstyledLink>
    )
}

export default Logo
