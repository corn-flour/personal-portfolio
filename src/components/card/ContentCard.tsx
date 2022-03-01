import Link from 'next/link'
import React from 'react'

import clsxm from '@/lib/clsxm'

import ArrowLink from '../links/ArrowLink'

type ContentCardProp = {
    slug: string
    type: string
    title: string
    imageURL: string
    description: string
    category?: string
    date?: string
}

// Display MDX Content as an image card with link to post
const ContentCard = ({
    slug,
    type,
    title,
    description,
    imageURL,
    category,
    date,
}: ContentCardProp) => {
    return (
        <div
            style={{
                backgroundImage: `url(${imageURL})`,
            }}
            className={clsxm(
                'group',
                'w-full bg-cover bg-center text-white',
                'overflow-hidden transition duration-300',
                'hover:scale-105 hover:!bg-black/75',
                'focus-within:outline'
            )}
        >
            <Link href={`/${type}/${slug}`}>
                <a
                    className={clsxm(
                        'flex flex-col items-start justify-end p-6',
                        'aspect-[4/3]',
                        'bg-gradient-to-t from-black to-black/0',
                        // 'bg-black/50',
                        'transition duration-300',
                        'group-hover:bg-black/50',
                        'group-focus-within:bg-black/50'
                    )}
                >
                    <div
                        className={clsxm(
                            'flex flex-col items-start',
                            'translate-y-[60%] transition duration-300',
                            'group-hover:translate-y-0',
                            'group-focus-within:translate-y-0'
                        )}
                    >
                        <h3
                            className={clsxm(
                                'font-serif lowercase',
                                'mb-8 pb-2',
                                'after:absolute after:left-0 after:top-full after:contents after:h-[2px] after:w-full',
                                'after:bg-primary-500/75',
                                'relative transition duration-200 after:origin-left after:scale-x-0',
                                'group-hover:after:scale-x-100 group-hover:after:duration-500'
                            )}
                        >
                            {title}
                        </h3>
                        <div
                            className={clsxm(
                                'mb-2 flex items-center gap-4',
                                'opacity-0 transition duration-300',
                                'group-hover:opacity-100',
                                'group-focus-within:opacity-100'
                            )}
                        >
                            {!!category && (
                                <span
                                    className={clsxm(
                                        'text-xs font-light uppercase tracking-wider',
                                        'bg-primary-500/50 px-2 py-1'
                                    )}
                                >
                                    {category}
                                </span>
                            )}
                            {!!date && (
                                <span
                                    className={clsxm(
                                        'text-sm font-light italic'
                                    )}
                                >
                                    {date}
                                </span>
                            )}
                        </div>
                        <p
                            className={clsxm(
                                'mb-5 opacity-0 transition duration-300',
                                'text-sm font-light md:text-xs lg:text-sm',
                                'group-hover:opacity-100',
                                'group-focus-within:opacity-100'
                            )}
                        >
                            {description}
                        </p>
                    </div>

                    <ArrowLink
                        as='span'
                        className={clsxm(
                            'flex items-center py-1',
                            'font-light uppercase',
                            'group-hover:text-primary-500',
                            'group-focus-within:text-primary-500'
                        )}
                    >
                        Read more
                    </ArrowLink>
                </a>
            </Link>
        </div>
    )
}

export default ContentCard
