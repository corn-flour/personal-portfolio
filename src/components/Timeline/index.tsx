import React from 'react'

const Timeline = () => {
    return (
        <div className='mx-auto flex grid-cols-9 flex-col p-2 md:grid'>
            {/* Left */}
            <div className='flex flex-row-reverse justify-end md:contents'>
                <div className='col-start-1 col-end-4 my-4 p-4'>
                    <h3 className='font-serif font-normal md:text-xl'>
                        Sandman Media Inc.
                    </h3>
                    <p className='mb-3 italic'>web developer</p>
                    <p className='font-light leading-tight md:text-lg'>
                        Sep 2020 - Present
                    </p>
                </div>
                <div className='relative col-start-5 col-end-6 mr-10 md:mx-auto'>
                    <div className='flex h-full w-6 items-center justify-center'>
                        <div className='pointer-events-none h-full w-1 bg-primary-800'></div>
                    </div>
                    <div className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-primary-500 shadow'></div>
                </div>
            </div>

            {/* Right */}
            <div className='flex md:contents'>
                <div className='relative col-start-5 col-end-6 mr-10 md:mx-auto'>
                    <div className='flex h-full w-6 items-center justify-center'>
                        <div className='pointer-events-none h-full w-1 bg-primary-800'></div>
                    </div>
                    <div className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-primary-500 shadow'></div>
                </div>
                <div className='col-start-7 col-end-10 my-4 mr-auto p-4'>
                    <h3 className='font-serif font-normal md:text-xl'>
                        FDU - Vancouver
                    </h3>
                    <p className='mb-3 italic'>IT Assistant</p>
                    <p className='font-light leading-tight md:text-lg'>
                        Oct 2019 - Mar 2020
                    </p>
                </div>
            </div>

            {/* Left */}
            <div className='flex flex-row-reverse md:contents'>
                <div className='col-start-1 col-end-4 my-4 flex-1 p-4'>
                    <h3 className='font-serif font-normal md:text-xl'>
                        Vinple
                    </h3>
                    <p className='mb-3 italic'>Back-end team lead</p>
                    <p className='font-light leading-tight md:text-lg'>
                        Oct 2018 - Oct 2019
                    </p>
                </div>
                <div className='relative col-start-5 col-end-6 mr-10 md:mx-auto'>
                    <div className='flex h-full w-6 items-center justify-center'>
                        <div className='pointer-events-none h-full w-1 bg-primary-800'></div>
                    </div>
                    <div className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-primary-500 shadow'></div>
                </div>
            </div>
        </div>
    )
}

export default Timeline
