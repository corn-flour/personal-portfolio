import React from 'react'

import clsxm from '@/lib/clsxm'

export type ParagraphProps = {
    children: React.ReactNode
    className?: string
} & React.ComponentPropsWithRef<'p'>

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ children, className, ...rest }, ref) => {
        return (
            <p
                ref={ref}
                className={clsxm('my-8 font-light leading-relaxed', className)}
                {...rest}
            >
                {children}
            </p>
        )
    }
)

export default Paragraph
