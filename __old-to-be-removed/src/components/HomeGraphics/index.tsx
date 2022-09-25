import Svg from 'public/svg/pic.svg'
import React from 'react'

type HomeGraphicsProp = {
    className?: string
}
const HomeGraphics = ({ className }: HomeGraphicsProp) => {
    return <Svg className={className} width='auto' height='auto' />
}

export default HomeGraphics
