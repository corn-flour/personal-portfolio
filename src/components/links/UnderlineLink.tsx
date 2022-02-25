import * as React from 'react'

import clsxm from '@/lib/clsxm'

import UnstyledLink, {
    UnstyledLinkProps,
} from '@/components/links/UnstyledLink'

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
    ({ children, className, ...rest }, ref) => {
        return (
            <UnstyledLink
                ref={ref}
                {...rest}
                className={clsxm(
                    'animated-underline custom-link inline-flex items-center font-semibold',
                    'focus-visible:rounded',
                    'hover-primary text-color',
                    className
                )}
            >
                {children}
            </UnstyledLink>
        )
    }
)

export default UnderlineLink
