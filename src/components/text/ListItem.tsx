import React from 'react'

import clsxm from '@/lib/clsxm'

export type ListItemProp = {
    children: React.ReactNode
    className?: string
} & React.ComponentPropsWithRef<'li'>

const ListItem = React.forwardRef<HTMLLIElement, ListItemProp>(
    ({ children, className, ...rest }, ref) => {
        return (
            <li ref={ref} className={clsxm('font-light', className)} {...rest}>
                {children}
            </li>
        )
    }
)

export default ListItem
